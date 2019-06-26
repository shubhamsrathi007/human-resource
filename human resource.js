var express = require('express');
var app = express();
var humanController=function (req, res) {
  console.log("hi HR rest api");
  var customers=[
            {firstName:'shubham',lastName:'rathi',age:43},
            {firstName:'gaurav',lastName:'sonavane',age:43},
            {firstName:'sahil',lastName:'wagh',age:28},
            {firstName:'aniket',lastName:'siree',age:25},
            
      ];
  res.send(humanresource);
};


app.get('/humanresource',humanController );

var server = app.listen(8089, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8089", host, port)
})