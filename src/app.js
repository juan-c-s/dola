const express = require('express');
const path = require('path');
const hbs = require('hbs');

const port = process.env.PORT || 3000;


const app = express();


const pathToPartials = path.join(__dirname, "/templates/partials");
const pathToViews = path.join(__dirname, "/templates/views");
const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));

app.set('view engine', 'hbs');
app.set("views", pathToViews);
hbs.registerPartials(pathToPartials);


app.get("", (req, res) => {
    res.render("Main", {
        title: "main page",
    })
})
app.listen(port, () => {
    console.log("sirvió el servidor");
})