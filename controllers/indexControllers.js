module.exports = {
    index:(req,res)=>{

    },
    about: (req,res)=> {
        return res.render('about', {
            title: 'CIRCULO-ABOUT',
        })
    },
    contactos:(req,res)=>{
        return res.render('contactos', {
            title: 'CIRCULO-CONTACTOS',
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
    sortea2:(req,res)=> {
        return res.render ('sortea2',{
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
    }

}