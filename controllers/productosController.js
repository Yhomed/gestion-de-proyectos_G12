//const express = require('express');
const Sequelize = require('sequelize')
const path = require ('path');
const fs = require('fs');
//const { receiveMessageOnPort } = require('worker_threads');

const productsFilePath = path.resolve(__dirname, '../data/productos.json');


const {
    check,
    validationResult,
    body
} = require('express-validator');


//requerir modelos
const db = require ('../database/models');

const productosController =  {

    //listado   
    productList: (req, res) => {
        /*
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/productList.ejs', {products, longitud: products.length});
        */ 
         
        db.Curso.findAll()
        .then(products => {
            return res.render('../views/products/productList.ejs', {products, longitud: products.length})
        })
        .catch(error => res.send(error))
    },

    //formulario de creación
    createProducts: (req, res) => {
        
        res.render('../views/admin/create');

    },

    //detalle de un producto
    productDetail: (req, res) => {
        /*
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let product = products.filter(p => p.id==req.params.id)

        res.render('../views/products/productDetail.ejs', 
        {
            title: product[0].title,
            number: product[0].number,
            parrafo: product[0].parrafo,
            price: product[0].price,
            image: product[0].image,
        })
        */

        db.Curso.findByPk(req.params.id)
            .then(function(curso){

                res.render('./admin/productDetail.ejs',{curso});
            })

    },

    //formulario de edición
    editProducts: (req, res) => {

        /*
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let product = products.filter(p => p.id==req.params.id)
        //console.log(product);
        res.render('../views/products/edit.ejs', 
        {
            id: product[0].id,
            title: product[0].title,
            number: product[0].number,
            parrafo: product[0].parrafo,
            price: product[0].price,
            image: product[0].image,
        })

        */

        db.Curso.findByPk(req.params.id)
            .then(function(curso){

                res.render('./admin/edit.ejs',{curso:curso});
            })

    },

    //acción de creación (post)
    createNewProduct: (req, res) => {
        /*
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let newProduct = {
            id: products[products.length-1].id+1,
            ...req.body,
            image: req.file ? req.file.filename : products.image,
            number: products[products.length-1].id < 9 ? "0" + (products[products.length-1].id+1).toString() : (products[products.length-1].id+1).toString()
    };
    products.push(newProduct)
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
            res.redirect('/products/'+ newProduct.id);*/


            let errors = validationResult(req);
            if(!errors.isEmpty()) {
            return res.render(path.resolve(__dirname, '../views/admin/create'), {
              errors: errors.errors,  old: req.body
            });
          } 
            const _body = { 
                //return res.send(_body);
                title : req.body.title,
                parrafo: req.body.parrafo,
                price: req.body.price,
                image : req.file.filename,
                number : req.body.number,
            }    
            //return res.send(_body);
            db.Curso.create(_body)
            .then(curso =>{
                res.redirect('/products'); //tener en cuenta por si las moscas 
            })
            .catch(error => res.send(error))
        },
    
    //acción de edición (put)
    editProduct: (req, res) => {
        /*let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        req.body.id = Number(req.params.id);

        let newProducts = products.map((product) => {
            if (product.id == req.body.id) {
                let temp = req.body;
                temp['number'] = product.number;
                product = temp;
                product.image = req.file ? req.file.filename : product.image;
                return product;
            }
            return product;
        });
        let updatedProduct = JSON.stringify(newProducts, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), updatedProduct);
        res.redirect('/products/');*/

        db.Curso.update ({
            title: req.body.title,
            price: req.body.price,
            parrafo: req.body.parrafo,
            image: req.file ? req.file.filename : req.body.oldImage,
            //categoryId : req.body.categoria
        }, {
            where: {  
                id: req.params.id
           }
        })
        .then(()=> res.redirect('/products'))
        .catch(error =>res.send(error))
    },
         
    //acción de borrado (delete)
    deleteProduct: (req, res) => {
        /*
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productId = req.params.id;
        //trae todos los registros distintos al productId
        let finalProducts = products.filter((product) => product.id != productId);
        let productsToSave = JSON.stringify(finalProducts, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), productsToSave);
    res.redirect('/products/');
    */

    db.Curso.destroy({
        where: {
            id : req.params.id
        }
    })
    .then(()=>  res.redirect('/products'))
    .catch(error => res.send(error))
    },

    //formulario del delete
    deleteProducts: (req, res) => {

        db.Curso.findByPk(req.params.id)
        .then(function(curso){

            res.render('./products/delete.ejs',{curso});
        })
    }
}

module.exports = productosController;