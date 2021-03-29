export function getInfoToday(){

    return {
        domicilios : [
            {
                entregado : false,
                pagado : false,
                cobrado : false,
                duracion : 145,
                total : 57000,
                costo : 6000,
                client : {
                    direccion : "Carrera 36a #12a-21",
                    nombreDeLugar : "altobelo",
                    apt : "901"
                },
                domiciliario : {
                    nombre : "alejando"
                }
            },
            {
                entregado : false,
                pagado : true,
                cobrado : false,
                duracion : 145,
                total : 788000,
                costo : 6000,
                client : {
                    direccion : "Carrera 366a #72a-21",
                    nombreDeLugar : "edificio agata",
                    apt : "001"
                },
                domiciliario : {
                    nombre : "alejandro"
                }
            }
        ]
    }
}


