var express = require('express');
var router = express.Router();

const {login, processLogin} = require('../controllers/usersController');

const loginValidator =require('../validations/loginValidator');



/* GET users listing. */

router.get('/login', login);
router.post('/login',loginValidator, processLogin)

module.exports = router;