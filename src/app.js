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


app.get("/", (req, res) => {
    res.render("", {
        title: "main page",
    })
})

app.get("/domiciliarios", (req, res) => {
    res.render("indexDomiciliarios", {
        title: "main page",
    })
})

app.get("/hacerpedido", (req, res) => {
    res.render("indexHacerPedido", {
        title: "main page",
    })
})

app.get("/historial", (req, res) => {
    res.render("indexHistorial", {
        title: "main page",
    })
})

app.listen(port, () => {
    console.log("sirvió el servidor: " + port);
})