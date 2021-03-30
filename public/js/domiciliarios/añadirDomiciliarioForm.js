import {enviarNewDomiciliario} from '../enviardatosAlServidor.js'
import {updateDomicil} from './updateMainDashboard.js'


export function añadirDomiciliarioForm(info){
    
    const domiciliarioName = document.getElementById('nombreDomiciliario').value.trim()
    const domiciliarioCell = parseInt(document.getElementById('cellularDomiciliario').value.trim())


    if(isNaN(domiciliarioCell)){
        alert("porfavor ingrese in cellular valido. EJEMPLO: 3175126893")
    }else{
        window.confirm(domiciliarioName + " | " + domiciliarioCell + " añadido a tu lista de domiciliarios")
        let newDomiciliario = {
            name : domiciliarioName,
            cell : domiciliarioCell
        }
        
        enviarNewDomiciliario(newDomiciliario)
        info.push(newDomiciliario)
        
        updateDomicil(info)
    }


}