const fs = require('fs');
const path = require('path');


module.exports ={
    contacto : (req,res) => {    //contacto viene de router//
        return res.render('contactos',{    //contactos de la vista//
            title: 'CIRCULO-CONTACTOS',
        })     
        
    },
}
