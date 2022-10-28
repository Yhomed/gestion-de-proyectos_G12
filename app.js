const express = require('express');

const path = require('path');

const app = express();

app.use(express.static('public'));
// app.use(express.static(path.resolve(__dirname, './public'))); ¿Cuál es la diferencia entre usar esta línea o la anterior?

app.listen(process.env.PORT || 3050, () => console.log('Servidor activo.'));



app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})

app.get("/productCart", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
})

app.get("/productDetail", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.post("/register", (req,res) => {
    res.redirect("/");
})

app.post("/login", (req,res) => {
    res.redirect("/");
})