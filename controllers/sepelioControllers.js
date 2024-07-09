const fs = require('fs');
const path = require('path');


module.exports ={
    sepelio: (req,res) => {    //comodoro viene de router//
        return res.render('subsidioSepelio',{    //comodoros de la vista//
            title: 'CIRCULO-SUBSIDIO POR SEPELIO',
        })     
        
    },
}