var express = require('express');
var router = express.Router();
const {concepcion} = require('../controllers/concepcionControllers');

/* GET filiales page. */
router.get('/',concepcion)


module.exports = router;