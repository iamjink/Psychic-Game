
//letter choices
var userChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//randomizing letter choices that user can type from userChoices array. math.floor() returns largest element less than or equal to in array
var computerChoices = userChoices[Math.floor(Math.random() * userChoices.length)]; 

//
var win = 0;
var losses = 0;
var guessCountdown = 0;
var userGuess = 0;

