var express = require('express');
const { Op } = require('sequelize');
var router = express.Router();

// const db = require('../models/index.js');
const models = require('../models');
/* GET users listing. */
router.get('/', (req, res, next) => {
  // res.send('workspaces');
  res.render('spaces/index');
});

router.get('/all', (req, res) => {
  models.Space.findAll().then((users) => {
    // res.render('spaces/all', { "users": users });
    res.json({ "data": users})
  });
});

router.get('/search', (req, res, next) => {
    const id = req.query.id;
    models.Space.findAll({
        where: {
            id: {[Op.eq]:id}
        }
    }).then((users) => {
      res.json(users);
    });
  });

  router.get('/create', (req, res, next) => {
    var data = {
      title: 'spaces/create'
    }
    res.render('spaces/create', data);
  });

  router.post('/create', (req, res, next) => {
    models.sequelize.sync()
    .then(() => models.Space.create({
      pk_wid: req.body.id,
      name: req.body.name
    }))
    .then(usr => {
      res.redirect('/spaces');
    })
  });

  router.post('/update', (req, res, next) => {
    console.log(req.body)
    models.Space.findOne({
      where: {
        pk_wid: {[Op.eq]: req.body.id}
      }
    }).then(usr => {
      usr.name = req.body.name;
      usr.save();
      res.redirect('/spaces/all');
    })
  });

  router.post('/delete', (req, res) => {
    models.Space.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(usr => {
      res.redirect('/spaces');
    })
  });

module.exports = router;
