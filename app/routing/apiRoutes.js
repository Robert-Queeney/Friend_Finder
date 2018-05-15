var friendData = require("../data/friends");

// app.post("/", function(req, res) {
  
//     connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.wish], function(err, result) {
//       if (err) {
//         throw err;
//       }

module.exports = function(app){



  app.get('api/friends', function (req, res){
      res.json(friendData); 
  })

  app.post("/api/friends", function(req, res) {
    res,json(friendData);
  })
}

