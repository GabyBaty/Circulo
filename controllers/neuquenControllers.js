const fs = require('fs');
const path = require('path');


module.exports ={
    neuquen : (req,res) => {    //neuquen viene de router//
        return res.render('neuquenF',{    //neuquenF de la vista//
            title: 'CIRCULO-NEUQUEN',
        })     
        
    },
}
