const fs = require('fs');
const path = require('path');


module.exports ={
    juridico: (req,res) => {    //comodoro viene de router//
        return res.render('asesoramientoJuridico',{    //comodoros de la vista//
            title: 'CIRCULO-ASESORAMIENTO JURIDICO',
        })     
        
    },
}