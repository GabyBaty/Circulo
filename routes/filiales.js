var express = require('express');
var router = express.Router();
const {filiales} = require('../controllers/filialesControllers');

/* GET filiales page. */
router.get('/filial',filiales)


module.exports = router;