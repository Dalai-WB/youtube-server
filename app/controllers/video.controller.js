const db = require("../models");
const Video = db.videos;
const Short = db.short;

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

exports.getShorts = (req, res) => {
  let condition = {};

  Short.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving user.",
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Video.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Video with id=${id}. Maybe Video was not found!`,
        });
      } else res.send({ message: "Video was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Video with id=" + id,
      });
    });
};
