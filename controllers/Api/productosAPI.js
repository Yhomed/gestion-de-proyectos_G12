const express = require('express');
const db = require('../../database/models');
const { Association } = require('sequelize');
const Op = db.Sequelize.Op;

const productosAPIController = {

    list: (req, res) => {
        db.Curso.findAll(
            /*
            {
                // include: [{ association: 'roles' }],
                where:{
                    deleted_at: null,
                }
            }*/
        ).then(products => {
            return res.status(200).json({
                meta: {
                    total: products.length,
                    status: 200,
                    url: '/api/productos'
                },
                data: products
            });
        })
        .catch(err => { console.log('Errores al buscar productos: ' + err)})
    },

    show: (req, res) => {
        db.Curso.findByPk(req.params.id)
        .then(product => {
            return res.status(200).json({
                meta: {
                status: 200,
                total: product.length,
                url: '/api/productos/'+product.id
            },
            data: product
            });
        })
        .catch(err => { console.log('Errores al buscar el producto: ' + err)})
    }



}

module.exports = productosAPIController;




