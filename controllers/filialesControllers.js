const fs = require('fs');
const path = require('path');
let hoteles = require('../data/filiales_db.js');

module.exports ={
    filiales : (req,res) => {    //filiales viene de router//
        return res.render('filial',{    //filial de la vista//
            title: 'CIRCULO-FILIALES',
            hoteles
        })     
        
    },
}
