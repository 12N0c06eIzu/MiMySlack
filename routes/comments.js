var express = require('express');
const { Op } = require('sequelize');
var router = express.Router();

// const db = require('../models/index.js');
const models = require('../models');
/* GET users listing. */
router.get('/', (req, res, next) => {
  // res.send('workspaces');
  res.render('comments/index');
});

router.get('/all', (req, res) => {
  models.Comment.findAll().then((users) => {
    res.render('comments/all', { "users": users });
  });
});

router.get('/search', (req, res, next) => {
    const id = req.query.id;
    models.Comment.findAll({
        where: {
            id: {[Op.eq]:id}
        }
    }).then((users) => {
      res.json(users);
    });
  });

  router.get('/create', (req, res, next) => {
    var data = {
      title: 'comments/create'
    }
    res.render('comments/create', data);
  });

  router.post('/create', (req, res, next) => {
    models.sequelize.sync()
    .then(() => models.Comment.create({
      pk_wid: req.body.id,
      name: req.body.name
    }))
    .then(usr => {
      res.redirect('/comments');
    })
  });

  router.post('/update', (req, res, next) => {
    console.log(req.body)
    models.Comment.findOne({
      where: {
        pk_wid: {[Op.eq]: req.body.id}
      }
    }).then(usr => {
      usr.name = req.body.name;
      usr.save();
      res.redirect('/comments/all');
    })
  });

  router.post('/delete', (req, res) => {
    models.Comment.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(usr => {
      res.redirect('/comments');
    })
  });

module.exports = router;
