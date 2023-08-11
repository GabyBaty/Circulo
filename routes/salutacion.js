var express = require('express');
var router = express.Router();
const {salutacion} = require('../controllers/salutacionesControllers');

/* GET filiales page. */
router.get('/',salutacion)


module.exports = router;