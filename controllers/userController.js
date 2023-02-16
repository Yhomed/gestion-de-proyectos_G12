const Sequelize = require('sequelize')
const path = require ('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const {
    check,
    validationResult,
    body
} = require('../node_modules/express-validator');

//const userFilePath = path.resolve(__dirname, '../data/usuarios.json');
const db = require ('../database/models');

const userController = {

    //USERS LIST
    list: (req, res) => {

        db.Usuario.findAll()
        .then(usuarios => {
            return res.render('../views/users/userList.ejs', {usuarios, longitud: usuarios.length})
        })
        .catch(error => res.send(error))
    },
    
    //REGISTER FORM
    register: (req, res) =>{
        res.render('./users/register')
    },
    //USER DETAIL
    detail: (req, res) => {

        db.Usuario.findByPk(req.params.id)
        .then(function(usuarios){
            res.render('./users/detail.ejs',{usuarios});
        })


    },

    //LOGIN FORM
    login: (req, res) => {
        res.render('./users/login')
    },
    
    inscripcion: (req, res) => res.render('./users/inscripcion.ejs'),

    //PROCESO DE REGISTRO (POST)
    registerProcess: (req, res) => {

        const _body = { 
            name : req.body.name,
            surname : req.body.surname,
            email : req.body.email,
            image : req.file.filename,
            password : bcrypt.hashSync(req.body.password, 10),
        }    
        db.Usuario.create(_body)
        .then(usuario =>{
            res.redirect('/user/');
        })
        .catch(error => res.send(error))
    },
        
    //PROCESO DE LOGIN (POST)
    loginProcess: (req, res) => {
        
        db.Usuario.findAll()
        .then((users) => {		
            //Aquí guardo los errores que vienen desde la ruta, valiendome del validationResult
            let errors = validationResult(req);
            
            let usuarioLogueado = []; //variable que aloja el usuario q se intento loguear
            
            if(req.body.email != '' && req.body.password != ''){ //si la pass e email no son vacios
            usuarioLogueado = users.filter(function (user) {     //filtra y guarda
                return user.email === req.body.email  
            });
            //Aquí verifico si la clave que está colocando es la misma que está hasheada en la Base de datos - El compareSync retorna un true ó un false
            if(bcrypt.compareSync(req.body.password,usuarioLogueado[0].password) === false){
                usuarioLogueado = []; //si no es la clave correcta deja en nulo la variable del usuario
            }

            }

            //Aquí determino si el usuario fue encontrado ó no en la Base de Datos
            if (usuarioLogueado.length === 0) {
                return res.render(path.resolve(__dirname, '../views/users/login'),{ errors: [{ msg: "Credenciales invalidas" }] });
            } else {
            //Aquí guardo en SESSION al usuario logueado
            req.session.usuario = usuarioLogueado[0];
            }
            //Aquí verifico si el usuario le dio click en el check box para recordar al usuario 
            if(req.body.recordarme){
            res.cookie('email',usuarioLogueado[0].email,{maxAge: 1000 * 60 * 60 * 24})
            }
            return res.redirect('/');   //Aquí ustedes mandan al usuario para donde quieran (Perfil- home)

        })
    
    },

    profile: (req, res) => {
        let users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
        let user = users.filter(p => p.id == req.params.id);
        console.log(user);
        res.render('./users/detail.ejs', 
        {
            nombre: user[0].nombre,
            apellido: user[0].apellido,
            email: user[0].email,
            image: user[0].image,
        })
    },
    
    //EDIT FORM
    editUsers: (req, res) => {
        let users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
        let user = users.filter(p => p.id==req.params.id)
        res.render('./users/edit.ejs', 
        {
            id: user[0].id,
            nombre: user[0].nombre,
            apellido: user[0].apellido,
            email: user[0].email,
            password: user[0].password,
            image: user[0].image,

        })
    },

    //ACCIÓN DE EDICIÓN (PUT)
    editUser: (req, res) => {
        let users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
        req.body.id = Number(req.params.id);

        let newUsers = users.map((user) => {
            if (user.id == req.body.id) {
                let temp = req.body;
                temp['number'] = user.number;
                user = temp;
                user.image = req.file ? req.file.filename : user.image;
                return user;
            }
            return user;
        });
        let updatedUser = JSON.stringify(newUsers, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../data/usuarios.json'), updatedUser);
        res.redirect('/user/');
    },

    //ACCIÓN DE BORRADO (DELETE)
    deleteUser: (req, res) => {
        let users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
        let userId = req.params.id;
        //trae todos los registros distintos al userId
        let finalUsers = users.filter((product) => product.id != userId);
        let usersToSave = JSON.stringify(finalUsers, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../data/usuarios.json'), usersToSave);
    res.redirect('/user/');
    },

    //DELETE FORM
    deleteUsers: (req, res) => {
        let users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
        let user = users.filter(p => p.id==req.params.id)
        //console.log(user);
        res.render('./users/delete.ejs', 
        {
            id: user[0].id,
            nombre: user[0].title,
            apellido: user[0].number,
            email: user[0].email,
            password: user[0].password,
            image: user[0].image,
        })
    }

};

module.exports = userController; 