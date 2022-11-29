const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extends : true}));
app.use(express.static("public"));







app.listen(port, function(){
    console.log("server is running");
});