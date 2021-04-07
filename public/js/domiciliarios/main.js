import { getInfoDomiciliarios } from '../getInfo.js'
import { updateDomicil } from './updateMainDashboard.js'
import { añadirDomiciliarioForm } from './añadirDomiciliarioForm.js'

window.addEventListener('load', (e) => {
    fetch('/getDomiciliarios').then(response => {
        response.json().then(info => {
            updateDomicil(info)

        })
    })
})


document.getElementById('añadirDomiciliarioButton').addEventListener('click', () => {
    añadirDomiciliarioForm(getInfoDomiciliarios().domiciliarios)
})

