const Sequelize = require('sequelize')
const path = require ('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const {
    check,
    validationResult,
    body
} = require('express-validator');

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
    register: (req, res) => {
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

        let errors = validationResult(req);
        if(!errors.isEmpty()) {
        return res.render(path.resolve(__dirname, '../views/users/register'), {
          errors: errors.errors,  old: req.body
        });
      } 
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
    loginProcess: async function (req, res) {

        const resultValidation = validationResult(req);
        
        if(resultValidation.errors.length > 0){
            return res.render('/views/users/login', {
                errors: resultValidation.mapped(),
                oldData: req.body,
            })
        }

        let userToLogin = db.Usuario.findOne({
            where: {
                email: req.body.email,
            }
        })

        .then((user) => {
            if(user){
                let isOkThePassword = bcrypt.compareSync(
                    req.body.password,
                    user.password
                )
            
                if(isOkThePassword){
                    
                    /*
                    if(req.body.recordarme){
                        res.cookies('userEmail', req.body.email, {
                        maxAge: 1000 * 60 * 60,
                    })}
                    */
                    req.session.userLogged = user;
                    req.session.isLogged = isOkThePassword
                    req.session.isAdmin = user.is_admin
                    req.session.username = user.name

                    return res.redirect('/')
                }else{
                    return res.render(path.resolve(__dirname, '../views/users/login'),{
                        errors: [{ msg: "Credenciales invalidas" }] 
                    });
                }
            }
        })
        .catch((error)=>{
            console.log(error);
        })

    },

    logOut: (req, res) => {
        res.clearCookie('Email del usuario');
        req.session.destroy();
        return res.redirect('/');
    },

    profile: (req, res) => { //no funciona actualmente

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

        db.Usuario.findByPk(req.params.id)
        .then(function(usuario){

            res.render('./users/edit.ejs',{usuario});
        })
    
    },

    //ACCIÓN DE EDICIÓN (PUT)

    
    editUser: (req, res) => {

        /*
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
        */

        db.Usuario.update ({
            name: req.body.name,
            surname: req.body.surname,
            password: req.body.password,
            image: req.file ? req.file.filename : usuario.image,
            email : req.body.email
            //categoryId : req.body.categoria
        }, {
            where: {  
                id: req.params.id
           }
        })
        .then(()=> res.redirect('/user'))
        .catch(error =>res.send(error))

    },

    //ACCIÓN DE BORRADO (DELETE) no hacer
    deleteUser: (req, res) => {

        /*
        let users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
        let userId = req.params.id;
        //trae todos los registros distintos al userId
        let finalUsers = users.filter((product) => product.id != userId);
        let usersToSave = JSON.stringify(finalUsers, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../data/usuarios.json'), usersToSave);
        res.redirect('/user/');
        */

        db.Usuario.destroy({
            where: {
                id : req.params.id
            }
        })
        .then(()=>  res.redirect('/user'))
        .catch(error => res.send(error))
    },

    //DELETE FORM
    deleteUsers: (req, res) => {

        db.Usuario.findByPk(req.params.id)
        .then(function(usuario){

            res.render('./users/delete.ejs',{usuario});
        })
    },

    
/*
    // json
    list: (req, res) => {
        db.Usuario.findAll()
      
       // DB.Usuarios 
        //.findAll()
        .then(usuarios =>{
       return res.status(200).json({
        //total: usuarios.length,
        data: usuarios,
        status: 200,
        
     });
   })
   .catch(err => { console.log('Errores al buscar el usuario: ' + err)}) 
},
show: (req, res) => {
    db.Usuario.findByPk(req. params.id)
  
    .then(user =>{
   return res.status(200).json({
   // total: usuarios.length,
    data: user,
    status: 200,
    
 });
})
.catch(err => { console.log('Errores al buscar el usuario: ' + err)}) 
}, */
} 


module.exports = userController;
