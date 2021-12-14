const express = require("express");
const https = require("https")
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function (req, res) {  
    const keyid = "567ebce00948424e603dc2cc17cf33d9";
    const cityName = req.body.cityName;
    //const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" +  cityName +  "&appid=" +keyid + "&units=metric";


    https.get(url, function(response){
    console.log(response.statusCode);
    response.on("data", function(data){
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const weatherDes = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imgUrl = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
        res.write("<p>The weather is currently: " + weatherDes+"</p>")
        res.write("<h1>The tempature in "+cityName+" is " +temp+ " in Celcius.</h1>");
        res.write("<img src="+imgUrl+">")
        res.send();
    })
})


    console.log("Post recived");
})




app.listen(3000, function(){
    console.log("Server is runing on port 3000.")
})