
//letter choices
var userChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//randomizing letter choices that user can type from userChoices array. math.floor() returns largest element less than or equal to in array
var computerChoices = userChoices[Math.floor(Math.random() * userChoices.length)]; 

//setting each variable to start
var win = 0;
var losses = 0;
var guessCountdown = 9;
var letterPressed = [];

var letterKey = String.fromCharCode(event.keyCode).toLowerCase();

//defining each function and changing text in the scoreBoard div
function userText () {
    
    document.getElementById("#userGuess").innerHTML = "Your Guesses So Far: " + letterKey;

}

document.onkeyup = function(event) {
    guessCountdown--;

    var letterKey = String.fromCharCode(event.keyCode).toLowerCase();

    letterPressed.push(letterKey);


};


