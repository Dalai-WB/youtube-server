const db = require("../models");
const User = db.users;
const Video = db.videos;

exports.create = (req, res) => {
  if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const random = Math.floor(Math.random() * 9000 + 1000);
  const fName = req.body.firstName;
  const lName = req.body.lastName;

  const user = new User({
    profileImage: "https://api.multiavatar.com/" + random + ".svg",
    profileId: "@" + fName.toLowerCase() + lName.toLowerCase() + random,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  user
    .save(user)
    .then((data) => {
      res.send({ data: data, type: 1 });
    })
    .catch((err) => {
      res.send({
        message: "Account already exist",
        type: 2,
      });
    });
};

exports.findAll = (req, res) => {
  let condition = {};

  User.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving user.",
      });
    });
};

exports.findOne = (req, res) => {
  const email = req.params.email;
  let condition = { email: email };

  User.find(condition)
    .then((data) => {
      if (Object.values(data).length === 0) {
        res
          .status(404)
          .send({ message: "Not found email with email " + email });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving user with email=" + email });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`,
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User with id=" + id,
      });
    });
};

exports.delete = (req, res) => {};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};

exports.getVideos = (req, res) => {
  let condition = {};

  Video.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving user.",
      });
    });
};
