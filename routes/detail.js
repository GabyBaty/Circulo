var express = require('express');
var router = express.Router();
const {detail}= require('../controllers/detailControllers');

/* GET news page. */
router.get('/:id',detail)


module.exports = router;
