let rand;
let flagName;
let flagImg;
let score = 0;

function getFlag() {
    rand = Math.floor(Math.random() * Countries.length);

    flagImg = document.getElementById("flagImg").src = Countries[rand].FlagImg;
    flagName = Countries[rand].CountryName;
    document.getElementById("score").textContent = "your score is " + score;
    document.getElementById("theAnswer").className = document.getElementById("theAnswer").className.replace(" correct", "");
    document.getElementById("theAnswer").value = "";
}
getFlag();


document.getElementById("submitB").addEventListener('click', (event) => {

    if (document.getElementById("theAnswer").value === flagName) {
        document.getElementById("theAnswer").className = document.getElementById("theAnswer").className.replace(" notCorrect", "");
        document.getElementById("theAnswer").className = document.getElementById("theAnswer").className + " correct";
        score += 5;
        setTimeout(function() {
            getFlag();
        }, 3000)

    } else {
        document.getElementById("theAnswer").className = document.getElementById("theAnswer").className + " notCorrect";
        document.getElementById("theGame").style.display = "none";
        document.getElementById("finalScore").style.display = "flex";
        document.getElementById("h1Score").textContent = "Your Score is : " + score;


    }
})
document.getElementById("playButton").addEventListener('click', function(event) {
    document.getElementById("home").style.display = "none";
    document.getElementById("theGame").style.display = "flex";

})

document.getElementById("playAgainButton").addEventListener('click', (event) => {
    score = 0;
    getFlag();
    document.getElementById("theGame").style.display = "flex";
    document.getElementById("finalScore").style.display = "none";
})

document.getElementById("homeButton").addEventListener('click', (event) => {
    score = 0;
    document.getElementById("home").style.display = "inline";
    document.getElementById("finalScore").style.display = "none";
})

document.getElementById("exitButton").addEventListener('click', (event) => {
    score = 0;
    document.getElementById("home").style.display = "inline";
    document.getElementById("theGame").style.display = "none";
})