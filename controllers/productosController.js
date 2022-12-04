const path = require('path');
const fs = require('fs');
const { receiveMessageOnPort } = require('worker_threads');

const productsFilePath = path.join(__dirname, '..data/productos.json');

//variable que recupera los datos de productos.json 

let products = fs.readFileSync(path.join(productsFilePath, 'utf8');
products = JSON.parse(products);


const productosController =   {

    //listado
    productList: (req, res) => {

        res.render('../views/products/productList.ejs', {products});

    },

    //formulario de creación
    createProducts: (req, res) => res.render('./products/create'), 

    //detalle de un producto
    productDetail: (req, res) => {

        let product = products.filter(p => p.id==req.params.id)

        res.render('../views/products/productDetail.ejs', 
        {
            title: product[0].title,
            number: product[0].number,
            parrafo: product[0].parrafo,
            price: product[0].price,
            image: product[0].image,
        })

    },

    //formulario de edición
    editProducts: (req, res) => {

        let product = products.filter(p => p.id==req.params.id)

        res.render('../views/products/editProducts.ejs', 
        {
            title: product[0].title,
            number: product[0].number,
            parrafo: product[0].parrafo,
            price: product[0].price,

        })
    },

    //acción de creación (post)
    createNewProduct: (req, res) => {

        res.redirect('./products/createProducts');
    },

    //acción de edición (put)
    editNewProduct: (req, res) => res.render('./products/editProducts'),

    //acción de borrado (delete)
    deleteProduct: (req, res) => res.render('./products/delete'),

}

module.exports = productosController