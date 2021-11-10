var express = require('express');
var router = express.Router();
var{index,about,contacto,filiales,bienestar,reserva,tour,farmacia,delegado,evacuation,sorteos,formulario,formularios} = require('../controllers/indexControllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* router.get('/', index); */
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
router.get('/formulario',formulario)
router.get('/formularios',formularios)

module.exports = router;
