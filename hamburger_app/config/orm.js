var connection = require("../config/connection.js");

// Object for all the SQL statement functions.
var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  insertOne: function(burger_name, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUE (?)";
    console.log(queryString);
    connection.query(queryString, burger_name, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
  updateOne: function(id, cb) {
    var queryString = "UPDATE burgers SET ? WHERE ?";
    console.log(queryString);
    connection.query(queryString, [{devoured: true}, {id: id}], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateTwo: function(id, cb) {
    var queryString = "UPDATE burgers SET ? WHERE ?";
    console.log(queryString);
    connection.query(queryString, [{devoured: false}, {id: id}], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

// Export the orm object for the model (burger.js).
module.exports = orm;
