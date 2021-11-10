const fs = require('fs');
const path = require('path');


module.exports ={
    delegado : (req,res) => {    //delegado viene de router//
        return res.render('delegados',{    //delegados de la vista//
            title: 'CIRCULO-DELEGADOS',
        })     
        
    },
}


