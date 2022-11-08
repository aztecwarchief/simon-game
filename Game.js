
// variables

var buttonColours = ["red","blue","yellow","green"];
var randomChosenColour;
var gamePattern =[];
var randomNumber;
var userChosenColour;
var userPattern=[];
var i=0;
var n=0;
var m=0;

// key press function

$(document).keypress( function (){
  userPattern =[];
  gamePattern =[];
  m=0;
  i=0;
  n=0;
  randomNumber = Math.floor(Math.random()*4);
  randomChosenColour = buttonColours[randomNumber];
  click(randomChosenColour);
  gamePattern.push(randomChosenColour);
  $("h1").text("Level 0");
  makeSound(randomChosenColour);
});

// click function

$(".btn").click(function() {
     userChosenColour = event.srcElement.id
     userPattern.push(userChosenColour);
     makeSound(userChosenColour);
     animatePress(userChosenColour);
     if (userPattern.length <= gamePattern.length){
       if (userPattern[n] !== gamePattern[n]){
           $("h1").text("Game Over Press Any Key to Restart");
           m=-1;
           makeSound("wrong");
           gameOver();
       }
       n++;
     }
     if (userPattern.length == gamePattern.length && m !=-1){
              randomNumber = Math.floor(Math.random()*4);
              randomChosenColour = buttonColours[randomNumber];
              click(randomChosenColour);
              gamePattern.push(randomChosenColour);
              makeSound(randomChosenColour);
              $("h1").text("level "+(i+1));
              i++;
              userPattern =[];
              n=0;
            }
});

// sound function

function makeSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
  }

// animation
function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function() {
    $("#"+currentColor).removeClass('pressed');
}, 100);
}

function gameOver(){
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass('game-over');
}, 100);
}

function click(currentColor){
  setTimeout(function(){
    $("#"+currentColor).fadeOut(100).fadeIn(100);
  },1000);
}
