let rand; // variable to store in it the random number.
let flagName; //variable that store in it the flage name;
let flagImg; // variable to store in it the url of the img;
let score = 0; //deleare the score of the player;
var timer;
const theAnswerInput = document.getElementById("theAnswer");
const theGameDiv = document.getElementById("theGame");
const submitButton = document.getElementById("submitB");
const finalScoreDiv = document.getElementById("finalScore");

document.getElementById("playButton").addEventListener('click', function(event) {
    document.getElementById("home").style.display = "none";
    theGameDiv.style.display = "flex";
    document.title = " The Game";
    getFlag();

}); // listiner to the play button that hide the dic of the home and show the div of the game.

function addHighScore() {
    var HighScore = localStorage.getItem('HighScore');
    console.log(HighScore);
    if (HighScore) {
        if (score > HighScore) { localStorage.setItem('HighScore', score); }
    } else {
        localStorage.setItem('HighScore', score);
    }
    document.getElementById("HighScore").textContent = "High Score is " + localStorage.getItem('HighScore');
}

function alertRulesFunction() {
    alert("you can't write word shortcut \n" + "you have only one attempt in each level\n" + "you have only 15 second for each flag");
} // alert to show you the rules of the game

document.getElementById("rulesButton").addEventListener("click", (event) => {
    alertRulesFunction();
})

function getFlag() {
    clearInterval(timer);
    document.getElementById("timer").textContent = "" + 15;
    document.getElementById("TimeOut").style.display = "none";
    theAnswerInput.disabled = false;
    submitButton.disabled = false;
    rand = Math.floor(Math.random() * Countries.length);
    flagImg = document.getElementById("flagImg").src = Countries[rand].FlagImg;
    flagName = Countries[rand].CountryName;
    document.getElementById("score").textContent = "your score is " + score;
    theAnswerInput.className = theAnswerInput.className.replace("correct", "");
    theAnswerInput.className = theAnswerInput.className.replace("notCorrect", "");
    theAnswerInput.value = "";
    startCount();
} // function that give us a random flag from the array


submitButton.addEventListener('click', (event) => {
    clearInterval(timer);
    if ((theAnswerInput.value).toLowerCase().trim() === flagName.toLowerCase()) {
        theAnswerInput.className = theAnswerInput.className + " correct";
        score += 5;
        new Audio('456161__bwg2020__correct.wav').play();
        setTimeout(function() {
            clearInterval(timer);
            getFlag();

        }, 1000)

    } else {
        theAnswerInput.className = theAnswerInput.className + " notCorrect";
        theAnswerInput.disabled = true;
        submitButton.disabled = true;
        new Audio('150879__nenadsimic__jazzy-chords.wav').play();;
        setTimeout(function() {
            theGameDiv.style.display = "none";
            finalScoreDiv.style.display = "flex";
            document.getElementById("h1Score").textContent = "Your Score is : " + score;
            addHighScore()
        }, 1500)
    }
});


document.getElementById("playAgainButton").addEventListener('click', (event) => {
    score = 0;
    getFlag();
    theGameDiv.style.display = "flex";
    finalScoreDiv.style.display = "none";
})

document.getElementById("homeButton").addEventListener('click', (event) => {
    location.reload();
})

document.getElementById("exitButton").addEventListener('click', (event) => {
    location.reload();
})

function startCount() {
    let f = 14;
    timer = setInterval(() => {
        document.getElementById("timer").textContent = "" + f;
        if (f == 0) {
            document.getElementById("TimeOut").style.display = "inline";

            clearInterval(timer);
            theAnswerInput.disabled = true;
            submitButton.disabled = true;
            setTimeout(function() {
                theGameDiv.style.display = "none";
                finalScoreDiv.style.display = "flex";
                document.getElementById("h1Score").textContent = "Your Score is : " + score;
                addHighScore();
            }, 1500)
        }
        f--;
    }, 1000)


}