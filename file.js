//Funcion del primer boton start
const opciones = document.querySelector('.opciones')
function botonStart() {
    const startBtn = document.createElement('button')
    startBtn.id = 'startBtn'
    startBtn.textContent = 'COMENZAR'
    opciones.appendChild(startBtn)
    startBtn.addEventListener('click',()=> {
        opciones.removeChild(startBtn)
        start()
    })
}

//Funcion para que todo empiece con el primer boton
function start() {

// COMIENZO DE INTRO
        //Funcion para reproducir sonidos
function reproducir(a,currentTime) {
    const audio = document.createElement('audio')
    audio.src = a
    audio.currentTime = currentTime
    audio.play()
}

const presentacion1 = document.querySelector('#presentacion1')
const presentacion2 = document.querySelector('#presentacion2')
const imagenIntro = document.querySelector('#pImg')
const textoIntro = document.querySelector('#pTexto')
const contPalabra = document.querySelector('#contPalabra')
const ahorcado = document.querySelector('#ahorcado')
const intro = document.querySelector('.intro')
const letrasDescartadas = document.querySelector('#introContenedor')

const musicaBtn = document.createElement('button')
const musicaDiv = document.createElement('div')
const reiniciarBtn = document.createElement('button')
const helpBtn = document.createElement('button')

function intro1() {
    presentacion1.textContent = 'Hola. Este es Bob.'
    reproducir('./sonidos/tick.mp3',0)
}
function intro2() {
    const bobIntro = document.createElement('img')
    bobIntro.classList.add('bobIntro')
    bobIntro.src = "./imagenes/normal.png"
    imagenIntro.appendChild(bobIntro)
    reproducir('./sonidos/asustado1.wav',0)
}
function intro3() {
    textoIntro.textContent = 'Bob no sabe muchas palabras, y eso lo ha metido en problemas. Necesita tu ayuda para no convertirse en ...'
    reproducir('./sonidos/tick.mp3',0)
}
function intro4() {
    contPalabra.textContent = 'EL AHORCADO'
    const horca = document.createElement('img')
    horca.classList.add('laHorca')
    horca.src="./imagenes/horca.png"
    ahorcado.appendChild(horca)
    reproducir('./sonidos/slam.mp3',1.3)
}

//Funcion para crear todas las opciones de musica
var audioActual = null
function temasBardcoreCreacion() {
   const menuMusica = document.createElement('div')
   let randomTema = Math.round(Math.random()*(arrayTemas.length - 1))
   for(let i = 0 ; i < arrayTemas.length ; i++) {
    const temaBtn = document.createElement('button')
    const temaAudio = document.createElement('audio')
    temaBtn.textContent = arrayTemas[i].tema
    temaBtn.setAttribute('data-src',arrayTemas[i].src)
    temaAudio.src = arrayTemas[i].src
    menuMusica.appendChild(temaBtn)
    if(randomTema === i) {
        audioActual = temaAudio
        audioActual.play()
    }
    temaBtn.addEventListener('click',()=>{
        if (audioActual !== null) {
            audioActual.pause()
            audioActual.currentTime = 0
        }
    audioActual = temaAudio
    audioActual.play()
   })
}
   musicaDiv.appendChild(menuMusica)
}

function intro5() {
    musicaBtn.id = 'musicaBtn'
    musicaBtn.textContent = 'MUSICA'
    musicaDiv.classList.add('.musicaDiv')
    reiniciarBtn.id='reiniciarBtn'
    reiniciarBtn.textContent = 'HAZLO POR BOB'
    helpBtn.id='helpBtn'
    helpBtn.textContent = '?'
    musicaDiv.appendChild(musicaBtn)
    opciones.appendChild(musicaDiv)
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
        //Funcion para poner todos los divs de bob o transparentes o de color
        function divsBackground(color) {
            const divsTapadores = document.querySelectorAll('.divTapador')
            for(let i = 0 ; i < divsTapadores.length ; i++) {
                divsTapadores[i].setAttribute('style','background:'+color)
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
    temasBardcoreCreacion()
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
    divsBackground('burlywood')
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
            reproducir('./sonidos/tick.mp3',0)
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
        reproducir('./sonidos/sorprendido.wav',0)
        setTimeout(()=>{
            bob.src = './imagenes/normal_cuello.png'
        },1000)
    } else if(intentos >= 5 && intentos < 7){
        reproducir('./sonidos/grito.mp3',0.7)
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
        reproducir('./sonidos/muerto.mp3',0)
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
                reproducir('./sonidos/trompetas.mp3',0)
                if(!ahorcado.contains(bobContenedor)) {
                    ahorcado.appendChild(bobContenedor)
                    bobContenedor.appendChild(bob)
                }
                bobContenedor.classList.remove('bobContenedor')
                bobContenedor.classList.add('bobContenedorGanador')
                bob.src = './imagenes/feliz.png'
                divsBackground('transparent')
            }
        }
    }
}



        //Funcion de todo el juego
function juego() {
    getPalabraRandom()
    getDivsDeLetra()
    evaluarInput()  
}

        //Funcion de boton de otra palabra
function reinicio() {
    ahorcado.removeChild(bobContenedor)
    bobContenedor.removeChild(bob)
    if (bob.src.endsWith('imagenes/feliz.png')) {
        bobContenedor.classList.add('bobContenedor')
        bobContenedor.classList.remove('bobContenedorGanador')
    }
    intentos = 0
    contDescarte.textContent = ''
    const divLetraRemove = document.querySelectorAll('.divLetra')
    for(let i = 0 ; i < divLetraRemove.length ; i++) {
        contPalabra.removeChild(divLetraRemove[i])
    }
    bobQuejas.textContent = 'Vamos, piensa una letra que pueda existir en la palabra misteriosa. PENSALO BIEN NO QUIERO MORIR'
    divsBackground('burlywood')
}  




function comienzoDelJuego() {
borrarIntro()
juego()
}
function otraPalabraJuego() {
reinicio()
juego()
}
reiniciarBtn.addEventListener('click',comienzoDelJuego)
otraPalabraBtn.addEventListener('click',otraPalabraJuego)
}
botonStart()

//QUE FALTA


