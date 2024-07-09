var express = require('express');
var router = express.Router();
const {autoridad} = require('../controllers/autoridadesControllers');

/* GET filiales page. */
router.get('autoridades',autoridad)


module.exports = router;