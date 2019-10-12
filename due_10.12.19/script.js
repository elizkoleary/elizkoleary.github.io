var sec = 60;
var timer;
var userscore = {}
function scoreCheck(currentScore) {
  if (!highScoreList || !highScoreList.length){
    highScoreList.push(currentScore)
  }
  else{
  for (var i = 0; i < highScoreList.length; i++) {
    if (currentScore.time > highScoreList[i].time) {
      highScoreList.splice(i, 0, currentScore);
      return
    }
  }
}
}

if (localStorage.getItem('array')) {
  var highScoreList = JSON.parse(localStorage.getItem("array"))
  console.log(highScoreList)
}
else {
  var highScoreList = []
}
$(document).on("click", "#startbutton", function () {
  timer = setInterval(function () {
    sec--;
    $('#seconds').text(sec);
    if (sec == 0) {
      $('#seconds').fadeOut('slow');
      clearInterval(timer);
    }
  }, 1000);
  $("#instructions").css("display", "none")
  $("#q1").css("display", "block")
})

$(document).on("click", ".q1incorrect", function () {
  sec = sec - 10;
  $("#q1").css("display", "none")
  $("#q2").css("display", "block")
  $("#answer2").text("Sorry, that was incorrect")
})
$(document).on("click", ".q1correct", function () {
  $("#q1").css("display", "none")
  $("#q2").css("display", "block")
  $("#answer2").text("CORRECT!!")
})

$(document).on("click", ".q2incorrect", function () {
  sec = sec - 10;
  $("#q2").css("display", "none")
  $("#q3").css("display", "block")
  $("#answer3").text("Sorry, that was incorrect")
})
$(document).on("click", ".q2correct", function () {
  $("#q2").css("display", "none")
  $("#q3").css("display", "block")
  $("#answer3").text("CORRECT!!")
})

$(document).on("click", ".q3incorrect", function () {
  sec = sec - 10;
  $("#q3").css("display", "none")
  $("#q4").css("display", "block")
  $("#answer4").text("Sorry, that was incorrect")
})
$(document).on("click", ".q3correct", function () {
  $("#q3").css("display", "none")
  $("#q4").css("display", "block")
  $("#answer4").text("CORRECT!!")
})
$(document).on("click", ".q4incorrect", function () {
  sec = sec - 10;
  $("#q4").css("display", "none")
  $("#q5").css("display", "block")
  $("#answer5").text("Sorry, that was incorrect")
})
$(document).on("click", ".q4correct", function () {
  $("#q4").css("display", "none")
  $("#q5").css("display", "block")
  $("#answer5").text("CORRECT!!")
})
$(document).on("click", ".q5incorrect", function () {
  sec = sec - 10;
  $("#q5").css("display", "none")
  $("#finished").css("display", "block")
  userscore.time = sec;
  clearInterval(timer)
  $("#scoreis").text(userscore.time)

})
$(document).on("click", ".q5correct", function () {
  $("#q5").css("display", "none")
  $("#finished").css("display", "block")
  userscore.time = sec;
  clearInterval(timer)
  $("#scoreis").text(userscore.time)
})
$(document).on("click", "#initialsubmit", function () {
  var initials = $(".form-control").val()
  userscore.name = initials
  scoreCheck(userscore)
  localStorage.setItem('array', JSON.stringify(highScoreList));
  for (var i = 0; i < highScoreList.length; i++) {
    var place = userscore[i]
    userscore.place=place
    var element = $("<div>")
    var element2 = $("<div>")
    var element3=$("<div>")
    element.text(highScoreList[i].name)
    element2.text(highScoreList[i].time)
    element3.text(highScoreList[i].place)
    $("#initials").append(element);
    $(".score").append(element2);
    $("#place").append(element3);


  } 
 
  $("#finished").css("display", "none")
  $("#highscore").css("display", "block")
})
$(document).on("click", "#scoreview", function () {
  $("#highscore").css("display", "block")
  $("#instructions").css("display", "none")
})
$(document).on("click", "#goBack", function () {
  window.location.reload();
  $("#highscore").css("display", "none")
  $("#instructions").css("display", "block")
})
$(document).on("click", "#clearScores", function () {
  $("#initials").remove();
  $(".score").remove();

})

