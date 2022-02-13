const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmiCalculator.html", function(req, res){
    var height = Number(req.body.height)/100;
    var weight = Number(req.body.weight);
    var bmi= weight/(height*height);
    res.send("Your bmi= "+bmi);
})

app.listen(3000, function(){
    console.log("Server is running on 3000 port")
})