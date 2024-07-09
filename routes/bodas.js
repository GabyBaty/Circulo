var express = require('express');
var router = express.Router();
const {bodas} = require('../controllers/bodasControllers');

/* GET filiales page. */
router.get('bodasOro',bodas)


module.exports = router;