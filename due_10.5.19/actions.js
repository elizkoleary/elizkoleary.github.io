//this should fire once the button id=make is clicked//
// function prompt(){
var length = prompt("How many characters does your password need to be? (Between 8 and 128 characters)")
var specialChar = confirm("Do you need a special character?")
var number = confirm("Do you need a number")
var upper = confirm("Do you need UPPER case letters?")
var lower = confirm("Do you need lower case letters?")
// }
//need to create responses if person chooses wrong number

// these are the arrays i think i need//
// var arrspecialChar = ['!','#','$','%','&','(',')','*','+','-','/',':',';','<','=','>','?','@','[','^','{','|','}','~'];
// var arrnumber = [0,1,2,3,4,5,6,7,8,9];
// var arrupper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// var arrlower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//answers yes to all questions
var allchar = ['!','#','$','%','&','(',')','*','+','-','/',':',';','<','=','>','?','@','[','^','{','|','}','~',0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// answers specialchar no, number yes, upper yes, lower yes
var nospchar = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// answers specialchar no, number no,upper yes, lower yes
var allletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// answers specialchar no, number no,upper no, lower yes or no
var alllowletters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// i want to create a for loop to repeat based on var length
// create a string use math.random and arrchar for each run through the for loop

function password(){
for (var i=0; i<length; i++)
var allchar=Math.floor(Math.random())
}

