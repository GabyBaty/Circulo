var express = require('express');
var router = express.Router();
const {tramite,sendForm}= require('../controllers/tramitesControllers');

/* GET news page. */
router.get('/tramites',tramite)
router.post('/tramites',sendForm)


module.exports = router;