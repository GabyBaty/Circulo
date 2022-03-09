const fs = require('fs');
const path = require('path');

/* configuracion emailjs */
const {SMTPClient, Message} = require('emailjs');
const client = new SMTPClient({
	user: 'formulario.actualizacion@gmail.com',
	password: 'Siempre3juntos',
	host: 'smtp.gmail.com',
	ssl: true,
});


module.exports ={
    tramite : (req,res) => {    //tramite viene de router//
        return res.render('tramites',{    //tramites de la vista//
            title: 'CIRCULO-GUIA DE TRAMITES',
        })     
        
    },
    sendForm : (req,res) => {
        const {codigo,situacion,documento,cuil,socio,apellido,nombre,grado,unidad,nacimiento,provincia,localidad,domicilio,cp,telefono,celular,mail} = req.body
       
        const message = new Message( {
            text: 'i hope this works',
            from: 'formulario.actualizacion@gmail.com',
            to: 'gabriel.carrizo@cirsubgn.org , afiliaciones@cirsubgn.org',
            cc: 'paginacirsub@cirsubgn.org',
            subject: 'Datos para afiliarse o actualizar',
             attachment: [
                { data: `
                <html>
                    <b>Código estadístico</b><span>${codigo}<span/><br> 
                    <b>Situación</b><span>${situacion}<span/><br> 
                    <b>Documento</b><span>${documento}<span/><br> 
                    <b>CUIL</b><span>${cuil}<span/><br> 
                    <b>Número de socio</b><span>${socio}<span/><br> 
                    <b>Apellido</b><span>${apellido}<span/><br> 
                    <b>Nombre</b><span>${nombre}<span/><br> 
                    <b>Cargo</b><span>${grado}<span/><br> 
                    <b>Unidad</b><span>${unidad}<span/><br> 
                    <b>Fecha de nacimiento</b><span>${nacimiento}<span/><br> 
                    <b>Provincia</b><span>${provincia}<span/><br> 
                    <b>Localidad</b><span>${localidad}<span/><br> 
                    <b>Domicilio</b><span>${domicilio}<span/><br> 
                    <b>Codigo Postal</b><span>${cp}<span/><br> 
                    <b>Teléfono fijo</b><span>${telefono}<span/><br> 
                    <b>Telefono celular</b><span>${celular}<span/><br>
                    <b>E-mail</b><span>${mail}<span/><br> 

                </html>`, 
                alternative: true },
            ], 
        });
        client.send(message, (err, message) => {
            console.log(err || message);
        });
        return res.redirect('/')
    },
    
/* 
    sendForm2 : (req,res) => {
        const {codigo,situacion,alta,apellido,nombre,socio,parentesco,apellido2,nombres2,dni2,nacimiento} = req.body
       
        const message = new Message( {
            text: 'i hope this works',
            from: 'formulario.actualizacion@gmail.com',
            to: 'gabriel.carrizo@cirsubgn.org',
            cc: 'paginacirsub@cirsubgn.org',
            subject: 'Familiares a cargo',
             attachment: [
                { data: `
                <html>
                    <b>Código estadístico</b><span>${codigo}<span/><br> 
                    <b>Situación</b><span>${situacion}<span/><br> 
                    <b>Fecha de Alta</b><span>${alta}<span/><br> 
                    <b>Apellido</b><span>${apellido}<span/><br> 
                    <b>Nombre</b><span>${nombre}<span/><br> 
                    <b>Número de socio</b><span>${socio}<span/><br> 
                    <b>Parentesco</b><span>${parentesco}<span/><br> 
                    <b>Apellido</b><span>${apellido2}<span/><br> 
                    <b>Nombres</b><span>${nombres2}<span/><br> 
                    <b>DNI</b><span>${dni2}<span/><br> 
                    <b>Fecha de nacimiento</b><span>${nacimiento}<span/><br>
                    <b>Número de socio</b><span>${socio}<span/><br> 
                    <b>Parentesco</b><span>${parentesco}<span/><br> 
                    <b>Apellido</b><span>${apellido2}<span/><br> 
                    <b>Nombres</b><span>${nombres2}<span/><br> 
                    <b>DNI</b><span>${dni2}<span/><br> 
                    <b>Fecha de nacimiento</b><span>${nacimiento}<span/><br>
                    <b>Número de socio</b><span>${socio}<span/><br> 
                    <b>Parentesco</b><span>${parentesco}<span/><br> 
                    <b>Apellido</b><span>${apellido2}<span/><br> 
                    <b>Nombres</b><span>${nombres2}<span/><br> 
                    <b>DNI</b><span>${dni2}<span/><br> 
                    <b>Fecha de nacimiento</b><span>${nacimiento}<span/><br>
                    <b>Número de socio</b><span>${socio}<span/><br> 
                    <b>Parentesco</b><span>${parentesco}<span/><br> 
                    <b>Apellido</b><span>${apellido2}<span/><br> 
                    <b>Nombres</b><span>${nombres2}<span/><br> 
                    <b>DNI</b><span>${dni2}<span/><br> 
                    <b>Fecha de nacimiento</b><span>${nacimiento}<span/><br>
                    <b>Número de socio</b><span>${socio}<span/><br> 
                    <b>Parentesco</b><span>${parentesco}<span/><br> 
                    <b>Apellido</b><span>${apellido2}<span/><br> 
                    <b>Nombres</b><span>${nombres2}<span/><br> 
                    <b>DNI</b><span>${dni2}<span/><br> 
                    <b>Fecha de nacimiento</b><span>${nacimiento}<span/><br> 
                  

                </html>`, 
                alternative: true },
            ], 
        });
        client.send(message, (err, message) => {
            console.log(err || message);
        });
        return res.redirect('/')
    }, */
    

}
