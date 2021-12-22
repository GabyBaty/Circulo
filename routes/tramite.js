var express = require('express');
var router = express.Router();
const {tramite}= require('../controllers/tramitesControllers');

/* GET news page. */
router.get('/tramites',tramite)


module.exports = router;