const express = require('express');

const router = express.Router();

const multer = require('multer');

const productosController = require('../controllers/productosControler');




router.get('/productDetail', productosControler.productDetail);

router.post('/productDetail', productosControler.productDetail);

router.get('/productCar', productosControler.productCar);

router.get('/createProducts', productosControler.createProducts);

router.post('/createProducts', productosControler.createProducts);

router.get('/editProducts', productosControler.editProducts);

router.post('/editProducts', productosControler.editProducts);





router.get('/products',productosControler.productDetail)

router.get('products/create', productosControler.productDetail)

router.get('/products/:id',productosControler.productDetail)

router.post('/products',productosControler.productDetail)

router.get('/products/:id/edit',productosControler.productDetail)

router.put('/products/:id',productosControler.productDetail)

router.delete('/products/:id',productosControler.productDetail)



module.exports= router;