module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";

    let cols = {

        id: {
            autoincremental: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        surname: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        }

    };

    let config = {
        timestamps: false
        /*underscored: true*/
    }

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}