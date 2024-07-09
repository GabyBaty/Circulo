const fs = require('fs');
const path = require('path');


module.exports ={
    casamiento: (req,res) => {    //comodoro viene de router//
        return res.render('casamientos',{    //comodoros de la vista//
            title: 'CIRCULO-CASAMIENTO',
        })     
        
    },
}