//<i class="fas fa-flag">
//document.getElementById("msg").innerHTML = "new";

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var data = document.querySelectorAll("img");

data[0].setAttribute("src", 'images/dice'+randomNumber1+'.png');
data[1].setAttribute("src", 'images/dice'+randomNumber2+'.png');

console.log(data[0]);
console.log(randomNumber1);

if(randomNumber1>randomNumber2){
    document.getElementById("msg").innerHTML = '<i class="fas fa-flag"></i> Player One Wins';
}
else if(randomNumber1<randomNumber2){
    document.getElementById("msg").innerHTML = 'Player Two Wins <i class="fas fa-flag"></i>';
}
else{
    document.getElementById("msg").innerHTML = 'Draw!';
}
