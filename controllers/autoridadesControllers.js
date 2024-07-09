const fs = require('fs');
const path = require('path');


module.exports ={
    autoridad: (req,res) => {    //comodoro viene de router//
        return res.render('autoridades',{    //comodoros de la vista//
            title: 'CIRCULO-AUTORIDADES',
        })     
        
    },
}