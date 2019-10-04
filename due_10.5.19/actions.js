//arrays
var special = ['!','#','$','%','&','*','+','-','/',':',';','<','=','>','?','@','~'];
var number = [0,1,2,3,4,5,6,7,8,9];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//empty array to add arrays too
var arr = [];


//onclick the questions should pop
document.getElementById("make").addEventListener("click", function(){
var character = prompt("How many characters does your password need to be? (Between 8 and 128 characters)");
if (character>128 || character<8){
    alert("Please choose a number between 8-128")
}
else {var specialQ = confirm("Do you need a special character?");
    var numberQ = confirm("Do you need a number");
    var upperQ = confirm("Do you need UPPER case letters?");
    var lowerQ = confirm("Do you need lower case letters?");
};

//this function looks at the answers from the popups and adds the appropriate array to the empty arr
function array_maker (){ 
if (specialQ === true){
arr.push (special)
}

else if (numberQ === true){
    arr.push (number)
   
}
else if (upperQ === true){
    arr.push (upper)
   
}
else if (lowerQ === true){
    arr.push (lower)
   
}
else {
    alert("please choose at least one option")
}
};

//this function shuffles the empty arr and cycles through based on the number input by user
function password_generator(){
for (var i=0; i<character; i++){
    shuffle.arr   
}
//write to the textarea
document.getElementById("password").value = password_generator();

//copy button function
document.getElementById("copy").addEventListener("click", function(){
    var copyText = document.getElementById("copy");

    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }
