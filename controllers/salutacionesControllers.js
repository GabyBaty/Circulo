const fs = require('fs');
const path = require('path');


module.exports ={
    salutacion : (req,res) => {    //salutacion viene de router//
        return res.render('salutaciones',{    //salutaciones de la vista//
            title: 'CIRCULO-SALUTACIONES',
        })     
        
    },
}
