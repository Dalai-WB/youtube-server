module.exports = (app) => {
  const videos = require("../controllers/video.controller.js");

  var router = require("express").Router();

  router.get("/", videos.getVideos);

  router.get("/shorts", videos.getShorts);

  router.put("/edit/:id", videos.update);

  app.use("/api/video", router);
};
