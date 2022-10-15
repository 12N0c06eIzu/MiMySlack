var express = require('express');
var router = express.Router();

// const db = require('../models/index.js');
const model = require('../models');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/search', (req, res) => {
  model.Workspace.findAll().then(ws => {
  // db.Workspace.findAll().then(ws => {
      res.send(ws);
  })
});

module.exports = router;
