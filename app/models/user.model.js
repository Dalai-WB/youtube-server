module.exports = (mongoose) => {
  const User = mongoose.model(
    "user",
    mongoose.Schema(
      {
        profileImage: String,
        profileId: { type: String, unique: true, required: true },
        firstName: String,
        lastName: String,
        email: { type: String, unique: true, required: true },
        password: String,
      },
      { timestamps: true }
    )
  );

  return User;
};
