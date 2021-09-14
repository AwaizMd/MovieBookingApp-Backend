// const db = require("./movie-app/models");
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
    
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });


//core imports
const http = require("http");
//app imports
const app = require("./app");

//port
const PORT = process.env.PORT || 8085;

const server = http.createServer(app); //create server

server.listen(PORT, () => {
  console.log(`🚀 server listening on port ${PORT}`);
});