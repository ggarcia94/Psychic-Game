//This function will return a random lower case letter
function randLetter() {
    var letters =
        ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
         ,"r","s","t","u","v","w","x","y","z"];
        var letter = letters[Math.floor(Math.random()*letters.length)];
    return letter;
}

//This function checks that the character entered was a letter
function isLetter(c) {
    if (c.toLowerCase() != c.toUpperCase()) {
        return true;
    }
    else {
        return false;
    }
}

//This function takes a character and and array as variables and check if the character is
//a member of the array
function isMember(c, array) {
    for (var i=0; i < array.length; i++) {
        if (c === array[i]) {
            return true;
        }               
    }
    return false;
}

//Variables
var computerLetter = randLetter();
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
    var guessedLetter = event.key;
    var x = isLetter(guessedLetter);
    var y = isMember(guessedLetter, guesses);
            
    //Only run the game if we have entered a letter and the letter hasn't been guessed yet
    if ((x === true) &&  (y === false)) {

        if (guessedLetter !== computerLetter) {
            guesses.push(guessedLetter);
            guessesLeft--;
        }

        if (guessesLeft === 0) {
            losses++;
            guesses = [];
            guessesLeft = 9;
            computerLetter = randLetter();
        } 
        
        if (guessedLetter === computerLetter) {
            wins++;
            guesses = [];
            guessesLeft = 9;
            computerLetter = randLetter();
        } 

        var html =
            "<p>Guess what letter I'm thinking of</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your Guesses: " + guesses + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html; 
    }
};