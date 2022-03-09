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
    

    sendForm2 : (req,res) => {
        /* return (res.send(req.body)) */
        const {codigo,situacion,alta,apellido,nombre,socio,parentesco,apellido2,nombres2,dni2,nacimiento,socio3,parentesco3,apellido3,nombres3,dni3,nacimiento3,socio4,parentesco4,apellido4,nombres4,dni4,nacimiento4,socio5,parentesco5,apellido5,nombres5,dni5,nacimiento5,socio6,parentesco6,apellido6,nombres6,dni6,nacimiento6} = req.body
       
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
                    <b>Número de socio</b><span>${socio3}<span/><br> 
                    <b>Parentesco</b><span>${parentesco3}<span/><br> 
                    <b>Apellido</b><span>${apellido3}<span/><br> 
                    <b>Nombres</b><span>${nombres3}<span/><br> 
                    <b>DNI</b><span>${dni3}<span/><br> 
                    <b>Fecha de nacimiento</b><span>${nacimiento3}<span/><br>
                    <b>Número de socio</b><span>${socio4}<span/><br> 
                    <b>Parentesco</b><span>${parentesco4}<span/><br> 
                    <b>Apellido</b><span>${apellido4}<span/><br> 
                    <b>Nombres</b><span>${nombres4}<span/><br> 
                    <b>DNI</b><span>${dni4}<span/><br> 
                    <b>Fecha de nacimiento</b><span>${nacimiento4}<span/><br>
                    <b>Número de socio</b><span>${socio5}<span/><br> 
                    <b>Parentesco</b><span>${parentesco5}<span/><br> 
                    <b>Apellido</b><span>${apellido5}<span/><br> 
                    <b>Nombres</b><span>${nombres5}<span/><br> 
                    <b>DNI</b><span>${dni5}<span/><br> 
                    <b>Fecha de nacimiento</b><span>${nacimiento5}<span/><br>
                    <b>Número de socio</b><span>${socio6}<span/><br> 
                    <b>Parentesco</b><span>${parentesco6}<span/><br> 
                    <b>Apellido</b><span>${apellido6}<span/><br> 
                    <b>Nombres</b><span>${nombres6}<span/><br> 
                    <b>DNI</b><span>${dni6}<span/><br> 
                    <b>Fecha de nacimiento</b><span>${nacimiento6}<span/><br> 
                  

                </html>`, 
                alternative: true },
            ], 
        });
        client.send(message, (err, message) => {
            console.log(err || message);
        });
        return res.redirect('/')
    }, 
    

}
