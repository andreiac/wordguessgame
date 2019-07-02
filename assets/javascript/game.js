

var wordList = ["hermione", "portkey", "hedwig", "hufflepuff", "sirius", "animagus", "alohamora", "snitch", "niffler", "voldemort"];

var rightWord = [];
var wrongWord = []
var underlinedBlanks = [];
var guessesLeft = 10;


var wordBeingGuessed = wordList[Math.floor(Math.random() * wordList.length)];



var wordBeingGuessedBank = document.getElementById("#wordBeingGuessedBank");
var wrongGuessesBank = document.getElementById("#wrongGuessesBank")



console.log(wordBeingGuessed);



for (var i = 0; i < wordBeingGuessed.length; i++) {
    underlinedBlanks.push("_");
}


console.log(underlinedBlanks)

//capture users guess

document.addEventListener("keypress", (event) => {
    let letters = String.fromCharCode(event.keyCode);



    for (var i = 0; i < wordBeingGuessed.length; i++) {
        if (letters === wordBeingGuessed[i]) {
            underlinedBlanks[i] = letters;
        }
    }

    //if users guess is right


    if (wordBeingGuessed.indexOf(letters) > -1)

    //push to right words array
    {
        rightWord.push(letters);
        console.log(rightWord);

        //replace underscore with right letter

        underlinedBlanks[wordBeingGuessed.indexOf(letters)] = letters;
        console.log(underlinedBlanks);
        document.getElementById('wordBeingGuessedBank').innerHTML = underlinedBlanks;

    }

    else
    //push to wrong words array
    {
        wrongWord.push(letters);
        console.log(wrongWord);
        document.getElementById('wrongGuessesBank').innerHTML = wrongWord;
        guessesLeft = guessesLeft - 1;


    }

    if (guessesLeft === 0) {

        alert("You lost! The word was " + wordBeingGuessed + "!");
        

    }
    if (underlinedBlanks.join('') == wordBeingGuessed) {

        alert("Galloping gargoyles, you've done it! The word was " + wordBeingGuessed + "!");
    }

})

