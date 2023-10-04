const fs = require('fs');
const path = require('path');


module.exports ={
    salta : (req,res) => {    //salta viene de router//
        return res.render('saltaF',{    //saltaF de la vista//
            title: 'CIRCULO-SALTA'
        })     
        
    },
}
