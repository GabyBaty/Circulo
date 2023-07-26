var express = require('express');
var router = express.Router();
const {comodoro} = require('../controllers/comodoroControllers');

/* GET filiales page. */
router.get('/',comodoro)


module.exports = router;