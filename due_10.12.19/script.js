
$(document).on("click", "#startbutton",  function() {
  var sec = 60
  var timer = setInterval(function() {
     $('#seconds').text(sec--);
     if (sec == -1) {
        $('#seconds').fadeOut('slow');
        clearInterval(timer);
     }
  }, 1000);
  $("#instructions").css ("display", "none")
  $("#q1").css ("display", "block")
  })

  $(document).on("click", ".q1incorrect",  function() {
    $("#q1").css ("display", "none")
    $("#q2").css ("display", "block")
    alert("Sorry, that was incorrect")
    })
  $(document).on("click", ".q1correct",  function() {
    $("#q1").css ("display", "none")
    $("#q2").css ("display", "block")
    alert("CORRECT!!")
  })
  
  $(document).on("click", ".q2incorrect",  function() {
    $("#q2").css ("display", "none")
    $("#q3").css ("display", "block")
    alert("Sorry, that was incorrect")
    })
  $(document).on("click", ".q2correct",  function() {
    $("#q2").css ("display", "none")
    $("#q3").css ("display", "block")
    alert("CORRECT!!")
  })
  
  $(document).on("click", ".q3incorrect",  function() {
    $("#q3").css ("display", "none")
    $("#q4").css ("display", "block")
    alert("Sorry, that was incorrect")
    })
  $(document).on("click", ".q3correct",  function() {
    $("#q3").css ("display", "none")
    $("#q4").css ("display", "block")
    alert("CORRECT!!")
  })
  $(document).on("click", ".q4incorrect",  function() {
    $("#q4").css ("display", "none")
    $("#q5").css ("display", "block")
    alert("Sorry, that was incorrect")
    })
  $(document).on("click", ".q4correct",  function() {
    $("#q4").css ("display", "none")
    $("#q5").css ("display", "block")
    alert("CORRECT!!")
  })
  $(document).on("click", ".q5incorrect",  function() {
    $("#q5").css ("display", "none")
    $("#finished").css ("display", "block")
    alert("Sorry, that was incorrect")
    })
  $(document).on("click", ".q5correct",  function() {
    $("#q5").css ("display", "none")
    $("#finished").css ("display", "block")
    alert("CORRECT!!")
  })
  $(document).on("click", "#initialsubmit",  function() {
    $("#finished").css ("display", "none")
    $("#highscore").css ("display", "block")
  })
  $(document).on("click", "#score",  function() {
    $("#highscore").css ("display", "block")
    $("#instructions").css ("display", "none")
  })


