

export function enviarDaylyData(info) {
    //aqui va el codigo que envia info al servidor
    fetch("/hacerPedido", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info),
    }).then(response => response.json()).then(info => console.log("post Of client worked: " + info).catch(err => console.log(err))).catch(err => console.log("ERR!" + err))
    console.log("guardar")
    console.log(info)
}

export function enviarNewDomiciliario(data) {
    // aqui se guarda el nuevo domiciliario que se añadio, es importante saber que no se sabe con sertesa si el telefono que el usuario entro es valido, o siquira es un cell 
    console.log("guardar")
    console.log(data)
}