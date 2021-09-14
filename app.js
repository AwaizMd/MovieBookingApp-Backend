//external imports
const express = require("express");
const cors = require("cors");
//local imports
const db = require("./movie-app/models");
//import routes
const genreRouter = require("./movie-app/routes/genre.routes");
const artistRouter = require("./movie-app/routes/artist.routes");
const movieRouter = require("./movie-app/routes/movie.routes");
//constants
const app = express();

//middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//db connection
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

//routing
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Upgrad Movie booking application development.",
  });
});

app.use("/api/genres", genreRouter);
app.use("/api/artists", artistRouter);
app.use("/api/movies", movieRouter);


module.exports = app;  