const fs = require('fs');
const path = require('path');


module.exports ={
    festejos : (req,res) => {    //festejos viene de router//
        return res.render('festejo',{    //festejo de la vista//
            title: 'CIRCULO-FESTEJO',
        })     
        
    },
}
