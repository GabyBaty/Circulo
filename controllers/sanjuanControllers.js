const fs = require('fs');
const path = require('path');


module.exports ={
    sanjuan : (req,res) => {    //sanjuan viene de router//
        return res.render('sanjuanF',{    //sanjuanF de la vista//
            title: 'CIRCULO-SAN JUAN',
        })     
        
    },
}
