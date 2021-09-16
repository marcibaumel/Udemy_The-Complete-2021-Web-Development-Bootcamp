/*
for(let i = 0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";
    });
}

$("h1").on("mouseover", function(){
    $("h1").css("color", "yellow");
});

$("h1").before("<button>New button</button>")
*/

$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity : 0.5});
});
