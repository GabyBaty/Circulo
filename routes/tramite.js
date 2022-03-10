var express = require('express');
var router = express.Router();
const {tramite,sendForm,sendForm2,sendForm3}= require('../controllers/tramitesControllers');

/* GET news page. */
router.get('/tramites',tramite)
router.post('/tramites',sendForm)
router.post('/tramites2',sendForm2)
router.post('/tramites3',sendForm3)


module.exports = router;