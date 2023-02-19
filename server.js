const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/about.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/about.html"));
});

app.all("*", (req, res) => [
  res.status(404).sendFile(path.join(__dirname, "/404.html")),
]);

app.listen(8080);

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   let path = req.url === "/" ? "/index.html" : req.url;
//   fs.readFile(__dirname + path, (err, content) => {
//     if (err) {
//       if (err.code === "ENOENT") {
//         console.log("we aint got it");
//         fs.readFile(__dirname + "/404.html", (err, content) => {
//           if (err) throw err;
//           res.end(content);
//         });
//       }
//     } else {
//       res.end(content);
//     }
//   });
// });

// server.listen(8080, () => {
//   console.log(`Server running at : 8080`);
// });
