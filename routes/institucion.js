var express = require('express');
var router = express.Router();
const {institucion} = require('../controllers/institucionalControllers');

/* GET filiales page. */
router.get('institucional',institucion)


module.exports = router;