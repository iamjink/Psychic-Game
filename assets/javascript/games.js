
//letter choices
var userChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//randomizing letter choices that user can type from userChoices array. math.floor() returns largest element less than or equal to in array
var computerChoices = userChoices[Math.floor(Math.random() * userChoices.length)]; 

//setting each variable to start
var win = 0;
var losses = 0;
var guessCountdown = 9;
var letterPressed = [];

//defining each function and changing text in the scoreBoard div

//replaces guess count down number 
function userGuessCount() {
    document.querySelector("#guessCountdown").innerHTML = "Guesses Left: " + guessCountdown;
}

//replaces text #userGuess from HTML to "your guess so far: key pressed"
function userText() {
    document.querySelector("#userGuess").innerHTML = "Your Guesses So Far: " + letterPressed;

}

//onkeyup function; this function triggers when a key is pressed
document.onkeyup = function(event) {
    
    //guesscountdown number decrements
    guessCountdown--;

    // defines userGuess as the key that user presses
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    //pushes key pressed (userGuess) by user into letter pressed.
    letterPressed.push(userGuess);

    //runs the functions defined above on keyup
    userGuessCount();
    userText();

if (userGuess === computerChoices) {
    win++;
    document.querySelector("#wins").innerHTML = "Wins: " + win;
}


};


