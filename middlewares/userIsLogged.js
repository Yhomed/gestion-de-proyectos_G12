function userIsLoggedMiddleware(req, res, next) {
    console.log('Middleware del usuario logueado');

    if (req.session.isLogged){
        //console.log('Esta logueado')
        res.locals.userLogged = req.session.isLogged;
        res.locals.isAdmin = req.session.isAdmin;
        res.locals.username = req.session.username;
        /*console.log("User logged: "+res.locals.userLogged);
        console.log("User admin: "+res.locals.isAdmin);*/
    } else {
        console.log('Debe estar logueado');
    }

    next();
}

module.exports = userIsLoggedMiddleware;