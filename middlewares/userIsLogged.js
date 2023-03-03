function userIsLoggedMiddleware(req, res, next) {
    console.log('Middleware del usuario logueado');
    
    if (req.session.isLogged){

        next();
        return

    } else {
        console.log('Debe estar logueado');
    }
 
    return res.redirect('/');
}

module.exports = userIsLoggedMiddleware;