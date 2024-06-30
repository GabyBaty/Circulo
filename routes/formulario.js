var express = require('express');
var router = express.Router();
const {formulario} = require('../controllers/formulariosControllers');

/* GET filiales page. */
router.get('/formulario1',formulario)

module.exports = router;