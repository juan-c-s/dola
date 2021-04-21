import { mandarPedidoCreadoAlServidor, mandarPedidoCreadoAWhatsapp } from '../enviardatosAlServidor.js'
const nombreCliente = document.getElementById
//TODO ponerle ID's a todos los inputs del html del hacerPedido y y cojer
// todos los elementos y luego añadir un eventlistener cuando el usuario hunda la 
//barra y lo que debe hacer el programa es mostrar toda la info de dicho cliente
//en los inputs



export function sendButton() {
    const direccion = document.getElementById('direccion').textContent;
    console.log(direccion)
    const info = readRightConainerInputNodes()
    // const data = {
    //     "pagoEnEfectivo": info.pagoEnEfectivo.value,
    //     "direccion": info.direccion.value,
    //     "nombreUnidad": info.nombreUnidad.value,
    //     "apt": info.apt.value,
    //     "nombreCliente": info.nombreCliente.value,
    //     "costoDomicilio": info.costoDomicilio.value,
    //     "domiciliariosLista": info.domiciliariosLista.value,
    //     "notasDomicilio": info.notasDomicilio.value,
    //     "pedidoText": info.pedidoTex.value
    // }
    mandarPedidoCreadoAlServidor(info);
    mandarPedidoCreadoAWhatsapp(info);
    resetInputs();
}

function readRightConainerInputNodes() {


    return {
        efectivo: document.getElementById('pagoEnEfectivo').value,
        client: {
            direccion: document.getElementById('direccion').value,
            nombreDeLugar: document.getElementById('nombreUnidad').value,
            apt: document.getElementById('apt').value,
            nombre: document.getElementById('nombreCliente').value,

        },
        costo: document.getElementById('costoDomicilio').value,
        domiciliario: {
            name: document.getElementById('domiciliarios').value,
        },
        notas: document.getElementById('notasDomicilio').value,
        pedidoText: document.getElementById('pedidoText').value

    }
}
function resetInputs() {

    document.getElementById('pagoEnEfectivo').value = "";
    document.getElementById('direccion').value = "";
    document.getElementById('nombreUnidad').value = "";
    document.getElementById('apt').value = "";
    document.getElementById('nombreCliente').value = "";
    document.getElementById('costoDomicilio').value = "";
    document.getElementById('notasDomicilio').value = "";
    document.getElementById('pedidoText').value = "";
    document.getElementById('domiciliarios').value = "todos";

}