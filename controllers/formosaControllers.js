const fs = require('fs');
const path = require('path');


module.exports ={
    formosa : (req,res) => {    //concepcion viene de router//
        return res.render('formosaF',{    //concepcion de la vista//
            title: 'CIRCULO-Formosa',
        })     
        
    },
}
