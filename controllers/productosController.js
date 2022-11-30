const path = require('path');
const fs = require('fs');
const { receiveMessageOnPort } = require('worker_threads');
let products = fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf8');
products = JSON.parse(products);


const productosController =   {


    productDetail: (req, res) => {

        let product = products.filter(p => p.id==req.params.id)

        res.render('../views/products/productDetail.ejs', {
            title: product[0].title,
            number: product[0].number,
            parrafo: product[0].parrafo
        })

    },

    //metodo
    productList: (req, res) => {

        res.render('productList', {products}); //renderiza vista con el listado de productos

    },

    createProducts: (req, res) => res.render('./products/create'),

    

    editProducts: (req, res) => res.render('./products/:id/edit'),



    productCar: (req, res) => res.render('./products/productCar'),



}




module.exports = productosController