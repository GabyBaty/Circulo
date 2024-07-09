const fs = require('fs');
const path = require('path');


module.exports ={
    contable: (req,res) => {    //comodoro viene de router//
        return res.render('asesoramientoContable',{    //comodoros de la vista//
            title: 'CIRCULO-ASESORAMIENTO CONTABLE',
        })     
        
    },
}