const mongoose = require('mongoose')

const Domiciliario = mongoose.model('Domiciliarios', {
    name: {
        type: String,
        require: true,

    },
    cell: {
        type: Number,
        trim: true

    }
})


module.exports = Domiciliario;