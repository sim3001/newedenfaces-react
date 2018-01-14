var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;


var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
  console.log(`Express server listening on port ${port}`);
});