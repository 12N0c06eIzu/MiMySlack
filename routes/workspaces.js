var express = require('express');
const { Op } = require('sequelize');
var router = express.Router();

// const db = require('../models/index.js');
const models = require('../models');
/* GET users listing. */
router.get('/', (req, res, next) => {
  // res.send('workspaces');
  res.render('workspaces/index');
});

router.get('/all', (req, res) => {
  models.Workspace.findAll().then((users) => {
    res.render('workspaces/all', { "users": users });
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

  router.get('/create', (req, res, next) => {
    var data = {
      title: 'Workspaces/create'
    }
    res.render('workspaces/create', data);
  });

  router.post('/create', (req, res, next) => {
    models.sequelize.sync()
    .then(() => models.Workspace.create({
      pk_wid: req.body.id,
      name: req.body.name
    }))
    .then(usr => {
      res.redirect('/workspaces');
    })
  });

  router.post('/delete', (req, res) => {
    models.Workspace.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(usr => {
      res.redirect('/workspaces');
    })
  });

module.exports = router;
