const mongoose = require('mongoose')

const Domiciliario = mongoose.model('Domiciliarios',{
    name : {
        type : String,
        require : true ,

    },
    cell : {
        type : Number,
        require : true 

    }
})

module.exports = Domiciliario;