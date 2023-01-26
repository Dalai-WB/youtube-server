const db = require("../models");
const User = db.users;
const Video = db.videos;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const random = Math.floor(Math.random() * 9000 + 1000);
  const fName = req.body.firstName;
  const lName = req.body.lastName;

  // Create a Tutorial
  const user = new User({
    profileImage: "https://api.multiavatar.com/" + random + ".svg",
    profileId: "@" + fName.toLowerCase() + lName.toLowerCase() + random,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  // Save Tutorial in the database
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

// Retrieve all Tutorials from the database.
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

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const email = req.params.email;
  let condition = { email: email };

  User.find(condition)
    .then((data) => {
      console.log(data);
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

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
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
