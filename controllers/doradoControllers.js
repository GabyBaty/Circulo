const fs = require('fs');
const path = require('path');


module.exports ={
    dorado : (req,res) => {    //dorado viene de router//
        return res.render('doradoF',{    //doradoF de la vista//
            title: 'CIRCULO-DORADO',
        })     
        
    },
}
