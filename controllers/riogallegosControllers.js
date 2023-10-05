const fs = require('fs');
const path = require('path');


module.exports ={
    riogallegos : (req,res) => {    //riogallegos viene de router//
        return res.render('riogallegosF',{    //riogallegosF de la vista//
            title: 'CIRCULO-RIO GALLEGOS',
        })     
        
    },
}
