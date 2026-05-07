var http = require("http");
var data = require("./data.js");

// const Object = {
//   name: "John",
//   age: 30,
// };

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });

  res.write(JSON.stringify({ name: "John", age: 30 }));
  //   res.write(JSON.stringify(Object));
  //   res.write(JSON.stringify(data));
  res.end();
});

server.listen(3000);
