let rand; // variable to store in it the random number.
let flagName; //variable that store in it the flage name;
let flagImg; // variable to store in it the url of the img;
let score = 0; //deleare the score of the player;
var timer;

document.getElementById("playButton").addEventListener('click', function(event) {
    document.getElementById("home").style.display = "none";
    document.getElementById("theGame").style.display = "flex";
    document.title = " The Game";
    getFlag();

}); // listiner to the play button that hide the dic of the home and show the div of the game.


function alertRulesFunction() {
    alert("you can't write abbreviation \n" + "you have only one attempt in each level\n" + "you have only 10 second for each flag");
} // alert to show you the rules of the game

document.getElementById("rulesButton").addEventListener("click", (event) => {
    alertRulesFunction();
})

function getFlag() {
    clearInterval(timer);
    document.getElementById("timer").textContent = "" + 15;
    document.getElementById("TimeOut").style.display = "none";
    document.getElementById("theAnswer").disabled = false;
    document.getElementById("submitB").disabled = false;
    rand = Math.floor(Math.random() * Countries.length);
    flagImg = document.getElementById("flagImg").src = Countries[rand].FlagImg;
    flagName = Countries[rand].CountryName;
    document.getElementById("score").textContent = "your score is " + score;
    document.getElementById("theAnswer").className = document.getElementById("theAnswer").className.replace(" correct", "");
    document.getElementById("theAnswer").className = document.getElementById("theAnswer").className.replace(" notCorrect", "");
    document.getElementById("theAnswer").value = "";
    startCount();
} // function that give us a random flag from the array


document.getElementById("submitB").addEventListener('click', (event) => {
    if ((document.getElementById("theAnswer").value).toLowerCase() === flagName.toLowerCase()) {
        document.getElementById("theAnswer").className = document.getElementById("theAnswer").className + " correct";
        score += 5;
        setTimeout(function() {
            clearInterval(timer);
            getFlag();

        }, 1000)

    } else {
        document.getElementById("theAnswer").className = document.getElementById("theAnswer").className + " notCorrect";
        document.getElementById("theAnswer").disabled = true;
        document.getElementById("submitB").disabled = true;
        setTimeout(function() {
            document.getElementById("theGame").style.display = "none";
            document.getElementById("finalScore").style.display = "flex";
            document.getElementById("h1Score").textContent = "Your Score is : " + score;

        }, 1500)
    }
});


document.getElementById("playAgainButton").addEventListener('click', (event) => {
    score = 0;
    getFlag();
    document.getElementById("theGame").style.display = "flex";
    document.getElementById("finalScore").style.display = "none";
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
            document.getElementById("theAnswer").disabled = true;
            document.getElementById("submitB").disabled = true;
            setTimeout(function() {
                document.getElementById("theGame").style.display = "none";
                document.getElementById("finalScore").style.display = "flex";
                document.getElementById("h1Score").textContent = "Your Score is : " + score;

            }, 1500)
        }
        f--;
    }, 1000)


}