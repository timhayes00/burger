var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 8080,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err){
        console.log("error connecting : " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId + " on port " + port);
});

module.exports = connection;