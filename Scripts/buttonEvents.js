define(function() {
    
    return {
        buttonEvents: function(theButton) {
            
            theButton.click(function () {
            guessNumber(theButton.val());
        })
        }
    }
});