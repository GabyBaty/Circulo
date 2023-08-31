var express = require('express');
var router = express.Router();
const {festejos} = require('../controllers/festejoControllers');

/* GET filiales page. */
router.get('/',festejos)


module.exports = router;