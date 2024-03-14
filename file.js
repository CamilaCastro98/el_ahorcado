const input = document.querySelector('#input')
const btnAgregar = document.querySelector('#agregar')
const lista = document.querySelector('.lista')

btnAgregar.addEventListener('click',()=> {
    if(input.value === '') {
        input.placeholder = 'Debes ingresar item'
    } else {
        const item = document.createElement('li')
        const div = document.createElement('div')
        const btnEliminar = document.createElement('button')
            input.placeholder = 'Ingresa nuevo item'
            item.textContent = input.value
            btnEliminar.textContent = 'Eliminar'
            div.appendChild(item)
            div.appendChild(btnEliminar)
            lista.appendChild(div)
                btnEliminar.addEventListener('click',()=> {
                lista.removeChild(div)
            })
    }
})