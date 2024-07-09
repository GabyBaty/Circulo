var express = require('express');
var router = express.Router();
const {hijos} = require('../controllers/hijosControllers');

/* GET filiales page. */
router.get('subsidioHijo',hijos)


module.exports = router;