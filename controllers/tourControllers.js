const fs = require('fs');
const path = require('path');

const {form, guardar} = require('../data/turismo_db');

const {validationResult} = require('express-validator');


module.exports ={
    tour : (req,res) => {    //tour viene de router//
        return res.render('tours',{    //tours de la vista//
            title: 'CIRCULO-TURISMO',
        })     
        
    },
    processRegister : (req,res) => {
        let errors = validationResult(req);
        let {nombre,apellido,documento,codigo,email,telefono,llegada,salida,adultos,menores12,menores3,notas} = req.body;
        if(typeof hobbies === "string"){
            hobbies = hobbies.split()
        }
        if(errors.isEmpty()){
            let formu = {
                id,
                nombre,
                apellido,
                documento,
                codigo,
                email,
                telefono,
                llegada,
                salida,
                adultos,
                menores12,
                menores3,
                notas,
            }
            form.push(formu);
            guardar(form);
            return res.redirect('/')
        }else{
            return res.render('tours',{
               
               
                old : req.body,
                errores : errors.mapped()
            })
        }
        
    },
}
