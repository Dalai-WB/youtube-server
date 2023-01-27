const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./user.model.js")(mongoose);
db.videos = require("./video.model.js")(mongoose);
db.comment = require("./comment.model.js")(mongoose);
db.short = require("./short.model.js")(mongoose);

module.exports = db;
