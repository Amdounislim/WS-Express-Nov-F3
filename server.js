// console.log("hello")

// 1- import express
const express = require("express");

//2- init express
const app = express();

function logger(req, res, next) {
    // console.log("method :", req.method)
    // console.log("path :", req.url)
    console.table({ method: req.method, path: req.url });
    if (10<20) {
      next();
    } else {
      res.send("Oups, the request is blocked");
    }
  }

  app.use(logger)

//4- create your endpoints
app.get("/",logger, (req, res) => {
  res.send("Welcom to WS-Express");
});

app.get("/user",logger , (req, res) => {
  res.send("Welcom to user page");
});

// 5- Get the files using sendFile
// app.get("/", (req, res)=>{
//     res.sendFile(__dirname + "/public/index.html")
// })

// app.use(express.static(__dirname + "/public"))

//3- run server
const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`the server is running on port ${port}`);
});
