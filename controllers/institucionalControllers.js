const fs = require('fs');
const path = require('path');


module.exports ={
    institucion: (req,res) => {    //comodoro viene de router//
        return res.render('institucional',{    //comodoros de la vista//
            title: 'CIRCULO-INSTITUCIONAL',
        })     
        
    },
}