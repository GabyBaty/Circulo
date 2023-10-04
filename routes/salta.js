var express = require('express');
var router = express.Router();
const {salta} = require('../controllers/saltaControllers');

/* GET filiales page. */
router.get('/',salta)


module.exports = router;