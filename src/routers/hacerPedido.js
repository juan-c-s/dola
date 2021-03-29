const express = require('express');
const router = express.Router();


router.get("/hacerpedido", (req, res) => {
    res.render("indexHacerPedido", {
        title: "main page",
    })
})

module.exports = router;


