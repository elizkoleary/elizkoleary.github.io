//arrays
var special = ['!', '#', '$', '%', '&', '*', '+', '-', '/', ':', ';', '<', '=', '>', '?', '@', '~'];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//empty array to add arrays too
var arr = [];

var specialQ;
var numberQ;
var upperQ;
var lowerQ;
var character;

//this function looks at the answers from the popups and adds the appropriate array to the empty arr
function array_maker() {
    if (specialQ === true) {
        arr = arr.concat(special)
    }

    if (numberQ === true) {
        arr = arr.concat(number)

    }
    if (upperQ === true) {
        arr = arr.concat(upper)

    }
    if (lowerQ === true) {
        arr = arr.concat(lower)

    }
    if (specialQ === false && numberQ === false && upperQ === false && lowerQ === false) {
        alert("please choose at least one option")
    }
};

//this function shuffles the empty arr and cycles through based on the number input by user
function password_generator() {
    var password = ""
    for (var i = 0; i < character; i++) {
        var random = arr[Math.floor(Math.random() * arr.length)];
        password = password + random;
    }
    //write to the textarea
    document.getElementById("password").value = password;
}
//onclick the questions should pop
document.getElementById("make").addEventListener("click", function () {
    arr = []
    character = parseInt(prompt("How many characters does your password need to be? (Between 8 and 128 characters)"));
    if (character > 128 || character < 8) {
        alert("Please choose a number between 8-128")
    }
    else {
        specialQ = confirm("Do you need a special character?");
        numberQ = confirm("Do you need a number");
        upperQ = confirm("Do you need UPPER case letters?");
        lowerQ = confirm("Do you need lower case letters?");
        array_maker()
        password_generator();
    };
});

//copy button function
document.getElementById("copy").addEventListener("click", function () {
    var copyText = document.getElementById("password");

    /* Select the text field */

    /* Copy the text inside the text field */
    document.execCommand("password");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
})