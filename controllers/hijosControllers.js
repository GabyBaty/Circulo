const fs = require('fs');
const path = require('path');


module.exports ={
    hijos: (req,res) => {    //comodoro viene de router//
        return res.render('subsidioHijos',{    //comodoros de la vista//
            title: 'CIRCULO-SUBSIDIO POR HIJOS',
        })     
        
    },
}