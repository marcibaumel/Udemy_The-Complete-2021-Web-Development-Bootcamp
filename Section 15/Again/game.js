var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function(){
    if (!started) {
        nextSequence();
        $("#level-title").text("Level " + level);
        started = true;
    }
});

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    console.log(userClickedPattern);
});


function nextSequence(){
    userClickedPattern = [];
    level++;
    started = true;
    let randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
  
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
  
      } else {
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");},200
        );
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
      }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}



function playSound(name){
    var sound = new Audio("/sounds/"+name+".mp3");
    sound.play();
}

function animatePress(name){
    $("#"+name).addClass("pressed").delay(100).queue(function(next){
        $(this).removeClass('pressed');
        next();})
}

function animatePress2(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }