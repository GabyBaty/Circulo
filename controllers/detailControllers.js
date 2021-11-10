const fs = require('fs');
const path = require('path');
let noticias = require('../data/detail_db');

module.exports ={
    detail : (req,res) => {   
        
        let noticia = noticias.find(noticia=> noticia.id===+req.params.id);
         console.log(noticia);
        
        return res.render('detailnews',{    
            title: 'CIRCULO-DETALLE-NOTICIAS',
            noticia,
            noticias
        })     
        
    },
}