var express = require('express');
var router = express.Router();
const {contable} = require('../controllers/asecontableControllers');

/* GET filiales page. */
router.get('asesoramientoContable',contable)


module.exports = router;