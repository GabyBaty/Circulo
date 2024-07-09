var express = require('express');
var router = express.Router();
const {recibo} = require('../controllers/recibosControllers');

/* GET filiales page. */
router.get('recibos',recibo)


module.exports = router;