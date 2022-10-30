const express = require('express');

const path = require('path');


document.addEventListener('DOMContentLoaded', ()=> { fetchData() });
const app = express();
const fetchData = async () => {
    try {
      const res = await fetch('api.json')
      const data = awai .json ();
      console.log(data)
    } catch (error) {
        console.log(error)
    }
    }
const pintarProductos = (data) => {

}

app.use(express.static('public'));
// app.use(express.static(path.resolve(__dirname, './public'))); ¿Cuál es la diferencia entre usar esta línea o la anterior?

app.listen(process.env.PORT || 3050, () => console.log('Servidor activo-3050'));



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

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get("/contacto", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/contacto.html"))
})

app.get("/productCar", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productCar.html"))
})

app.post("/login", (req,res) => {
    res.redirect("/");
})

app.post("/register", (req,res) => {
    res.redirect("/");
})

app.post("/contacto", (req,res) => {
    res.redirect("/");
})

// app.post("/productDetail", (req,res) => {
//     res.redirect("https://wa.link/6l716l");
// })

// app.post("/productDetail", (req,res) => {
//     res.redirect("https://forms.gle/HUYJZJjcnLA97vZ87");
// })



