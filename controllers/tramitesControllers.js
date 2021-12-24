const fs = require('fs');
const path = require('path');

/* configuracion emailjs */
const {SMTPClient, Message} = require('emailjs');
const client = new SMTPClient({
	user: 'urbaneventsportaleric@gmail.com',
	password: 'gedeon300',
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
        const {codigo,situacion,documento,cuil,socio,apellido,nombre,cargo,unidad,nacimiento,provincia,localidad,domicilio,cp,telefono,celular} = req.body
       
        const message = new Message( {
            text: 'i hope this works',
            from: 'formulario.actualizacion@gmail.com',
            to: 'gabriel.carrizo@cirsubgn.org',
            subject: 'testing emailjs',
             attachment: [
                { data: `
                <html>
                    <b>Código estadístico</b><span>${codigo}<span/>
                    <b>Situación</b><span>${situacion}<span/>
                    <b>Documento</b><span>${documento}<span/>
                    <b>CUIL</b><span>${cuil}<span/>
                    <b>Número de socio</b><span>${socio}<span/>
                    <b>Apellido</b><span>${apellido}<span/>
                    <b>Nombre</b><span>${nombre}<span/>
                    <b>Cargo</b><span>${cargo}<span/>
                    <b>Unidad</b><span>${unidad}<span/>
                    <b>Fecha de nacimiento</b><span>${nacimiento}<span/>
                    <b>Provincia</b><span>${provincia}<span/>
                    <b>Localidad</b><span>${localidad}<span/>
                    <b>Domicilio</b><span>${domicilio}<span/>
                    <b>Codigo Postal</b><span>${cp}<span/>
                    <b>Teléfono fijo</b><span>${telefono}<span/>
                    <b>Telefono celular</b><span>${celular}<span/>

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
