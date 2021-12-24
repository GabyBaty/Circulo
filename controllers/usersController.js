
const {usuarios} = require('../data/users_db');


const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');


module.exports = {
    
    login : (req,res) => {
        return res.render('login')
    },
    processLogin: (req, res) => {
            let errors = validationResult(req);
            const {email, recordar} = req.body;
            if(errors.isEmpty()){
                let usuario = usuarios.find(usuario => usuario.email === email)
            req.session.userLogin = {
                id : usuario.id,
                nombre : usuario.nombre,
                rol : usuario.rol
            }

            if(recordar){
                res.cookie('craftsyForEver',req.session.userLogin,{maxAge: 1000 * 60})
            }
            return res.redirect('/delegados')
        }else{
            /* return res.send(errors) */
            return res.render('login',{
                errores : errors.mapped()
            })
        }
    }
}