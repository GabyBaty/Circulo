var express = require('express');
var router = express.Router();
const {reserva}= require('../controllers/reservasControllers');

/* GET news page. */
router.get('/',reserva);
router.post('/',reserva);


module.exports = router;
