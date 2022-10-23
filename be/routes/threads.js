var express = require("express");
const { Op } = require("sequelize");
var router = express.Router();

// const db = require('../models/index.js');
const models = require("../models");
/* GET users listing. */
router.get("/", (req, res, next) => {
  // res.send('workspaces');
  res.render("threads/index");
});

router.get("/all", (req, res) => {
  models.Thread.findAll().then((users) => {
    // res.render('threads/all', { "users": users });
    res.json({ data: users });
  });
});

router.get("/search", (req, res, next) => {
  const id = req.query.id;
  models.Thread.findAll({
    where: {
      id: { [Op.eq]: id },
    },
  }).then((users) => {
    res.json(users);
  });
});

router.get("/searchThreads", (req, res, next) => {
  const id = req.query.id;
  models.Thread.findAll({
    where: {
      pk_sid: { [Op.eq]: id },
    },
  }).then((users) => {
    res.json(users);
  });
});

router.get("/create", (req, res, next) => {
  var data = {
    title: "threads/create",
  };
  res.render("threads/create", data);
});

router.post("/create", (req, res, next) => {
  models.sequelize
    .sync()
    .then(() =>
      models.Thread.create({
        pk_wid: req.body.id,
        name: req.body.name,
      })
    )
    .then((usr) => {
      res.redirect("/threads");
    });
});

router.post("/update", (req, res, next) => {
  console.log(req.body);
  models.Thread.findOne({
    where: {
      pk_wid: { [Op.eq]: req.body.id },
    },
  }).then((usr) => {
    usr.name = req.body.name;
    usr.save();
    res.redirect("/threads/all");
  });
});

router.post("/delete", (req, res) => {
  models.Thread.destroy({
    where: {
      id: req.body.id,
    },
  }).then((usr) => {
    res.redirect("/threads");
  });
});

module.exports = router;
