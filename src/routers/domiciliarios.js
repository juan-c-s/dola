const express = require('express');
const router = express.Router();


router.get("/domiciliarios", (req, res) => {
    res.render("indexDomiciliarios", {
        title: "main page",
    })
})


module.exports = router;