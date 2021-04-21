import { getInfoClients } from '../getInfo.js'
import { updateDashBoard } from './updateMainDashboard.js'
import { sendButton } from './clickHandelers.js'


//TODO:: PQ NO CARGA

window.addEventListener('load', (e) => {
    getInfoClients().then(resp => {
        updateDashBoard(resp)
    }).catch(err => console.log(err))
})
document.getElementById("sendButton").addEventListener('click', (e) => {
    sendButton();
})
