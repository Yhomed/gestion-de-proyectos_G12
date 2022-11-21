const mainController = {


productDetail: (req, res) => res.render('./products/productDetail'),

    createProducts: (req, res) => res.render('./products/createProducts'),

    editProducts: (req, res) => res.render('./products/editProducts'),

    productCar: (req, res) => res.render('./products/productCar'),



}


module.exports = mainController;