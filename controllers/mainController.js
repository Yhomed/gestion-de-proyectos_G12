const controller = {

    index: (req, res) => res.render('index'),

    productDetail: (req, res) => res.render('./products/productDetail'),

    createProducts: (req, res) => res.render('./products/createProducts'),

    editProducts: (req, res) => res.render('./products/editProducts'),
    
    register: (req, res) => res.render('./users/register'),

    login: (req, res) => res.render('./users/login'),

    contacto: (req, res) => res.render('./users/contacto'),

    inscripcion: (req, res) => res.render('./users/inscripcion'),

    productCar: (req, res) => res.render('./products/productCar'),

    curso0: (req, res) => res.render('./products/curso0'),

    curso1: (req, res) => res.render('./products/curso1'),

    curso2: (req, res) => res.render('./products/curso2'),

    curso3: (req, res) => res.render('./products/curso3'),

    curso4: (req, res) => res.render('./products/curso4'),

    sobreMi: (req, res) => res.render('./products/sobreMi'),

};

module.exports = controller; 