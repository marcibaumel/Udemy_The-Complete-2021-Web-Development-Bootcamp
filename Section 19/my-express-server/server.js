const express = require("express");

const app = express();

app.get("/", function(req, res){
    //console.log(req);
    res.send("<h1>Hello World</h1>");
})

app.get("/contact", function(req, res){
    res.send("Contact me: Marci");
});

app.get("/bio", function(req, res){
    res.send("It's my site pls!");
});

app.get("/hobby", function(req, res){
    res.send("It's my site of hobbys!");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
