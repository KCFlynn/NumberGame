// a function that resets the variables and re-starts the game
// resets the messages displayed in the Html page with the initial messages

require(["main", "generateRandomNumber"],(function (Main, GenerateRandomNumber) {

    return {
        resetGame: function() {
    randomNumber = GenerateRandomNumber.generateRandomNumber();
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
    Main.enableButtons();
        }
    } 
})
);
