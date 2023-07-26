var express = require('express');
var router = express.Router();
const {dorado} = require('../controllers/doradoControllers');

/* GET filiales page. */
router.get('/',dorado)


module.exports = router;