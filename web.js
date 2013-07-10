var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  fs.readFileSync('index.html', 'utf8', function (err, data) {
  if (err) throw err;
  console.log("aqui");
  var buffer = new Buffer(data,"utf8");

  response.send(buffer.toString("utf8"));
}
);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
