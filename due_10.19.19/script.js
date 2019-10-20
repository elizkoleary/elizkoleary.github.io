var now = moment();
$("#currentDay").text(now.format('dddd, MMMM Do YYYY'));
$(".ninehour").text(moment().format("9:" + "00"))
$(".tenhour").text(moment().format("10:" + "00"))
$(".elevenhour").text(moment().format("11:" + "00"))
$(".twelvehour").text(moment().format("12:" + "00"))
$(".thirteenhour").text(moment().format("13:" + "00"))
$(".fourteenhour").text(moment().format("14:" + "00"))
$(".fifteenhour").text(moment().format("15:" + "00"))
$(".sixteenhour").text(moment().format("16:" + "00"))
$(".seventeenhour").text(moment().format("17:" + "00"))

if (now < $(".hour").val()) {
    $("textarea").addClass("future")
}
else if (now > $(".hour").val()) {
    $("textarea").addClass("past")
}
else (now === $(".hour").val()); {
    $("textarea").addClass("present")
}

$(".row").on("click", ".saveBtn", function () {
    var key = $(this).data("time")
    console.log(key)
    var textarea = $("textarea." + key)
    var value = textarea.val().trim()
    console.log(value)
    localStorage.setItem(key, value)
})

$(document).ready(function () {
    var keys = Object.keys(localStorage)
    console.log(keys)
    for (var i = 0; i < keys.length; i++) {
        var item = localStorage.getItem(keys[i])
        $("textarea." + keys[i]).text(item)

    }
});