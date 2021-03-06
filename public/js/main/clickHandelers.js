import { updateDasBoard } from './updateMainDashBoard.js'
import { enviarDaylyData } from '../enviardatosAlServidor.js'
import { updateDailyInfoBanner } from './updateDailyInfo.js'


export function litenToChnagesInListSubContainers(e, info) {

    let elment = e.target;
    let selectedId = -1;
    // const infoVieja = {
    //     "entregado": info[id - 1].entregado,
    //     "pagado": info[id - 1].pagado,
    //     "cobrado": info[id - 1].cobrado,
    // }

    //TODO:   //guardar info Vieja para updatiar sólo la que haya cambiado
    //despues sirve para saber si cambió o no, para evitar hacer tantos post.
    //Esto es cuando la persona hunde el contenedor y no los botones, así que no habría nada que actualizar

    for (let tt = 0; tt < 4; tt++) {

        if (elment.className === "itemContainer") {
            selectedId = elment.id;
            break;
        }
        elment = elment.parentNode

    }

    if (selectedId != -1) {
        updateDaylyInfoData(info, selectedId, e.target.id)
        updateRightContainer(info, selectedId, e.target.id)
        saveButton(info, selectedId, e.target.id)
    }


}

function updateDaylyInfoData(info, id, idName) {

    if (idName === 'infoEntregado') {
        // console.log(info[id - 1]._id)

        info[id - 1].entregado = !info[id - 1].entregado


    }

    if (idName == 'infoPagado') {
        info[id - 1].pagado = !info[id - 1].pagado

    }

    if (idName == 'infoCobrado') {
        info[id - 1].cobrado = !info[id - 1].cobrado

    }

    const infoUpdated = {
        "entregado": info[id - 1].entregado,
        "pagado": info[id - 1].pagado,
        "cobrado": info[id - 1].cobrado,
        "_id": info[id - 1]._id,
    }
    //preguntar funcionalidad de
    fetch('/updateEntregado', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(infoUpdated),
    }).then((res) => {
        console.log(res)
        updateDasBoard(info)
    }).catch(err => console.log(err))


}

function updateRightContainer(info, id, idName) {

    const nodes = readRightConainerInputNodes()
    nodes.direccion.value = info[id - 1].client.direccion
    nodes.nombreUnidad.value = info[id - 1].client.nombreDeLugar
    nodes.apt.value = info[id - 1].client.apt
    nodes.nombreCliente.value = info[id - 1].client.nombre
    nodes.costoDomicilio.value = info[id - 1].costo
    nodes.domiciliariosLista.value = info[id - 1].domiciliario.name
    nodes.notasDomicilio.value = info[id - 1].notas
    nodes.pedidoText.value = info[id - 1].pedidoDetalles
    nodes.pagoEnEfectivo.value = info[id - 1].efectivo
}

function saveButton(info, id, idName) {

    const nodes = readRightConainerInputNodes()

    document.getElementById('SaveButon').addEventListener(('click'), () => {

        info[id - 1].client.direccio = nodes.direccion.value
        info[id - 1].client.nombreDeLugar = nodes.nombreUnidad.value
        info[id - 1].client.apt = nodes.apt.value
        info[id - 1].client.nombre = nodes.nombreCliente.value
        info[id - 1].costo = parseInt(nodes.costoDomicilio.value)
        info[id - 1].domiciliario.name = nodes.domiciliariosLista.value
        info[id - 1].notas = nodes.notasDomicilio.value
        info[id - 1].pedidoDetalles = nodes.pedidoText.value
        info[id - 1].total = parseInt(nodes.pagoEnEfectivo.value)

        console.log(info)

        enviarDaylyData(info)
        updateDailyInfoBanner(info)

    })

}

function readRightConainerInputNodes() {


    return {
        pagoEnEfectivo: document.getElementById('pagoEnEfectivo'),
        direccion: document.getElementById('direccion'),
        nombreUnidad: document.getElementById('nombreUnidad'),
        apt: document.getElementById('apt'),
        nombreCliente: document.getElementById('nombreCliente'),
        costoDomicilio: document.getElementById('costoDomicilio'),
        domiciliariosLista: document.getElementById('domiciliariosLista'),
        notasDomicilio: document.getElementById('notasDomicilio'),
        pedidoText: document.getElementById('pedidoText')

    }


}