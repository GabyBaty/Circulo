const fs = require('fs');
const path = require('path');
let noticias = require('../data/news_db');

module.exports ={
    detail : (req,res) => {   
        let detailNoticia;
         for (const individual of noticias) {
            if (individual.id===req.params.id) {
                detailNoticia = individual 
                break;
            } 
         }
         console.log(noticias);
        console.log(detailNoticia)
        return res.render('detailnews',{    
            title: 'CIRCULO-DETALLE-NOTICIAS',
            detailNoticia,
           
        })     
        
    },
}