function menucheckMiddleware(req, res, next) {

    //Este middleware se usa en cada ruta, y es para q el menu de la pagina cambie segun el tipo de usuario
    
    if (req.session.isLogged){

        res.locals.userLogged = req.session.isLogged;
        res.locals.isAdmin = req.session.isAdmin;
        res.locals.username = req.session.username;

    } else {
        res.locals.userLogged = false;
    }
 
    next();
    return
}

module.exports = menucheckMiddleware;