var express = require('express');
var router = express.Router();
const {contacto} = require('../controllers/contactosControllers');

/* GET bienestar page. */
router.get('/contactos',contacto);


module.exports = router;