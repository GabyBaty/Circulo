module.exports = {
    index:(req,res)=>{

    },
    about: (req,res)=> {
        return res.render('about', {
            title: 'CIRCULO-ABOUT',
        })
    },
    contacto:(req,res)=>{
        return res.render('contacto', {
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
}