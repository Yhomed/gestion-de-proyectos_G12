module.exports = (sequelize, dataTypes) => {
    let alias = "Cursos_Usuarios";

    let cols = {

        id: {
            autoincremental: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        course_id: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'usuarios_courses',
        timestamps: false,
        underscored: true
    }

    const Curso_Usuario = sequelize.define(alias, cols, config);
    return Curso_Usuario;
}