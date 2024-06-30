const fs = require('fs');
const path = require('path');


module.exports ={
    actualizaciones: (req,res) => {    //comodoro viene de router//
        return res.render('actualizacionD',{    //comodoros de la vista//
            title: 'CIRCULO-ACTUALIZACION',
        })     
        
    },
}