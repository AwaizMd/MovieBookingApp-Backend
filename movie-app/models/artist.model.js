var mongoClient = require("mongodb").MongoClient;

// Connect to the db
var dbUrl = "mongodb://localhost:27017";
const client = new mongoClient(dbUrl, { useUnifiedTopology: true });

client.connect((err, db) => {
  if (err) {
    console.log(err);
    return;
  } else {
    var db = client.db("artists");
    console.log("Database selected!");

    db.collection("artist", function (err, collection) {
      // A document in MongoDB is the same as a record in MySQL
      // creating a array of JSON objects
      // consider each JSON object as a document
      var artist_data = [
        {
          artistid: 1,
          first_name: "amitabh",
          last_name: "bachchan",
          wiki_url: "https://en.wikipedia.org/wiki/Amitabh_Bachchan",
          profile_url:
            "https://wikibio.in/wp-content/uploads/2017/12/Amitabh-Bachchan.jpg",
          movies: [],
        },
        {
          artistid: 2,
          first_name: "nasiruddin",
          last_name: "shah",
          wiki_url: "https://en.wikipedia.org/wiki/Naseeruddin_Shah",
          profile_url:
            "https://wikibio.in/wp-content/uploads/2019/06/Naseeruddin-Shah.jpg",
          movies: [],
        },
        {
          artistid: 3,
          first_name: "rajkumar",
          last_name: "rao",
          wiki_url: "https://en.wikipedia.org/wiki/Rajkummar_Rao",
          profile_url:
            "https://i1.wp.com/wikifamouspeople.com/wp-content/uploads/2018/09/rajkumar-rao.jpg?fit=768%2C432&ssl=1",
          movies: [],
        },
        {
          artistid: 4,
          first_name: "shabana",
          last_name: "azmi",
          wiki_url: "https://en.wikipedia.org/wiki/Shabana_Azmi",
          profile_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Shabana_Azmi_SFU_honorary_degree_%28cropped%29.jpg/1200px-Shabana_Azmi_SFU_honorary_degree_%28cropped%29.jpg",
          movies: [],
        },
        {
          artistid: 5,
          first_name: "pankaj",
          last_name: "kapoor",
          wiki_url: "https://en.wikipedia.org/wiki/Pankaj_Kapur",
          profile_url:
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/Pankaj_Kapur.jpg",
          movies: [],
        },
      ];

      collection.insertMany(artist_data, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
      });
    });
  }
});
