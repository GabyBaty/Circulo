var express = require('express');
var router = express.Router();
const {tour,processRegister}= require('../controllers/tourControllers');
const registeValidator = require('../validations/registerValidator');


/* GET news page. */
router.get('/', tour);
router.post('/', registeValidator, processRegister)


module.exports = router;