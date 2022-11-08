var buttonColours = ["red","blue","yellow","green"];
var randomChosenColour;
var gamePattern =[];
var randomNumber;
var userChosenColour;
var userPattern=[];
var i=0;
var n=0;
var m=0;


$(document).keypress( function (){
  userPattern =[];
  gamePattern =[];
  m=0;
  i=0;
  n=0;
  randomNumber = Math.floor(Math.random()*4);
  randomChosenColour = buttonColours[randomNumber];
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  gamePattern.push(randomChosenColour);
  $("h1").text("Level 1");
  makeSound(randomChosenColour);
});



$(".btn").click(function() {
     userChosenColour = event.srcElement.id
     userPattern.push(userChosenColour);
     makeSound(userChosenColour);
     if (userPattern.length <= gamePattern.length){
       if (userPattern[n] !== gamePattern[n]){
           $("h1").text("Game Over Press Any Key to Restart");
           m=-1;
       }
       n++;
     }
     if (userPattern.length == gamePattern.length && m !=-1){
              randomNumber = Math.floor(Math.random()*4);
              randomChosenColour = buttonColours[randomNumber];
              $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
              gamePattern.push(randomChosenColour);
              makeSound(randomChosenColour);
              $("h1").text("level "+(i+2));
              i++;
              console.log(gamePattern);
              userPattern =[];
              n=0;
            }
});










function makeSound(key) {
switch (key) {
  case "red":
    var red = new Audio("sounds/red.mp3");
    red.play();
    break;

  case "green":
    var tom2 = new Audio("sounds/green.mp3");
    tom2.play();
    break;

  case "yellow":
    var tom3 = new Audio('sounds/yellow.mp3');
    tom3.play();
    break;

  case "blue":
    var tom4 = new Audio('sounds/blue.mp3');
    tom4.play();
    break;
  }
}
