const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = ""

    const days = ["Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    day = days[currentDay-1]

    res.render('list', {kindOfDay : day})
});

app.listen(3000, function(req,res){
    console.log("App is running on port 3000")
});