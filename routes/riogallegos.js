var express = require('express');
var router = express.Router();
const {riogallegos} = require('../controllers/riogallegosControllers');

/* GET filiales page. */
router.get('/',riogallegos)


module.exports = router;