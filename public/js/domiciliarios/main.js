import {getInfoDomiciliarios} from '../getInfo.js'
import {updateDomicil} from './updateMainDashboard.js'
import {añadirDomiciliarioForm} from './añadirDomiciliarioForm.js'

window.addEventListener('load',(e)=>{
    updateDomicil(getInfoDomiciliarios().domiciliarios)
})

             
document.getElementById('añadirDomiciliarioButton').addEventListener('click',()=>{
    añadirDomiciliarioForm(getInfoDomiciliarios().domiciliarios)
})

