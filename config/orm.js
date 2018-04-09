var connection = require("./connection.js");

// Object Relational Mapper (ORM)
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(table, burgerName, cb) {
    var queryString = "INSERT INTO " + table + " (" + burgerName + ", false);";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, objColVals, id, cb) {
      var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + id + ";"
    console.log(queryString)
    connection.query(queryString, function(err, result){
        if (err) throw err;
        cb(result);
    })
  }
};

module.exports = orm;
