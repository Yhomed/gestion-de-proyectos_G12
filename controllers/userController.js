const path = require ('path');
const fs = require('fs');

const userFilePath = path.resolve(__dirname, '../data/usuarios.json');

const userController = {

    list: (req, res) => {
    
            let user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
            res.render('../views/users/userList.ejs', {user, longitud: user.length});
    },

    register: (req, res) => res.render('./users/register'),

    login: (req, res) => res.render('./users/login'),

    inscripcion: (req, res) => res.render('./users/inscripcion'),

    createUsuario: (req, res) => {
        let user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'))
        let newUser = {
            id: user[user.length-1].id+1,
            ...req.body,
            image: req.file ? req.file.filename : user.image,
        }

            user.push(newUser)
            fs.writeFileSync(userFilePath, JSON.stringify(user, null, " "));
            res.redirect('/user/'+ newUser.id);
    
        }

};

module.exports = userController; 