module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario";

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
            allowNull: false,
            type: dataTypes.STRING
        },
        email: {
            allowNull: false,
            type: dataTypes.STRING
        },
        password: {
            allowNull: false,
            type: dataTypes.STRING
        },
        image: {
            allowNull: false,
            type: dataTypes.STRING
        }

    };

    let config = {
        tableName: 'usuarios',
        timestamps: false,
        underscored: true
    }

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.belongsToMany(models.Curso, {
            as: 'courses',
            through: 'usuarios_courses',
            foreignKey: 'usuario_id',
            otherKey: 'courses_id',
            timestamps: false
        })
    }
    
    return Usuario;
}