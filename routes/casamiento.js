var express = require('express');
var router = express.Router();
const {casamiento} = require('../controllers/casamientoControllers');

/* GET filiales page. */
router.get('casamientos',casamiento)


module.exports = router;