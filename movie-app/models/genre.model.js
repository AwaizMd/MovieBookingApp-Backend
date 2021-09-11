module.exports = (mongoose) => {
  const Genre = mongoose.model(
    "genre",
    mongoose.Schema({
      genreid: {
        type: Number,
        required: true,
        unique: true,
      },
      genre: {
        type: String,
        required: true,
      },
    })
  );
  Genre.insertMany([
    { genreid: 1, genre: "comedy" },
    { genreid: 2, genre: "drama" },
    { genreid: 3, genre: "action" },
    { genreid: 4, genre: "romance" },
    { genreid: 5, genre: "horror" },
  ]);
  return Genre;
};
