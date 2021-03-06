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

if (now < $(".ninehour").val()) {
    $(".nine").addClass("future")
}
else if (now > $(".ninehour").val()) {
    $(".nine").addClass("past")
}
else if (now === $(".ninehour").val()) {
    $(".nine").addClass("present")
}
if (now < $(".tenhour").val()) {
    $(".ten").addClass("future")
}
else if (now > $(".tenhour").val()) {
    $(".ten").addClass("past")
}
else  if (now === $(".tenhour").val()) {
    $(".ten").addClass("present")
}
if (now < $(".elevenhour").val()) {
    $(".eleven").addClass("future")
}
else if (now > $(".elevenhour").val()) {
    $(".eleven").addClass("past")
}
else if(now === $(".elevenhour").val()) {
    $(".eleven").addClass("present")
}
if (now < $(".twelvehour").val()) {
    $(".twelve").addClass("future")
}
else if (now > $(".twelvehour").val()) {
    $(".twelve").addClass("past")
}
else if (now === $(".twelvehour").val()) {
    $(".twelve").addClass("present")
}
if (now < $(".thirteenhour").val()) {
    $(".thirteen").addClass("future")
}
else if (now > $(".thirteenhour").val()) {
    $(".thirteen").addClass("past")
}
else if (now === $(".thirteenhour").val())   {
    $(".thirteen").addClass("present")
}
if (now < $(".fourteenhour").val()) {
    $(".fourteen").addClass("future")
}
else if (now > $(".fourteenhour").val()) {
    $(".fourteen").addClass("past")
}
else if(now === $(".fourteenhour").val())   {
    $(".fourteen").addClass("present")
}
if (now < $(".fifteenhour").val()) {
    $(".fifteen").addClass("future")
}
else if (now > $(".fifteenhour").val()) {
    $(".fifteen").addClass("past")
}
else if (now === $(".fifteenhour").val())   {
    $(".fifteen").addClass("present")
}
if (now < $(".sixteenhour").val()) {
    $(".sixteen").addClass("future")
}
else if (now > $(".sixteenhour").val()) {
    $(".sixteen").addClass("past")
}
else if (now === $(".sixteenhour").val())   {
    $(".sixteen").addClass("present")
}
if (now < $(".seventeenhour").val()) {
    $(".seventeen").addClass("future")
}
else if (now > $(".seventeenhour").val()) {
    $(".seventeen").addClass("past")
}
else if (now === $(".seventeenhour").val())   {
    $(".seventeen").addClass("present")
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