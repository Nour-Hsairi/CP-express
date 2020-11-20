// import and init
const express = require("express");
const app= express();
const path = require("path");
const validateTime = require("./Middleware/Timer");
app.use(express.json());
//Run server on 5000
const port=process.env.PORT||5000 ;
app.use(validateTime);
app.use(express.static("public"));
app.listen (port, (err) => {
  err? console.log(err) : console.log(`the server is runnig on ${port}`);
});


