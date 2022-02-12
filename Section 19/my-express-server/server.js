//jshint esversion:6

const { response } = require("express");
const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello</h1>")
});

app.get("/contact", function(req, res){
    res.send("Contect me at: marci@email.com")
})

app.get("/about", function(req,res){
    res.send("About me: my name is Marci")
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});