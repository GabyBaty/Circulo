const fs = require('fs');
const path = require('path');


module.exports ={
    recibo: (req,res) => {    //comodoro viene de router//
        return res.render('recibos',{    //comodoros de la vista//
            title: 'CIRCULO-RECIBOS',
        })     
        
    },
}