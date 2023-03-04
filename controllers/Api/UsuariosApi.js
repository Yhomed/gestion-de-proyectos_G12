const express = require('express');
const db = require('../../database/models');
const { Association } = require('sequelize');
const Op = db.Sequelize.Op;

const usuariosAPIController = {

    list: (req, res) => {
        db.Usuario.findAll(
            /*
            {
                // include: [{ association: 'roles' }],
                where:{
                    deleted_at: null,
                }
            }*/
        ).then(users => {
            return res.status(200).json({
                meta: {
                    total: users.length,
                    status: 200,
                    url: '/api/usuarios/'
                },
                data: users
            });
        })
        .catch(err => { console.log('Errores al buscar usuarios: ' + err)})
    },

    show: (req, res) => {
        db.Usuario.findByPk(req.params.id)
        .then(user => {
            return res.status(200).json({
                meta: {
                    status: 200,
                    url: '/api/usuarios/'+user.id
                },
                data: user
            });
        })
        .catch(err => { console.log('Errores al buscar el usuario: ' + err)})
    }



}

module.exports = usuariosAPIController;