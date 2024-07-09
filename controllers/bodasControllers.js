const fs = require('fs');
const path = require('path');


module.exports ={
    bodas: (req,res) => {    //comodoro viene de router//
        return res.render('bodasOro',{    //comodoros de la vista//
            title: 'CIRCULO-BODAS DE ORO',
        })     
        
    },
}