const fs = require('fs');
const path = require('path');


module.exports ={
    reserva : (req,res) => {    //reserva viene de router//
        return res.render('reservas',{    //reservas de la vista//
            title: 'CIRCULO-RESERVAS',
        })     
        
    },
}

