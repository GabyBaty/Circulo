const fs = require('fs');
const path = require('path');


module.exports ={
    concepcion : (req,res) => {    //concepcion viene de router//
        return res.render('concepcionUru',{    //concepcion de la vista//
            title: 'CIRCULO-Concepcion',
        })     
        
    },
}
