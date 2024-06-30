const fs = require('fs');
const path = require('path');


module.exports ={
    formulario : (req,res) => {    //dorado viene de router//
        return res.render('formulario1',{    //doradoF de la vista//
            title: 'CIRCULO-FORMULARIO',
        })     
        
    },
}