var express = require('express');
var router = express.Router();
var{index,about,contacto,filiales,bienestar,reserva,tour,farmacia,delegado,evacuation,sorteos,formulario,tramite,alta,actualizacion,contable,juridico,bodas,casamiento,hijos,sepelio,institucion,autoridad,recibo} = require('../controllers/indexControllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/', index);
router.get('/about', about);
router.get('/contactos', contacto);
router.get('/filial',filiales);
router.get('/wellness',bienestar);
router.get('/reservas',reserva);
router.get('/tours',tour);
router.get('./farmacias',farmacia);
router.get('./delegados',delegado);
router.get('./evacuacion',evacuation);
router.get('/sorteos',sorteos);
router.get('/formulario1',formulario);
router.get('/tramites',tramite);
router.get('/altaFamiliar',alta);
router.get('/actualizacionD',actualizacion);
router.get('/asesoramientoContable',contable);
router.get('/asesoramientoJuridico',juridico);
router.get('/bodasOro',bodas);
router.get('/casamientos',casamiento);
router.get('/subsidioHijos',hijos);
router.get('/subsidioSepelio',sepelio);
router.get('/institucional',institucion);
router.get('/autoridades',autoridad);
router.get('/recibos',recibo);

module.exports = router;