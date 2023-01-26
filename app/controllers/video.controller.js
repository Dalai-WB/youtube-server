const db = require("../models");
const Video = db.videos;

exports.getVideos = (req, res) => {
    console.log('orson2');
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
