const fs = require('fs');
const path = require('path');


module.exports ={
    tramite : (req,res) => {    //tramite viene de router//
        return res.render('tramites',{    //tramites de la vista//
            title: 'CIRCULO-GUIA DE TRAMITES',
        })     
        
    },
}
