document.getElementById("make").onclick = function() { 
var character = prompt("How many characters does your password need to be? (Between 8 and 128 characters)");
var specialchar = confirm("Do you need a special character?");
var number = confirm("Do you need a number");
var upper = confirm("Do you need UPPER case letters?");
var lower = confirm("Do you need lower case letters?");
};

function password_generator( len ) {
    var length = (len)?(len):(10);
    var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = "";
    var character = "";
    var crunch = true;
    while( password.length<length ) {
        entity1 = Math.ceil(string.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        hold = string.charAt( entity1 );
        hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,len);
}
document.getElementById("password").value = password_generator();
// console.log( password_generator() );




//need to create responses if person chooses wrong number
//need to create a response if people choose no options

// these are the arrays i think i need//
// var arrspecialChar = ['!','#','$','%','&','(',')','*','+','-','/',':',';','<','=','>','?','@','[','^','{','|','}','~'];
// var arrnumber = [0,1,2,3,4,5,6,7,8,9];
// var arrupper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// var arrlower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// //answers yes to all questions
// var arr1 = ['!','#','$','%','&','(',')','*','+','-','/',':',';','<','=','>','?','@','[','^','{','|','}','~',0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// // answers specialchar no, number yes, upper yes, lower yes
// var arr2 = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// // answers specialchar no, number no,upper yes, lower yes
// var arr3 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// // answers specialchar no, number no,upper no, lower yes
// var arr4 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// //variables i think i nee
// // var prompt = 
// // i want to create a for loop to repeat based on var length
// // create a string use math.random and arrchar for each run through the for loop


// if (character>128 || character <8){
//     alert("Please choose a number between 8-128")
// }
// // for (var i=0; i<length; i++){
// //     console.log ()
// // }
// var i = 0;
// var text = test
// var speed = 50;

// function typeWriter() {
//   if (i < length) {
//     document.getElementById("password").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
// }