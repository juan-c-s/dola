import { getInfoClients } from '../getInfo.js'
import { updateDashBoard } from './updateMainDashboard.js'



//TODO:: PQ NO CARGA

window.addEventListener('load', (e) => {

    getInfoClients().then(resp => {

        updateDashBoard(resp)
    }).catch(err => console.log(err))
})

