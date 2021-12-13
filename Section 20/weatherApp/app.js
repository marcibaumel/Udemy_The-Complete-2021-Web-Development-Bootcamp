const express = require("express");
const https = require("https")
const app = express();

app.get("/", function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=567ebce00948424e603dc2cc17cf33d9&units=metric";
    
    https.get(url, function(response){
        console.log(response.statusCode);
    })

    res.send("Server is running!")
})


app.listen(3000, function(){
    console.log("Server is runing on port 3000.")
})