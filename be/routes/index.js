var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express fix' });
});

router.get('/vue', function(req, res, next) {
  res.sendFile(__dirname + '/../dist/index.html')
});

module.exports = router;
