
export async function getInfoToday() {

    try {
        const list = await fetch("/pedidosHoy")
        const info = await list.json()
        return info
    } catch (e) {
        console.log("ERR!! " + e)
    }


    // return {
    //     domicilios: [
    //         {
    //             entregado: true,
    //             pagado: false,
    //             cobrado: false,
    //             duracion: 145,
    //             total: 57000,
    //             costo: 6000,
    //             notas: "dejarlo en porteria con el vigilante",
    //             pedidoDetalles: "2 pods",
    //             client: {
    //                 direccion: "Carrera 36a #12a-21",
    //                 nombreDeLugar: "altobelo",
    //                 apt: "901",
    //                 nombre: "manuela"
    //             },
    //             domiciliario: {
    //                 name: "alejo"
    //             }
    //         },
    //         {
    //             entregado: false,
    //             pagado: true,
    //             cobrado: false,
    //             duracion: 145,
    //             total: 788000,
    //             costo: 6000,
    //             notas: "llamar antes de llegar",
    //             pedidoDetalles: "1 flow de apple",
    //             client: {
    //                 direccion: "Carrera e66a #72a-21",
    //                 nombreDeLugar: "edificio agata",
    //                 apt: "001",
    //                 nombre: "tomas"
    //             },
    //             domiciliario: {
    //                 name: "juan"
    //             }
    //         },
    //         {
    //             entregado: true,
    //             pagado: true,
    //             cobrado: true,
    //             duracion: 60,
    //             total: 678000,
    //             costo: 7000,
    //             notas: "es una casa con una puerta blanca",
    //             pedidoDetalles: "4 pods",
    //             client: {
    //                 direccion: "Carrera 55566a #72a-21",
    //                 nombreDeLugar: "edificio agata",
    //                 apt: "001",
    //                 nombre: "manuela"
    //             },
    //             domiciliario: {
    //                 name: "favian"
    //             }
    //         }
    //     ]
    // }
}

export function getInfoDomiciliarios() {

    //esta funcion llama al servidor y le pide la lista de todos los domiciliarios que le pertenecen al usuario 
    return {
        domiciliarios: [
            {
                name: "favian",
                cell: 3175126894
            },
            {
                name: "juan",
                cell: 3217000120
            },
            {
                name: "Alejando danilo",
                cell: 3217000765
            }
        ]
    }
}

export async function getInfoClients() {
    try {
        const listaClientes = await fetch('/clientes')
        const list = await listaClientes.json()
        return list;
    } catch (e) {
        console.log(e)
    }
}

