module.exports = {
    index:(req,res)=>{
        return res.render('/', {
            title: 'CIRCULO-HOME',
        })
    },
    about: (req,res)=> {
        return res.render('about', {
            title: 'CIRCULO-ABOUT',
        })
    },
    contacto:(req,res)=>{
        return res.render('contactos', {
            title: 'CIRCULO-CONTACTO',
        })
    },
    filiales:(req,res)=> {
        return res.render ('filial',{
            title: 'CIRCULO-FILIALES'
        })
    },
    bienestar:(req,res)=> {
        return res.render ('wellness',{
            title: 'CIRCULO-BIENESTAR'
        })
    },
    reserva:(req,res)=> {
        return res.render ('reservas',{
            title: 'CIRCULO-RESERVAS'
        })
    },
    tour:(req,res)=> {
        return res.render ('tours',{
            title: 'CIRCULO-TURISMO'
        })
    },
    farmacia:(req,res)=> {
        return res.render ('farmacias',{
            title: 'CIRCULO-FARMACIAS'
        })
    },
    delegado:(req,res)=> {
        return res.render ('delegados',{
            title: 'CIRCULO-DELEGADOS'
        })
    },
    evacuation:(req,res)=> {
        return res.render ('evacuacion',{
            title: 'CIRCULO-EVACUACION'
        })
    },
    sorteos:(req,res)=> {
        return res.render ('sorteos',{
            title: 'CIRCULO-SORTEOS'
        })
    },
    formulario:(req,res)=> {
        return res.render ('formularioEj',{
            title: 'CIRCULO-FORMULARIO'
        })
    },
    formularios:(req,res)=> {
        return res.render ('formularios',{
            title: 'CIRCULO-FORMULARIOS'
        })
    },
    news : (req,res) => {   
        return res.render('new',{ 
            title: 'CIRCULO-NOTICIAS',
            noticias
        })     
        
    },
    tramite : (req,res) => {   
        return res.render('tramites',{ 
            title: 'CIRCULO-GUIA DE TRAMITES',
            
        })     
        
    },
    concepcion:(req,res)=> {
        return res.render ('concepcionUru',{
            title: 'CIRCULO-CONCEPCION'
        })
    },
    formosa:(req,res)=> {
        return res.render ('formosaF',{
            title: 'CIRCULO-FORMOSA'
        })
    },
    posadas:(req,res)=> {
        return res.render ('posadasF',{
            title: 'CIRCULO-POSADAS'
        })
    },
    comodoro:(req,res)=> {
        return res.render ('comodoros',{
            title: 'CIRCULO-COMODORO'
        })
    },
    dorado:(req,res)=> {
        return res.render ('doradoF',{
            title: 'CIRCULO-DORADO'
        })
    },
   
}