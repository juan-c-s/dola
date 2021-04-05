console.log("HELLO")
const express = require('express');
const router = express.Router();
const Pedido = require('./../db/models/Pedido')


router.get('/main', (req, res) => {
    res.render('')
})
router.get("/login", (req, res) => {
    res.render("logIn")
})

router.get('/pedidosHoy', (req, res) => {
    let start = new Date()
    start.setHours(0, 0, 0, 0);

    let end = new Date();
    end.setHours(23, 59, 59, 999);

    const pedir = Pedido.find({
        //gte significa greater or equalto y $lt significa less than
        createdAt: { $gte: start, $lt: end }
    }).then(listOfPedidos => {
        res.send(listOfPedidos)
    }).catch(err => res.status(500).send(err))
})

//update info
router.post('/main', (req, res) => {

})
module.exports = router;