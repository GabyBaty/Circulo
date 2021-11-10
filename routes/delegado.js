var express = require('express');
var router = express.Router();
const {delegado}= require('../controllers/delegadosControllers');

/* GET news page. */
router.get('/',delegado)


module.exports = router;