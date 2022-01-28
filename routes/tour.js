var express = require('express');
var router = express.Router();
const {tour,sendForm}= require('../controllers/tourControllers');
const registeValidator = require('../validations/registerValidator');


/* GET news page. */
router.get('/', tour);
router.post('/', sendForm)


module.exports = router;