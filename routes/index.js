var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/async', async function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
