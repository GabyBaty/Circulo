
const {usuarios, guardar} = require('../data/users_db');

const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');


module.exports = {
    register : (req,res) => {
        return res.render('register',{
           
        })
    },
    processRegister : (req,res) => {
        let errors = validationResult(req);
        let {nombre,email,contrasenia,pais,genero,hobbies} = req.body;
        if(typeof hobbies === "string"){
            hobbies = hobbies.split()
        }
        if(errors.isEmpty()){
            let usuario = {
                id : usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
                nombre,
                email,
                contrasenia : bcrypt.hashSync(contrasenia,10),
                pais,
                genero,
                hobbies : typeof hobbies === 'undefined' ? [] : hobbies,
                rol : "user"
            }
            usuarios.push(usuario);
            guardar(usuarios);
            return res.redirect('/')
        }else{
            return res.render('register',{
                old : req.body,
                errores : errors.mapped()
            })
        }
    },
    login : (req,res) => {
        return res.render('login',{ 
        })
    },
    processLogin : (req,res) => {
        let errors = validationResult(req);
        const {email, contrasenia} = req.body;
        if(errors.isEmpty()){
            let usuario = usuarios.find(usuario => ((usuario.email === email)&&(usuario.contrasenia === contrasenia)))
            req.session = {
                id : usuario.id,
                nombre : usuario.nombre,
                rol : usuario.rol
            }
            return res.redirect('/')
        }else{
            /* return res.send(errors) */
            return res.render('login',{
                errores : errors.mapped()
            })
        }
    }
}