const express = require('express');

const path = require('path');

const app = express();

app.use(express.static('public'));

// app.use("/static", express.static(__dirname + "/public"));

app.listen(process.env.PORT || 3000, () => console.log('Servidor activo.'));

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