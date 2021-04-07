const express = require('express');
const router = express.Router();
const Domiciliario = require('../db/models/Domiciliario')


router.get("/domiciliarios", (req, res) => {
    res.render("indexDomiciliarios", {
        title: "main page",
    })
})

router.post("/crearDomiciliario", (req, res) => {
    const info = req.body

    const domi = new Domiciliario(info)

    domi.save().then(() => {
        res.send("Domi added")
    }).catch(err => res.status(500).send(err))
})

router.get('/getDomiciliarios', (req, res) => {
    const busqueda = Domiciliario.find().limit(20).then(domis => {
        res.send(domis)
    })
})
module.exports = router;