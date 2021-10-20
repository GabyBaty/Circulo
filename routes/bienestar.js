var express = require('express');
var router = express.Router();
const {bienestar} = require('../controllers/bienestarControllers');

/* GET bienestar page. */
router.get('/wellness',bienestar);


module.exports = router;