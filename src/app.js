const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { Router } = require('express');

//data Base Models sin terminar 
require('./db/mongoose')


// routers 
const mainRouter = require('./routers/main')
const hacerPedidoRouter = require('./routers/hacerPedido')
const domiciliariosRouter = require('./routers/domiciliarios')
const historialRouter = require('./routers/historial')


const port = process.env.PORT || 3000;

const app = express();

const pathToPartials = path.join(__dirname, "/templates/partials");
const pathToViews = path.join(__dirname, "/templates/views");
const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routers 
app.use(mainRouter);
app.use(historialRouter);
app.use(hacerPedidoRouter);
app.use(domiciliariosRouter);

app.set('view engine', 'hbs');
app.set("views", pathToViews);
hbs.registerPartials(pathToPartials);


app.listen(port, () => {
    console.log("sirvió el servidor | port:  " + port);
})