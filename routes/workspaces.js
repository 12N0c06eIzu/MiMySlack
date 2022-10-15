var express = require('express');
const { Op } = require('sequelize');
var router = express.Router();

// const db = require('../models/index.js');
const models = require('../models');
/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/all', (req, res) => {
  models.Workspace.findAll().then((users) => {
    res.json(users);
  });
});

router.get('/search', (req, res, next) => {
    const id = req.query.id;
    models.Workspace.findAll({
        where: {
            id: {[Op.eq]:id}
        }
    }).then((users) => {
      res.json(users);
    });
  });
  
  


module.exports = router;
