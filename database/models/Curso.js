module.exports = (sequelize, dataTypes) => {
    let alias = "Curso";

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
        parrafo: {
            allowNull: false,
            type: dataTypes.STRING
        },
        price: {
            allowNull: false,
            type: dataTypes.INTEGER
        }, 
        number:{
            allowNull: false,
            type: dataTypes.INTEGER
        },
        image: {
            allowNull: false,
            type: dataTypes.STRING
        }

    };

    let config = {
        tableName: 'courses',
        timestamps: false,
        underscored: true
    }

    const Curso = sequelize.define(alias, cols, config);
    
    Curso.associate = function(models){
        Curso.belongsToMany(models.Usuario, {
            as: 'usuarios',
            through: 'usuarios_courses',
            foreignKey: 'courses_id',
            otherKey: 'usuario_id',
            timestamps: false
        })
    }
    
    return Curso;
}