const fs = require('fs');
const path = require('path');

module.exports ={
    form: JSON.parse(fs.readFileSync(path.join(__dirname,'turismo.json'),'utf-8')),
    guardar : data => fs.writeFileSync(path.join(__dirname,'turismo.json'),JSON.stringify(data,null,2),'utf-8'),
}
   
