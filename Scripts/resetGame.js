// a function that resets the variables and re-starts the game
// resets the messages displayed in the Html page with the initial messages

define(function () {

    return {
        resetGame: function() {
    randomNumber = generateRandomNumber();
    //resets the number of tries 
    numberOfTries = 0;
    //resets the number of tries left to the maximum number of tries allowed
    triesLeft = triesAllowed;
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