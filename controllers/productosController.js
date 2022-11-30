const path = require('path');
const fs = require('fs');
const { receiveMessageOnPort } = require('worker_threads');

//variable que recupera los datos de productos.json 

let products = fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf8');
products = JSON.parse(products);


const productosController =   {

    //listado
    productList: (req, res) => {

        res.render('productList', {products}); //a la variable se la pasa como objeto literal

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
            parrafo: product[0].parrafo
        })

    },

    //formulario de edición
    editProducts: (req, res) => res.render('./products/edit'),

    //acción de creación (post)
    createNewProduct: (req, res) => res.render(''),

<<<<<<< HEAD
    createProducts: (req, res) => res.render('./products/create'),



    

    editProducts: (req, res) => res.render('./products/:id/edit'),



    productCar: (req, res) => res.render('./products/productCar'),

=======
    //acción de edición (put)
    editNewProduct: (req, res) => res.render(''),
>>>>>>> 2b0061459c95ae8395d4ff5af92853f416e69fe7

    //acción de borrado (delete)
    deleteProduct: (req, res) => res.render(''),

}




module.exports = productosController