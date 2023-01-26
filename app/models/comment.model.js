module.exports = (mongoose) => {
  const Comment = mongoose.model(
    "comment",
    mongoose.Schema(
      {
        profileImage: String,
        userName: String,
        ago: String,
        comment: String,
        like: Number,
        dislike: Number,
        replies: [],
      },
      { timestamps: true }
    )
  );

  return Comment;
};
