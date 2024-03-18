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
     //Funciones para crear los 5 divs que tapen a Bob
function crearDivsDeBob1() {
    for (let i = 4; i > 1 ;i--) {
        const divTapador = document.createElement('div')
        if(i < 4) {
            divTapador.id = 'div'+(5-i)
        } else {
            divTapador.id = 'div'+i
        }
        divTapador.classList.add('divTapador')
        bobSubcont1.appendChild(divTapador)
    }
}
function crearDivsDeBob2() {
    for (let i = 5; i < 7 ;i++) {
        const divTapador = document.createElement('div')
        divTapador.id = 'div'+i
        divTapador.classList.add('divTapador')
        bobSubcont2.appendChild(divTapador)
    }
}
    //Funcion para borrar intro
const otraPalabraBtn = document.createElement('button')
const bobQuejas = document.createElement('div')
const inputDiv = document.createElement('div')
const inputContent = document.createElement('input')
const bobContenedor = document.createElement('div')
const divsBobContenedor = document.createElement('div')
const bobSubcont1 = document.createElement('div')
const bobSubcont2 = document.createElement('div')
const bob = document.createElement('img')

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

    bobContenedor.classList.add('bobContenedor')
    bob.id = 'bobImg'
    bob.src = './imagenes/normal_cuello.png'
    divsBobContenedor.classList.add('divsBobContenedor')
    bobSubcont1.id = 'bobSubcont1'
    bobSubcont2.id = 'bobSubcont2'
    ahorcado.appendChild(divsBobContenedor)
    divsBobContenedor.appendChild(bobSubcont1)
    divsBobContenedor.appendChild(bobSubcont2)
    crearDivsDeBob1()
    crearDivsDeBob2()
}

    //JUEGO
        //Funcion para obtener una palabra aleatoria del arreglo
var arrayPalabra
function getPalabraRandom() {
    var nroRandom = Math.round(Math.random()*(arrayTodasPalabras.length -1))
        arrayPalabra = arrayTodasPalabras[nroRandom].split('')
}

        //Funcion para ir agregando partes de bob
function agregarPartesDeBob() {
    if (intentos === 1) {
        ahorcado.appendChild(bobContenedor)
        bobContenedor.appendChild(bob)
    } else {
        for (let i=2; i<7 ; i++) {
            if (i === intentos) {
                const divIntento = document.querySelector('#div'+i)
                divIntento.setAttribute('style','background:transparent')
            }
        }
    }
}

        //Funcion (e) para luego meter dentro del evento del input
var eventoInput = function(e){
    if(e.key >= 'a' && e.key <= 'z')
   { var contador = 0
    var allDivLetra = document.querySelectorAll('.divLetra')
    for(let i = 0 ; i < allDivLetra.length ; i++){
        if(allDivLetra[i].textContent.toLowerCase() === e.key){
            break;
        }
        if(allDivLetra[i].id === e.key) {
            allDivLetra[i].textContent = e.key
        } else {
            contador++
        }
    }
    if (contador === allDivLetra.length && !contDescarte.textContent.includes(e.key)) {
        intentos ++
        contDescarte.textContent += e.key + ' '
        agregarPartesDeBob()
        bobDesesperado()
    }
    finDelJuego(allDivLetra)}
}

    //Funcion para agregar a Bob desesperado cada vez que usuario se equivoca
function bobDesesperado(){
    bob.src = './imagenes/desesperado_cuello.png'
    if(intentos < 5) {
        setTimeout(()=>{
            bob.src = './imagenes/normal_cuello.png'
        },1000)
    }
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
    var palabraAleatoria = arrayPalabra
    for(let i = 0 ; i < palabraAleatoria.length ; i++) {
        letra = palabraAleatoria[i]
        const divLetra = document.createElement('div')
        divLetra.id = letra
        divLetra.classList.add('divLetra')
       if(palabraAleatoria[i] === palabraAleatoria[0]) {
        divLetra.classList.add('primeraLetra')
            if(i===0) {
                divLetra.textContent = letra.toUpperCase()
            } else {
                divLetra.textContent = letra
            }
       } else {
        divLetra.classList.add('letraOculta')
        divLetra.textContent = '-'
       }
       contPalabra.appendChild(divLetra)
    }
    console.log(palabraAleatoria)
    return palabraAleatoria
}

        //Funcion para detener el juego
function finDelJuego(array){
    if(intentos === 7) {
        inputContent.removeEventListener('keypress',eventoInput)
        bobQuejas.textContent = 'Perdiste! Pero si te sirve de consuelo, yo perdi mas'
        bob.src = './imagenes/muerto_cuello.png'
        for(let i=0 ; i< array.length ; i++) {
            if(array[i].textContent === '-') {
                array[i].textContent = array[i].id
            }
        }
    } else {
        console.log(array)
        for(let i = 0 ; i < array.length ; i++) {
            if(array[i].textContent.toLowerCase() !== array[i].id){
                break
            } else if (i === array.length - 1){
                inputContent.removeEventListener('keypress',eventoInput)
                bobQuejas.textContent = 'Ganaste! Muchas graciaaas'
                if(!ahorcado.contains(bobContenedor)) {
                    ahorcado.appendChild(bobContenedor)
                    bobContenedor.appendChild(bob)
                }
                bobContenedor.classList.remove('bobContenedor')
                bobContenedor.classList.add('bobContenedorGanador')
                bob.src = './imagenes/feliz.png'
                ahorcado.removeChild(divsBobContenedor)
            }
        }
    }
}



        //Funcion de todo el juego
function juego() {
    borrarIntro()
    getPalabraRandom()
    getDivsDeLetra()
    evaluarInput()  
}

        //Funcion de boton de otra palabra
     




function comienzoDelJuego() {
juego()
}
reiniciarBtn.addEventListener('click',comienzoDelJuego)

//PROBLEMAS:
//Hay que hacer funcion de otra palabra y estar atenta a que cosas hay que resetear y cuales ya estan creadas globalmente

