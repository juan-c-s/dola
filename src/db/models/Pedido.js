
const mongoose = require('mongoose')


const Pedido = mongoose.model('Pedido',{

    entregado : {
        type : Boolean,
        require : true,

    },

    pagado : {
        type : Boolean,
        require : true,

    },
    cobrado : {
        type : Boolean,
        require : true,

    },
    duracion : {
        type : Number,
        require : true 

    },
    total : {
        type : Number,
        require : true 

    },
    costo : {
        type : Number,
        require : true

    },
    fecha : {
        type : Date,
        require : true
    }

})


module.exports = Pedido;