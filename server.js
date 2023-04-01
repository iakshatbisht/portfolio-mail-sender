const { json } = require('express');
var http = require('http');
const emailSender = require("./index")
var server = http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, X-Requested-With, Content-Type, locale, Accept");
  res.setHeader("Access-Control-Allow-Credentials", true); // Required for cookies, authorization headers with HTTPS
  res.setHeader("Access-Control-Allow-Methods", "POST, GET OPTIONS");
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
        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify({
          "statusCode": "200",
          "message": "Email Sent Successfully!",
          "body": body.toString()
        }));
      })
    }
    console.log(process.env.PORT);
}).listen(process.env.PORT || 2525);