const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.";

const aboutContent = "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout";

const contactContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout";

const app = express();

const port = 3000;

const totalPost = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("home", {
        startingContent : homeStartingContent,
        posts : totalPost
    });
});

app.get("/about", function(req, res){
    res.render("about", {startingAbout :aboutContent});
});


app.get("/contact", function(req, res){
    res.render("contact", {startingContact :contactContent});
});

app.get("/compose", function(req, res){
    res.render("compose");
});

app.post("/compose", function(req,res){
    const post = {
        title : req.body.postTitle,
        content : req.body.postContent
    };
    totalPost.push(post);
    res.redirect("/");
})


app.listen(port, function(){
    console.log("server is running");
});