var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3306;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

