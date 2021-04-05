const mongoose = require('mongoose')
const Domiciliario = require('./Domiciliario')
const Client = require('./Client')
const Pedido = require('./Pedido')


const User = mongoose.model('User', {
    email: {
        required: true,
        trim: true,
        type: String,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail()) {
                throw new Error('specify a valid email')
            }
        },
    },
    name: {
        type: String,
    },
    domicilios: {
        type: [Pedido],
        default: []
    },

})
