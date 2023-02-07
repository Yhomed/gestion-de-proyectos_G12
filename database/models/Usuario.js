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
        tableName: 'users',
        timestamps: false,
        underscored: true
    }

    const Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function(models){
        Usuario.belongsToMany(models.Curso, {
            as: 'courses',
            through: 'users_courses',
            foreignKey: 'user_id',
            otherKey: 'course_id',
            timestamps: false
        })
    }
    return Usuario;
}