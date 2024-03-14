//INTRO

const presentacion1 = document.querySelector('#presentacion1')
const imagenIntro = document.querySelector('#pImg')
const textoIntro = document.querySelector('#pTexto')
const contPalabra = document.querySelector('#contPalabra')
const ahorcado = document.querySelector('#ahorcado')
const opciones = document.querySelector('.opciones')
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
    const musicaBtn = document.createElement('button')
    const reiniciarBtn = document.createElement('button')
    const helpBtn = document.createElement('button')
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
    setTimeout(cb4,8000)
    setTimeout(cb5,10000)
}
introTotal(intro1,intro2,intro3,intro4,intro5)

