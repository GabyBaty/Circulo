const fs = require('fs');
const path = require('path');


module.exports ={
    farmacia : (req,res) => {    //bienestar viene de router//
        return res.render('farmacias',{    //wellness de la vista//
            title: 'CIRCULO-FARMACIAS',
        })     
        
    },
}


