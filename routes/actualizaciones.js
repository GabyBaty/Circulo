var express = require('express');
var router = express.Router();
const {actualizaciones} = require('../controllers/actualizacionControllers');

/* GET filiales page. */
router.get('actualizacionD',actualizaciones)


module.exports = router;