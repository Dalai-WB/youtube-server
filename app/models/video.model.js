module.exports = (mongoose) => {
  const Video = mongoose.model(
    "video",
    mongoose.Schema(
      {
        cartId: { type: Number, unique: true },
        videoURL: String,
        videoImage: String,
        videoTitle: String,
        channelImage: String,
        channelName: String,
        views: Number,
        ago: String,
        time: String,
        like: Number,
        subscribe: Number,
        keyWords: String,
        comments: [],
        explore: String,
      },
      { timestamps: true }
    )
  );

  return Video;
};
