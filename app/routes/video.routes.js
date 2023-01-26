module.exports = (app) => {
  const videos = require("../controllers/video.controller.js");

  var router = require("express").Router();

  router.get("/", videos.getVideos);

  app.use("/api/video", router);
};
