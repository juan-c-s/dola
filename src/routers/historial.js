const express = require('express');
const router = express.Router();



router.get("/historial", (req, res) => {
    res.render("indexHistorial", {
        title: "main page",
    })
})


module.exports = router;