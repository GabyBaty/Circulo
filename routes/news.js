var express = require('express');
var router = express.Router();
const {news}= require('../controllers/newsController');

/* GET news page. */
router.get('/',news)


module.exports = router;
