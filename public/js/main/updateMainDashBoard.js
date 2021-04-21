import { CurrencyConverter, convertMinsToHrsMins } from '../globalUsfulFunctions.js'

export function updateDasBoard(domicilios) {


    let finalElemt = ``
    let contador = 0;
    let listIteamsContainer = document.getElementById('liscontainerId');
    const htmlLineIteam = getLineitemhtml(domicilios)

    const makeLineIteamsList = () => {
        domicilios.forEach((domicilio) => {
            contador++;
            finalElemt = finalElemt + getLineitemhtml(domicilio, domicilio.domiciliario.name, contador)

        })
    }
    makeLineIteamsList()

    listIteamsContainer.innerHTML = finalElemt;

}

function getLineitemhtml(domicilio, domiciliario, id) {

    // console.log(domicilio.createdAt instanceof Date)
    // console.log("Date" + Date())
    //Definir Date

    return `
    <div class="itemContainer" id="${id}">
        <p class="status ${(domicilio.entregado) ? ("greenBox") : ("redBox")}" id="infoEntregado">Entregado</p>
        <p class="status statusEntrega ${(domicilio.pagado) ? ("greenBox") : ("redBox")}" id="infoPagado">Pagado</p>
        <p class="status statusEntrega ${(domicilio.cobrado) ? ("greenBox") : ("redBox")}" id="infoCobrado">Cobrado</p>
        <div class="itemcontainer-sub">
            <div class="iteamLeft">

                <p>${CurrencyConverter(domicilio.efectivo)}</p>
                <p>${convertMinsToHrsMins(domicilio.createdAt)}</p>

            </div>
            
            <div class="iteamRight">

                <p>${domiciliario}</p>
                <p>#${id}</p>

            </div>
        </div>
    </div>`
}