var express = require('express');
var router = express.Router();
const {juridico} = require('../controllers/asejuridicoControllers');

/* GET filiales page. */
router.get('asesoramientoJuridico',juridico)


module.exports = router;