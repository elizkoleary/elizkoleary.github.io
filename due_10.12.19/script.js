var sec = 60;
var timer;
var userscore = {}
$(document).on("click", "#startbutton", function () {
  timer = setInterval(function () {
    $('#seconds').text(--sec);
    if (sec == -1) {
      $('#seconds').fadeOut('slow');
      clearInterval(timer);
    }
  }, 1000);
  $("#instructions").css("display", "none")
  $("#q1").css("display", "block")
})

$(document).on("click", ".q1incorrect", function () {
  $("#q1").css("display", "none")
  $("#q2").css("display", "block")
  alert("Sorry, that was incorrect")
})
$(document).on("click", ".q1correct", function () {
  $("#q1").css("display", "none")
  $("#q2").css("display", "block")
  alert("CORRECT!!")
})

$(document).on("click", ".q2incorrect", function () {
  $("#q2").css("display", "none")
  $("#q3").css("display", "block")
  alert("Sorry, that was incorrect")
})
$(document).on("click", ".q2correct", function () {
  $("#q2").css("display", "none")
  $("#q3").css("display", "block")
  alert("CORRECT!!")
})

$(document).on("click", ".q3incorrect", function () {
  $("#q3").css("display", "none")
  $("#q4").css("display", "block")
  alert("Sorry, that was incorrect")
})
$(document).on("click", ".q3correct", function () {
  $("#q3").css("display", "none")
  $("#q4").css("display", "block")
  alert("CORRECT!!")
})
$(document).on("click", ".q4incorrect", function () {
  $("#q4").css("display", "none")
  $("#q5").css("display", "block")
  alert("Sorry, that was incorrect")
})
$(document).on("click", ".q4correct", function () {
  $("#q4").css("display", "none")
  $("#q5").css("display", "block")
  alert("CORRECT!!")
})
$(document).on("click", ".q5incorrect", function () {
  $("#q5").css("display", "none")
  $("#finished").css("display", "block")
  userscore.time = sec;
  clearInterval(timer)
  alert("Sorry, that was incorrect")
  $("#scoreis").text(userscore.time)

})
$(document).on("click", ".q5correct", function () {
  $("#q5").css("display", "none")
  $("#finished").css("display", "block")
  userscore.time = sec;
  clearInterval(timer)
  alert("CORRECT!!")
  $("#scoreis").text(userscore.time)
})
$(document).on("click", "#initialsubmit", function () {
  var initials = $(".form-control").val()
  userscore.name = initials
  localStorage.setItem(userscore.name,JSON.stringify(userscore));
  // var place = place++
  // $("#place").text (userscore.place)
  $("#initials").text(userscore.name)
  $(".score").text(userscore.time)
  $("#finished").css("display", "none")
  $("#highscore").css("display", "block")
})
$(document).on("click", "#scoreview", function () {
  $("#highscore").css("display", "block")
  $("#instructions").css("display", "none")
})
$(document).on("click", "#goBack", function () {
  $("#highscore").css("display", "none")
  $("#instructions").css("display", "block")
})
// $(document).on("click", "#clearScores", function () {
//   clear()
// })

