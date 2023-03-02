function userIsLoggedMiddleware(req, res, next) {
    console.log('Middleware del usuario logueado');

    if (req.session.userLogged){
        console.log('Esta logueado')
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userIsLoggedMiddleware;