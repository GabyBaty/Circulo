var express = require('express');
var router = express.Router();
const {formosa} = require('../controllers/formosaControllers');

/* GET filiales page. */
router.get('/',formosa)


module.exports = router;