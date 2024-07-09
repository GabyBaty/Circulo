var express = require('express');
var router = express.Router();
const {sepelio} = require('../controllers/sepelioControllers');

/* GET filiales page. */
router.get('subsidioSepelio',sepelio)


module.exports = router;