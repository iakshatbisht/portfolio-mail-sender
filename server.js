const { json } = require('express');
var http = require('http');
const emailSender = require("./index")
var server = http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (req.method === "GET") {
     console.log("HEhheee");
    } else if (req.method === "POST") {
      var options = {};
      var body = "";
      req.on('data', chunk => {
        console.log(`${chunk}`);
        body += chunk;
      })
      req.on('end', () => {
        console.log("finished");
        options = JSON.parse(body);
        emailSender(options);
        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(JSON.stringify({
          "statusCode": "200",
          "message": "Email Sent Successfully!",
          "body": body.toString()
        }));
      })
    }

}).listen(process.env.PORT || 2525);