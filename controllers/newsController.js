const fs = require('fs');
const path = require('path');
let noticias = require('../data/news_db');

module.exports ={
    news : (req,res) => {    //news viene de router//
        return res.render('new',{    //new de la vista//
            title: 'CIRCULO-NOTICIAS',
            noticias
        })     
        
    },
}


