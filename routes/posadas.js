var express = require('express');
var router = express.Router();
const {posadas} = require('../controllers/posadasControllers');

/* GET filiales page. */
router.get('/',posadas)


module.exports = router;