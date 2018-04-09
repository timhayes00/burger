// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers_db", function(res) {
      cb(res);
    });
  },
  insertOne: function(burgerName, condition, cb) {
    orm.insertOne("burgers_db", burgerName, condition, function(res) {
      cb(res);
    });
  },
  updateOne: function(condition, id, cb) {
    orm.delete("burgers_db", condition, id, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
