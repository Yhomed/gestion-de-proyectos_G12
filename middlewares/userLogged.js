const path = require('path');
const fs = require('fs');
const rutaUsersJson = path.resolve('./data/users.json');
const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
    
    /*let emailCookie = "";
    emailCookie = req.cookies.email;

    if (emailCookie) {
        db.User.findOne( {
            where: {
                email: emailCookie
            }
        })
        .then(userCookie => {
            console.log('User de la cookie: ' + userCookie);

                req.session.userLogged = userCookie;
        })
        .catch(err => {
            console.log('Error al levantar usuario logueado: ' + err)
        })
    }*/
    
    // Preguntar si el usuario está logueado. Si está, se le permite continuar. Si no, se lo manda al login.
    if (!req.session.userLogged) {
        return res.redirect('/user/login');
    }
    else {
        next();
    }
}

module.exports = userLoggedMiddleware;