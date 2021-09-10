var mongoClient = require("mongodb").MongoClient;

// Connect to the db
var dbUrl = "mongodb://localhost:27017";
const client = new mongoClient(dbUrl, { useUnifiedTopology: true });

client.connect((err, db) => {
  if (err) {
    console.log(err);
    return;
  } else {
    var db = client.db("genres");
    console.log("Database selected!");

    db.collection("genre", function (err, collection) {
      // A document in MongoDB is the same as a record in MySQL
      // creating a array of JSON objects
      // consider each JSON object as a document
      var genre_data = [
        { genreid: 1, genre: "comedy" },
        { genreid: 2, genre: "drama" },
        { genreid: 3, genre: "action" },
        { genreid: 4, genre: "romance" },
        { genreid: 5, genre: "horror" },
      ];

      collection.insertMany(genre_data, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
      });
    });
  }
});
