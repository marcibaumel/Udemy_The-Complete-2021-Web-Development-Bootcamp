//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req,res){
    res.sendFile(__dirname+"/signUpPage.html");
})


app.post("/", function(req,res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    console.log(firstName, lastName, email);
})

app.listen(3000, function(){
    console.log("Server is running: 3000");
})


//API KEY
//02a49bc0c0d09478b9400f9c419668f8-us20