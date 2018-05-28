require(["resetGame", "generateRandomNumber"], function (ResetGame, GenerateRandomNumber) {
    //usually people name the files and the functions with the same name
    
    
    /* Project 1: Number Guessing Game  */
/* Created by: Elena Popov */
/* Date: Feb 11th 2014 */
/* Evolved by Kurt Friedrich Mar 18 2017 */
$(document).ready(function() {
    
var buttonIndex = $('#button1');
for(i =1; i < 6; i++){
setButtonEvents(buttonIndex);
buttonIndex = buttonIndex.next();
}

var buttonIndex = $('#button6');
for(i =1; i < 6; i++){
setButtonEvents(buttonIndex);
buttonIndex = buttonIndex.next();
}

});


// a series of string variables that hold messages that are displayed depending on the status and course of the game

var message = "";
var lowerNumberMsg = " is not correct! Try a lower number.";
var higherNumberMsg = " is not correct! Try a higher number.";
var winMsg = " is correct! Bravoo, you guessed! You WIN!!!";
var loseMsg = " is not correct. You lost the game.";
var endGameMsg = "Game over. To play again, click  'Play Again' button.";
var startGameMsg = "Click a number or enter one between 0 and 10."
var notANumberMsg = "Please enter a valid number!";

//a variable that holds a randomly generated number 
var randomNumber = GenerateRandomNumber.generateRandomNumber(); // initializes with a generated random number between 1 and 10;

//a boolean variable that holds the information about the satus of the guessed number
var guessed = false; //initializes with false since the number is not guessed yet

//a variable used to count the number times the player has tried to guess the number
var numberOfTries = 0; //initializes with with 0, since the user hadn't had a chance to guess yet

//a constant variable that holds the maximum number or tries a player is allowed to guess the number
var triesAllowed = 4; //initializes the variable with 4 maximum tries

//a calculated variable that determines the number of tries that are left for the user to try
var triesLeft = triesAllowed;  //initializes with the maximum tries allowed

var guessedNumber;  //holder for the number guessed by the user 

//a function that performs all of the checkings related to the user guessing the number 
//and displays messages to the user in the html for the page
function guessNumber(userGuess) {
    if (isNaN(parseInt(userGuess))) {
        message = notANumberMsg;
    }
    else {
        //updates the number of tries left for guessing
        triesLeft--;
        document.getElementById("numberOfTries").innerHTML = triesLeft + " tries left.";
        $('#numberOfTries').text(triesLeft + " tries left.")  //>> 1
        // converts the value entered by the player into a Number and assigns it to guessedNumber variable
        guessedNumber = parseInt(userGuess);

        //an if statement which checks for matching values between the number entered by the user and the random number
        // displays a Winning message if the numbers match
        if (guessedNumber === randomNumber) {
            message = guessedNumber + winMsg;
            //displays an image with fireworks if the player guessed the number 
            //document.getElementById("divFireworks").style.display = "initial";
            $('#divFireworks').css("display", "initial");  // >> 2


           // document.getElementById("userOutput").innerHTML = "You Won!";
             $('#userOutput').text("You Won!")  //>> 5
            disableButtons();
        }
            // checks how many tries are left before giving the user further hints about what number he/she should choose next
            //displays a Lose message if he /she has no more chances to try
        else if (triesLeft === 0) {
            message = guessedNumber + loseMsg + " The number is " + randomNumber + ".";
            //document.getElementById("messageParagr").innerText = endGameMsg;
            $('#messageParagr').text(endGameMsg)  //>> 13
            disableButtons();
        }
            // Checks if the number tired by the user is bigger or smaller than he random number
            //and displays a hint to the user about what number should be chosen next
        else if (guessedNumber > randomNumber) {
            message = guessedNumber + lowerNumberMsg;
        }
        else if (guessedNumber < randomNumber) {
            message = guessedNumber + higherNumberMsg;
        }
    }


    //displays the win/ lose  message in the html
    //document.getElementById("userOutput").innerText = message;
      $('#userOutput').text(message)  //>> 14
}


//a function that calls the main guessNumber(userGuess) with the value of an input text as its argument
function guessNumber2() {
   // var thisGuess = document.getElementById("userGuessTextBox").value;  // <<<<<<<<<<<  8
   var thisGuess =  $('#userGuessTextBox').val();
   guessNumber(thisGuess);
}

function disableButtons() {
    // loops through the collection of buttons to disable them
     var buttonPointer = $('#button1');
    for (var i = 1; i <= 5; i++) {
        buttonPointer.prop('disabled', true);
        buttonPointer = buttonPointer.next();
        //document.getElementById(buttonId).disabled = false;    //   <<<<<<<<<<<<  11
    }
    var buttonPointer = $('#button6');
    for (var i = 1; i <= 5; i++) {
        buttonPointer.prop('disabled', true);
        buttonPointer = buttonPointer.next();
        //document.getElementById(buttonId).disabled = false;    //   <<<<<<<<<<<<  11
    }
    //document.getElementById("tryNumberButton").disabled = true;   //  <<<<<<<<<<<< 10
    $('#tryNumberButton').prop('disabled', true);
}

//a function that loops through the collection of buttons to enable them
function enableButtons() {
    var buttonPointer = $('#button1');
    for (var i = 1; i <= 5; i++) {
        buttonPointer.prop('disabled', false);
        buttonPointer = buttonPointer.next();
        //document.getElementById(buttonId).disabled = false;    //   <<<<<<<<<<<<  11
    }
    var buttonPointer = $('#button6');
    for (var i = 1; i <= 5; i++) {
        buttonPointer.prop('disabled', false);
        buttonPointer = buttonPointer.next();
        //document.getElementById(buttonId).disabled = false;    //   <<<<<<<<<<<<  11
    }
    //document.getElementById("tryNumberButton").disabled = false;   // <<<<<<<<<  12
    $('#tryNumberButton').prop('disabled', false);
}

// $('#button1').click(function () {
 //guessNumber('1');
  //  });
    function setButtonEvents(theButton) {
        theButton.click(function () {
            guessNumber(theButton.val());
        })
}

});