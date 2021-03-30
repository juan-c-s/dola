const express = require('express');
const router = express.Router();



router.get("/main", (req, res) => {
    res.render("", {
        title: "main page",
    })
})

router.post('/dailyInfo',(req,res)=>{
    console.log(req.body)
    res.status('201')
})




module.exports = router;