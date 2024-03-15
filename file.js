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
    //Funcion para borrar intro
const otraPalabraBtn = document.createElement('button')
const bobQuejas = document.createElement('div')
const inputDiv = document.createElement('div')
const inputContent = document.createElement('input')

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

    inputDiv.classList.add('inputDiv')
    inputContent.id = 'input'
    inputContent.type = 'text'
    inputContent.maxLength = '1'
    letrasDescartadas.appendChild(inputDiv)
    letrasDescartadas.insertBefore(inputContent,intro)

    bobQuejas.id = 'bobQuejas'
    bobQuejas.textContent = 'Vamos, piensa una letra que pueda existir en la palabra misteriosa. PENSALO BIEN NO QUIERO MORIR'
    letrasDescartadas.insertBefore(bobQuejas,inputContent)

    contPalabra.textContent = ''

}

    //JUEGO
        //Funcion para obtener una palabra aleatoria del arreglo
function getPalabraRandom() {
    var nroRandom = Math.round(Math.random()*(arrayTodasPalabras.length -1))
    var arrayPalabra = arrayTodasPalabras[nroRandom].split('')
    return arrayPalabra
}

        //Funcion (e) para luego meter dentro del evento del input
var eventoInput = function(e){
    var contador = 0
    var allDivLetra = document.querySelectorAll('.divLetra')
    for(let i = 0 ; i < allDivLetra.length ; i++){
        if(allDivLetra[i].id === e.key) {
            allDivLetra[i].textContent = e.key
        } else {
            contador++
        }
    }
    if (contador === allDivLetra.length) {
        intentos ++
        contDescarte.textContent += e.key + ' '
    }
    finDelJuego(allDivLetra)
}

    //Funcion para agregar al input un evento que evalue si la tecla presionada es la letra oculta
var intentos = 0
const contDescarte = intro
function evaluarInput() {
    inputContent.addEventListener('keypress',eventoInput)
}

        //Funcion para crear la palabra oculta del ahorcado
function getDivsDeLetra() {
    var letra
    let palabraAleatoria = getPalabraRandom()
    for(let i = 0 ; i < palabraAleatoria.length ; i++) {
        letra = palabraAleatoria[i]
        const divLetra = document.createElement('div')
       divLetra.classList.add('divLetra')
       if(palabraAleatoria[i] === palabraAleatoria[0]) {
        divLetra.classList.add('primeraLetra')
        divLetra.textContent = letra
       } else {
        divLetra.id = letra
        divLetra.classList.add('letraOculta')
        divLetra.textContent = '-'
       }
       contPalabra.appendChild(divLetra)
    }
    return palabraAleatoria
}

        //Funcion para detener el juego
function finDelJuego(array){
    if(intentos === 7) {
        inputContent.removeEventListener('keypress',eventoInput)
        bobQuejas.textContent = 'Perdiste! Pero si te sirve de consuelo, yo perdi mas'
    } else {
        var k = 0
        for(let i = 0 ; i < array.length ; i++) {
            if(array[i].id === array[i].textContent){
                k++
            }
        }
        if(k === array.length - 1) {
            inputContent.removeEventListener('keypress',eventoInput)
            bobQuejas.textContent = 'Ganaste! Muchas graciaaas'
        }
    }
}

        



        //SE IRA MODIFICANDO DESPUES Funcion para meter dentro del evento del boton de inicio. Borra el inicio y elige palabra

function comienzoDelJuego() {
    borrarIntro()
    getDivsDeLetra()
    evaluarInput()
}
reiniciarBtn.addEventListener('click',comienzoDelJuego)

//CUANDO TERMINES TODAS LAS FUNCIONES JUNTALAS EN UNA UNICA FUNCION QUE SE LLAME JUEGO, Y MANEJA QUE LA 
//VARIABLE PALABRAALEATORIA SEA GLOBAL DENTRO DE LA FUNCION JUEGO, ASI NO HAY QUE ESTAR RETORNANDOLA EN CADA SUBFUNCION