var mongoClient = require("mongodb").MongoClient;

// Connect to the db
var dbUrl = "mongodb://localhost:27017";
const client = new mongoClient(dbUrl, { useUnifiedTopology: true });

client.connect((err, db) => {
  if (err) {
    console.log(err);
    return;
  } else {
    var db = client.db("users");
    console.log("Database selected!");

    db.collection("user", function (err, collection) {
      // A document in MongoDB is the same as a record in MySQL
      // creating a array of JSON objects
      // consider each JSON object as a document
      var user_data = [
        {
          userid: 1,
          email: "a@b.com",
          first_name: "user1",
          last_name: "user1",
          username: "test",
          contact: "9898989898",
          password: "test@123",
          role: "user",
          isLoggedIn: false,
          uuid: "",
          accesstoken: "",
          coupens: [
            {
              id: 101,
              discountValue: 101,
            },
            { id: 102, discountValue: 102 },
          ],
          bookingRequests: [
            {
              reference_number: 29783,
              coupon_code: 101,
              show_id: 1003,
              tickets: [1, 3],
            },
            {
              reference_number: 19009,
              coupon_code: 201,
              show_id: 1002,
              tickets: [1],
            },
          ],
        },
        {
          userid: 2,
          email: "p@q.com",
          first_name: "user2",
          last_name: "user2",
          username: "user",
          contact: "9898989898",
          password: "user@123",
          role: "admin",
          isLoggedIn: false,
          uuid: "",
          accesstoken: "",
          coupens: [
            {
              id: 103,
              discountValue: 103,
            },
            {
              id: 104,
              discountValue: 104,
            },
          ],
          bookingRequests: [
            {
              reference_number: 29783,
              coupon_code: 101,
              show_id: 1003,
              tickets: [1, 3],
            },
            {
              reference_number: 19009,
              coupon_code: 201,
              show_id: 1002,
              tickets: [1],
            },
          ],
        },
      ];

      collection.insertMany(user_data, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
      });
    });
  }
});
