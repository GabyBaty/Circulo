var express = require('express');
var router = express.Router();
const {sanjuan} = require('../controllers/sanjuanControllers');

/* GET filiales page. */
router.get('/',sanjuan)


module.exports = router;