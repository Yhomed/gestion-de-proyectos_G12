const controller = {

    index: (req, res) => res.render('index'),

    productDetail: (req, res) => res.render('productDetail'),
    
    register: (req, res) => res.render('register'),

    login: (req, res) => res.render('login'),

    contacto: (req, res) => res.render('contacto'),

    inscripcion: (req, res) => res.render('inscripcion'),

    productCar: (req, res) => res.render('productCar'),

    curso0: (req, res) => res.render('curso0'),

    curso1: (req, res) => res.render('curso1'),

    curso2: (req, res) => res.render('curso2'),

    curso3: (req, res) => res.render('curso3'),

    curso4: (req, res) => res.render('curso4'),

    sobreMi: (req, res) => res.render('sobreMi'),

};

module.exports = controller; 