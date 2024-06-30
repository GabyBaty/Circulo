var express = require('express');
var router = express.Router();
const {altafamiliar} = require('../controllers/altaControllers');

/* GET filiales page. */
router.get('altaFamiliar',altafamiliar)


module.exports = router;