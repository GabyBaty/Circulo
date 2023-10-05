var express = require('express');
var router = express.Router();
const {cordoba} = require('../controllers/cordobaControllers');

/* GET filiales page. */
router.get('/',cordoba)


module.exports = router;