const fs = require('fs');
const path = require('path');
/* let noticias = require('../data/news_db'); */

module.exports ={
    reserva : (req,res) => {    //reserva viene de router//
        return res.render('reservas',{    //reservas de la vista//
            title: 'CIRCULO-RESERVAS',
        })     
        
    },
}

