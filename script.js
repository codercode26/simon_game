var givenColors = ["green","red","yellow","blue"];

var num=0;
var started=false;
var pattern=[];
var userPattern=[];
$(document).keypress(function() {
    if(!started){
      $("#title").text("Level" +num);
    }
     nextSequence();
     started=true;
});



$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userPattern.push(userChosenColour);

  sound(userChosenColour);
  animateBtn(userChosenColour);

  checkAnswer(userPattern.length-1);
});


function checkAnswer(currentLevel) {

    if (pattern[currentLevel] === userPattern[currentLevel]) {

      console.log("success");

      if (userPattern.length === pattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    }
     else {

      console.log("wrong");
      var wr="wrong";
      sound(wr);

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#title").text("Game Over, Press Any Key to Restart");
      startOver();
    }

}
function nextSequence(){
  userPattern=[];
  num++;
  $("#title").text("Level " + num);
  var randomNumber=Math.floor(Math.random() * 4);
  var guess=givenColors[randomNumber];
  pattern.push(guess);
  $("#"+guess).fadeIn(100).fadeOut(100).fadeIn(100);
  sound(guess);
}
function sound(gues){
  var audioElement=new Audio(gues+ ".mp3");
  audioElement.play();
}

function animateBtn(gues){
  $("#"+gues).addClass("pressed");
  setTimeout(function (){
    $("#"+gues).removeClass("pressed");
  },100)
}


function startOver(){
  level=0;
  pattern=[];
  started=false;
}
