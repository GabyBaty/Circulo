const fs = require('fs');
const path = require('path');


module.exports ={
    posadas : (req,res) => {    //posadas viene de router//
        return res.render('posadas',{    //posadas de la vista//
            title: 'CIRCULO-Posadas',
        })     
        
    },
}
