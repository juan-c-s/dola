
//cojer info y editar visualmente la página de hacerPedido


export function updateDashBoard(domicilios) {
    let finalEle = ``
    let listaClientes = document.getElementById('idListHacerPedido')
    let contador = 0;
    domicilios.forEach((domicilio) => {
        contador++;
        finalEle += getHTMLLine(domicilio.nombre, contador);

    })

    listaClientes.innerHTML = finalEle;
}

function getHTMLLine(nombreCliente, id) {
    return `
    <div class="itemContainer">
                    <div class="itemcontainer-sub">
                        <div class="iteamRight">

                            <p>${nombreCliente}</p>
                            <p># ${id}</p>

                        </div>
                    </div>
                </div>
    `
}