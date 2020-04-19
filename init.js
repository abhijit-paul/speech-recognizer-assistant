var express = require('express');
var app = express();
var path = require("path");
var Knwl = require("./node_modules/knwl.js/knwl.js");

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.post('/parse', function (req, res) {
  var knwlInstance = new Knwl('english');
  res.send('hello world')
});
app.use(express.static('./'));
app.listen(3000);
