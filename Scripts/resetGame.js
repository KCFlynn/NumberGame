// a function that resets the variables and re-starts the game
// resets the messages displayed in the Html page with the initial messages

define(function () {

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
    
    return {
        resetGame: function() {
    var generator = require("generateRandomNumber");
    var startGameMsg = "Click a number or enter one between 0 and 10.";
    var triesAllowed = 4;        
    randomNumber = generator.generateRandomNumber;
    //resets the number of tries 
    numberOfTries = 0;
    //resets the number of tries left to the maximum number of tries allowed
    triesLeft = triesAllowed; // changed triesAllowed to 4, we can't take triesallowed from Main.js
    //resets the satus of the guesses number to false or not guessed
    guessed = false;
    // reset for the html text with the initial messages of the game
    //document.getElementById("userOutput").innerHTML = "Good Luck Again";
    $('#userOutput').text("Good Luck Again!")  //>> 6
    //document.getElementById("numberOfTries").innerHTML = triesLeft + " tries left.";
    $('#numberOfTries').text(triesLeft + " tries left.")  //>> 4

    //document.getElementById("divFireworks").style.display = "none";
    $('#divFireworks').css("display", "none");   // >> 3
    //document.getElementById("messageParagr").innerText = startGameMsg;
    $('#messageParagr').text(startGameMsg)  //>> 7
    enableButtons();
        }
    } 
});

/*in restGame.js  you are
require(["main", "generateRandomNumber"],(function (Main, GenerateRandomNumber) {
define(function () {

2 bad things.  (1) you are saying this code needs "main".  It does not, its the other way around.
(2) you don't want this code to run as soon as the browser downloads it, so require is not the correct verb.  It needs to be a define(function () {
look at the project we did.*/