const express = require('express');
const router = express.Router();



router.get("", (req, res) => {
    res.render("", {
        title: "main page",
    })
})




module.exports = router;