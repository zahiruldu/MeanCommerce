var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Welcome to Mean Commerce');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('MeanCommerce listening at http://%s:%s', host, port);
});