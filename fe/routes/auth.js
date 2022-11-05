var express = require("express");
const { Op } = require("sequelize");
var router = express.Router();

// const db = require('../models/index.js');
const models = require("../models");
/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("workspaces");
  //   res.render('workspaceKeys/index');
});

router.get("/all", (req, res) => {
  models.WorkspaceKeys.findAll().then((users) => {
    // res.render('comments/all', { "users": users });
    res.json({ data: users });
  });
});

router.get("/searchUser", (req, res, next) => {
  const id = req.query.id;
  models.WorkspaceKeys.findAll({
    where: {
      pk_uid: { [Op.eq]: id },
    },
  }).then((users) => {
    res.json(users);
  });
});

router.get("/:searchWs", (req, res, next) => {
  const id = req.query.id;
  console.log(id);
  models.WorkspaceKeys.findAll({
    where: {
      pk_uid: { [Op.eq]: id },
    },
    include: [
      {
        model: models.Workspace,
        required: true,
      }
    ]
  }).then((users) => {
    res.json(users);
  });
});

router.get("/create", (req, res, next) => {
  var data = {
    title: "workspaceKeys/create",
  };
  res.render("workspaceKeys/create", data);
});

router.post("/create", (req, res, next) => {
  models.sequelize
    .sync()
    .then(() =>
      models.Comment.create({
        pk_wid: req.body.id,
        name: req.body.name,
      })
    )
    .then((usr) => {
      res.redirect("/workspaceKeys");
    });
});

router.post("/update", (req, res, next) => {
  console.log(req.body);
  models.Comment.findOne({
    where: {
      pk_wid: { [Op.eq]: req.body.id },
    },
  }).then((usr) => {
    usr.name = req.body.name;
    usr.save();
    res.redirect("/workspaceKeys/all");
  });
});

router.post("/delete", (req, res) => {
  models.Comment.destroy({
    where: {
      id: req.body.id,
    },
  }).then((usr) => {
    res.redirect("/workspaceKeys");
  });
});

module.exports = router;
