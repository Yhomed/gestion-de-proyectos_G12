const mainController = {

    index: (req, res) => res.render('index'),

    
    
    register: (req, res) => res.render('./users/register'),

    login: (req, res) => res.render('./users/login'),

    contacto: (req, res) => res.render('./users/contacto'),

    inscripcion: (req, res) => res.render('./users/inscripcion'),

    


    sobreMi: (req, res) => res.render('./products/sobreMi'),

};

module.exports = mainController; 