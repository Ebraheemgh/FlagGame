Countries = [{
        FlagImg: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg",
        CountryName: "israel"
    },
    {
        FlagImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/510px-Flag_of_Canada_%28Pantone%29.svg.png",
        CountryName: "canada"
    }

];
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
        document.getElementById("theAnswer").className = document.getElementById("theAnswer").className + " correct";
        score += 5;
        setTimeout(function() {
            getFlag();
        }, 3000)

    } else {
        document.getElementById("theAnswer").className = document.getElementById("theAnswer").className + " notCorrect";

    }
})