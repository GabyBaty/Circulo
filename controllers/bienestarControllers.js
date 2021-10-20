const fs = require('fs');
const path = require('path');


module.exports ={
    bienestar : (req,res) => {    //bienestar viene de router//
        return res.render('wellness',{    //wellness de la vista//
            title: 'CIRCULO-RESERVAS',
        })     
        
    },
}



