const fs = require('fs');
const path = require('path');


module.exports ={
    comodoro : (req,res) => {    //comodoro viene de router//
        return res.render('comodoros',{    //comodoros de la vista//
            title: 'CIRCULO-Comodoro',
        })     
        
    },
}
