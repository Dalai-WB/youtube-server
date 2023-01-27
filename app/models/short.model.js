module.exports = (mongoose) => {
    const Short = mongoose.model(
      "short",
      mongoose.Schema(
        {
          shortLink: String,
          like: Number,
          comment: Number,
          channelImage  : String,
        },
        { timestamps: true }
      )
    );
  
    return Short;
  };
  