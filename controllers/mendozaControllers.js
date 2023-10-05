const fs = require('fs');
const path = require('path');


module.exports ={
    mendoza : (req,res) => {    //mendoza viene de router//
        return res.render('mendozaF',{    //mendozaF de la vista//
            title: 'CIRCULO-MENDOZA',
        })     
        
    },
}
