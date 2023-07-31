var express = require('express');
var router = express.Router();
const {neuquen} = require('../controllers/neuquenControllers');

/* GET filiales page. */
router.get('/',neuquen)


module.exports = router;