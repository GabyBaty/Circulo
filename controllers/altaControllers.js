const fs = require('fs');
const path = require('path');


module.exports ={
    altafamiliar: (req,res) => {    //comodoro viene de router//
        return res.render('altaFamiliar',{    //comodoros de la vista//
            title: 'CIRCULO-Alta-Familiar',
        })     
        
    },
}
