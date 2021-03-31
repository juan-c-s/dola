const express = require('express');
const router = express.Router();



router.get("/main", (req, res) => {
    res.render("")
})

router.get("/login",(req,res)=>{
    res.render("logIn")
})


module.exports = router;