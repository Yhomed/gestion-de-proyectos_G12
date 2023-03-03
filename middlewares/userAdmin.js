function userAdminMiddleware(req, res, next){
    console.log('Middleware del Admin');
    
    //Si está logueado y es admin, entonces:
    if(req.session.userLogged){
        console.log('Usuario logueado: ' + req.session.userLogged);

        if(req.session.isAdmin){
            console.log('Es administrador');
            next();
            return;
        } else {
            console.log('Faltan privilegios');
        }
    } 

    //Si no está logueado y es admin
    return res.redirect('/');
}

module.exports = userAdminMiddleware;