const fs = require('fs');
const path = require('path');


module.exports ={
    evacuation : (req,res) => {    //evacuation viene de router//
        return res.render('evacuacion',{    //evacuacion de la vista//
            title: 'CIRCULO-EVACUACION',
        })     
        
    },
}

