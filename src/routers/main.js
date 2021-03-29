const express = require('express');
const router = express.Router();



router.get("/main", (req, res) => {
    res.render("", {
        title: "main page",
    })
})




module.exports = router;