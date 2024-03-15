// COMIENZO DE INTRO

const presentacion1 = document.querySelector('#presentacion1')
const presentacion2 = document.querySelector('#presentacion2')
const imagenIntro = document.querySelector('#pImg')
const textoIntro = document.querySelector('#pTexto')
const contPalabra = document.querySelector('#contPalabra')
const ahorcado = document.querySelector('#ahorcado')
const intro = document.querySelector('.intro')
const letrasDescartadas = document.querySelector('#introContenedor')

const opciones = document.querySelector('.opciones')
const musicaBtn = document.createElement('button')
const reiniciarBtn = document.createElement('button')
const helpBtn = document.createElement('button')

function intro1() {
    presentacion1.textContent = 'Hola. Este es Bob.'
}
function intro2() {
    const bobIntro = document.createElement('img')
    bobIntro.classList.add('bobIntro')
    bobIntro.src = "./imagenes/normal.png"
    imagenIntro.appendChild(bobIntro)
}
function intro3() {
    textoIntro.textContent = 'Bob no sabe muchas palabras, y eso lo ha metido en problemas. Necesita tu ayuda para no convertirse en ...'
}
function intro4() {
    contPalabra.textContent = 'EL AHORCADO'
    const horca = document.createElement('img')
    horca.classList.add('laHorca')
    horca.src="./imagenes/horca.png"
    ahorcado.appendChild(horca)
}
function intro5() {
    musicaBtn.id = 'musicaBtn'
    musicaBtn.textContent = 'MUSICA'
    reiniciarBtn.id='reiniciarBtn'
    reiniciarBtn.textContent = 'HAZLO POR BOB'
    helpBtn.id='helpBtn'
    helpBtn.textContent = '?'
    opciones.appendChild(musicaBtn)
    opciones.appendChild(reiniciarBtn)
    opciones.appendChild(helpBtn)

}
function introTotal(cb1,cb2,cb3,cb4,cb5) {
    setTimeout(cb1,2000)
    setTimeout(cb2,4000)
    setTimeout(cb3,6000)
    setTimeout(cb4,10000)
    setTimeout(cb5,10000)
}
introTotal(intro1,intro2,intro3,intro4,intro5)
// FIN DE INTRO

//COMIENZO DE JUEGO
    //BORRAR INTRO Y COMENZAR JUEGO
const otraPalabraBtn = document.createElement('button')
function borrarIntro() {
    opciones.removeChild(reiniciarBtn)
    otraPalabraBtn.id = 'otraPalabraBtn'
    otraPalabraBtn.textContent = 'OTRA PALABRA'
    opciones.insertBefore(otraPalabraBtn,helpBtn)

    intro.removeChild(presentacion1)
    intro.removeChild(presentacion2)

    intro.classList.remove('intro')
    intro.classList.add('contDescarte')

    letrasDescartadas.removeAttribute('id')
    letrasDescartadas.id = 'letrasDescartadas'

    contPalabra.textContent = ''

}
reiniciarBtn.addEventListener('click',borrarIntro)

    //JUEGO
        //Funcion para obtener una palabra aleatoria del arreglo
function getPalabraRandom() {
    var nroRandom = Math.round(Math.random()*(arrayTodasPalabras.length -1))
    var arrayPalabra = arrayTodasPalabras[nroRandom].split('')
    return arrayPalabra
}
        //Funcion para crear la palabra oculta del ahorcado
function getDivsDePalabra() {
    var letra
    var palabraAleatoria = getPalabraRandom()
    for(let i = 0 ; i < palabraAleatoria.length ; i++) {
        letra = palabraAleatoria[i]
       const divLetra = document.createElement('div')
       divLetra.classList.add('divLetra')
       if(i === 0) {
        divLetra.classList.add('primeraLetra')
        divLetra.textContent = letra
       } else {
        divLetra.classList.add(letra)
       }
       contPalabra.appendChild(divLetra)
    }
}
