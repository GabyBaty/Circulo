const fs = require('fs');
const path = require('path');
/* let hoteles = require('../data/filiales_db.js'); */

module.exports ={
    bienestar : (req,res) => {    //bienestar viene de router//
        return res.render('wellness',{    //bienestar de la vista//
            title: 'CIRCULO-BIENESTAR',
            
        })     
        
    },
}
