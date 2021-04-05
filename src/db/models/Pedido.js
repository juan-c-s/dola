
const mongoose = require('mongoose')
const Client = require('./Client')
const Domiciliario = require('./Domiciliario')
require('../mongoose')



const pedidoSchema = new mongoose.Schema({
    entregado: {
        type: Boolean,
        require: true,
        default: false,

    },
    pagado: {
        type: Boolean,
        require: true,
        default: false

    },
    cobrado: {
        type: Boolean,
        require: true,
        default: false

    },
    duracion: {
        type: Number,
    },
    total: {
        type: Number,
        require: true
    },
    efectivo: {
        type: Boolean,
        default: false,
    },
    costo: {
        type: Number,
        require: true
    },
    fecha: {
        type: Date,
        require: true
    },
    notas: {
        type: String,
    },
    pedido: {
        type: String,
    },
    client: {
        type: Client.schema,
    },
    domiciliario: {
        type: Domiciliario.schema,
        require: true,
    }
}, { timestamps: true })

const Pedido = mongoose.model('Pedido', pedidoSchema)
const pedido = {
    "client": {
        "apt": "901",
        "direccion": "Carrera 36a #12a-21",
        "nombre": "juana",
        "nombreDeLugar": "altobelo"
    },
    "cobrado": false,
    "costo": 6000,
    "domiciliario": {
        "name": "alejo"
    },
    "duracion": 145,
    "entregado": true,
    "notas": "dejarlo en porteria con el vigilante",
    "pagado": false,
    "pedidoDetalles": "2 pods",
    "total": 57000
}



module.exports = Pedido;