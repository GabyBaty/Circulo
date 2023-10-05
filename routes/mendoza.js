var express = require('express');
var router = express.Router();
const {mendoza} = require('../controllers/mendozaControllers');

/* GET filiales page. */
router.get('/',mendoza)


module.exports = router;