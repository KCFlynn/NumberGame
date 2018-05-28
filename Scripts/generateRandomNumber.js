//a function that generates a random number between 1 and 10
define(function (){
 
    return{
        generateRandomNumber: function (){
            Math.floor((Math.random() * 10) + 1);
        }
    }
});

