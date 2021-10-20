var express = require('express');
var router = express.Router();
const {evacuation}= require('../controllers/evacuacionControllers');

/* GET news page. */
router.get('/',evacuation)


module.exports = router;