const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
require('../db/mongoose')
const Client = require('../db/models/Client')
const Pedido = require('../db/models/Pedido')

const app = express()
app.use(express.json())
router.get("/hacerpedido", (req, res) => {
    res.render("indexHacerPedido", {
        title: "main page",
    })
})

router.post('/hacerpedido', (req, res) => {
    const pedido = req.body

    Client.findOne({ nombre: pedido.client.nombre }).then((clien) => {
        // console.log(domi)
        if (!clien) {
            const cl = new Client(pedido.client)
            cl.save()
        }
        res.send("client Added")

    }).catch(err => {
        res.send("ERR" + err)
    })
    const pedido1 = new Pedido(pedido);

    pedido1.save().then(pedido => {
        console.log("PEDIDO: " + pedido)
    }).catch(err => console.log("ERR " + err))
})

module.exports = router;


