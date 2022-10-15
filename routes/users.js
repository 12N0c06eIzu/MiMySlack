var express = require('express');
var router = express.Router();

// const db = require('../models/index.js');
const models = require('../models');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/all', (req, res) => {
  // res.send('respond with a resource');
  models.Workspace.findAll().then((users) => {
    res.json(users);
  });
});

module.exports = router;
