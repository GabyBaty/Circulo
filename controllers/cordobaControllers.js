const fs = require('fs');
const path = require('path');


module.exports ={
    cordoba : (req,res) => {    //cordoba viene de router//
        return res.render('cordobaF',{    //cordobaF de la vista//
            title: 'CIRCULO-CORDOBA',
        })     
        
    },
}
