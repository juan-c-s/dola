
const mongoose = require('mongoose')

const Client = mongoose.model('Cliente', {
    telefono: {
        type: Number,

    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    nombreDeLugar: {
        type: String,
        required: true,
    },
    apt: {
        type: Number,
    }

})
module.exports = Client