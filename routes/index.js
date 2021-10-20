var express = require('express');
var router = express.Router();
var{index,about,contactos,filiales,bienestar,reserva,tour,sortea2,formularios,formulario} = require('../controllers/indexControllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* router.get('/', index); */
router.get('/about', about);
router.get('/contactos', contactos);
router.get('/filial',filiales);
router.get('/wellness',bienestar);
router.get('/reservas',reserva);
router.get('/tours',tour);
router.get('/sortea2',sortea2);
router.get('/formulario',formulario)
router.get('/formularios',formularios)

module.exports = router;
