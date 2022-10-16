var express = require('express');
const { Op } = require('sequelize');
var router = express.Router();

// const db = require('../models/index.js');
const models = require('../models');
/* GET users listing. */
router.get('/', (req, res, next) => {
  // res.send('workspaces');
  res.render('users/index');
});

router.get('/all', (req, res) => {
  models.User.findAll().then((users) => {
    res.render('users/all', { "users": users });
  });
});

router.get('/search', (req, res, next) => {
    const id = req.query.id;
    models.User.findAll({
        where: {
            id: {[Op.eq]:id}
        }
    }).then((users) => {
      res.json(users);
    });
  });

  router.get('/create', (req, res, next) => {
    var data = {
      title: 'users/create'
    }
    res.render('users/create', data);
  });

  router.post('/create', (req, res, next) => {
    models.sequelize.sync()
    .then(() => models.User.create({
      pk_wid: req.body.id,
      name: req.body.name
    }))
    .then(usr => {
      res.redirect('/users');
    })
  });

  router.post('/update', (req, res, next) => {
    console.log(req.body)
    models.User.findOne({
      where: {
        pk_wid: {[Op.eq]: req.body.id}
      }
    }).then(usr => {
      usr.name = req.body.name;
      usr.save();
      res.redirect('/users/all');
    })
  });

  router.post('/delete', (req, res) => {
    models.User.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(usr => {
      res.redirect('/users');
    })
  });

module.exports = router;
