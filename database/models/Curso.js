module.exports = (sequelize, dataTypes) => {
    let alias = "Cursos";

    let cols = {

        id: {
            autoincremental: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title: {
            allowNull: false,
            type: dataTypes.STRING
        },
        desription: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.STRING
        }, 
        number:{
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING
        }

    };

    let config = {
        timestamps: false
        /*underscored: true*/
    }

    const Curso = sequelize.define(alias, cols, config);

    return Curso;
}