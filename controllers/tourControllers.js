const fs = require('fs');
const path = require('path');

const {form, guardar} = require('../data/turismo_db');

const {validationResult} = require('express-validator');

/* configuracion emailjs */
const {SMTPClient, Message} = require('emailjs');
const client = new SMTPClient({
	user: 'urbaneventsportaleric@gmail.com',
	password: 'gedeon300',
	host: 'smtp.gmail.com',
	ssl: true,
});

module.exports ={
    tour : (req,res) => {    //tour viene de router//
        return res.render('tours',{    //tours de la vista//
            title: 'CIRCULO-TURISMO',
        })     
        
    },
    processRegister : (req,res) => {
        let errors = validationResult(req);
        let {nombre,apellido,documento,codigo,email,telefono,llegada,salida,adultos,menores12,menores3,notas} = req.body;
        if(typeof hobbies === "string"){
            hobbies = hobbies.split()
        }
        if(errors.isEmpty()){
            let formu = {
                id,
                nombre,
                apellido,
                documento,
                codigo,
                email,
                telefono,
                llegada,
                salida,
                adultos,
                menores12,
                menores3,
                notas,
            }
            form.push(formu);
            guardar(form);
            return res.redirect('/')
        }else{
            return res.render('tours',{
               
               
                old : req.body,
                errores : errors.mapped()
            })
        }
        
    },
    sendForm : (req,res) => {
        const {codigo,situacion,documento,cuil,socio,apellido,nombre,cargo,unidad,nacimiento,provincia,localidad,domicilio,cp,telefono,celular} = req.body
       
        const message = new Message( {
            text: 'i hope this works',
            from: 'formulario.actualizacion@gmail.com',
            to: 'gabriel.carrizo@cirsubgn.org',
            subject: 'testing emailjs',
             attachment: [
                { data: `
                <html>
                    <b>Nombre</b><span>${q3_nombreCompleto3[first]}<span/>
                    <b>Apellido</b><span>${q3_nombreCompleto3[last]}<span/>
                    <b>Documento de identidad</b><span>${documento}<span/>
                    <b>Código estadístico</b><span>${codigo}<span/>
                    <b>Email</b><span>${q4_correoElectronico4}<span/>
                    <b>Teléfono</b><span>${q5_numeroDe5[telefono]}<span/>
                    <b>Fecha de llegada</b><span>${fecha_llegada}<span/>
                    <b>Fecha de salida</b><span>${fecha_salida}<span/>
                    <b>Destino turístico</b><span>${q5_numeroDe5[area]}<span/>
                    <b>Adultos</b><span>${q24_adultos}<span/>
                    <b>Menores de 12 años</b><span>${q25_12Anos}<span/>
                    <b>Menores de 3 años</b><span>${q26_3Anos}<span/>
                    <b>Notas y peticiones especiales</b><span>${q13_notasY}<span/>
                    
                </html>`, 
                alternative: true },
            ], 
        });
        client.send(message, (err, message) => {
            console.log(err || message);
        });
        return res.redirect('/')
    }
}
