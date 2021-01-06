let Countries = [{
        CountryName: "Israel",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_is-flag.gif",
    },

    {
        CountryName: "Algeria",
        FlagImg: " https://www.worldometers.info/img/flags/small/tn_ag-flag.gif ",
    },
    {
        CountryName: "Bahrain",
        FlagImg: " https://www.worldometers.info/img/flags/small/tn_ba-flag.gif",
    },

    {
        CountryName: "Croatia",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_hr-flag.gif ",
    },

    {
        CountryName: "Argentina",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_ar-flag.gif  ",
    },

    {
        CountryName: "Portugal",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_po-flag.gif ",
    },

    {
        CountryName: "Australia",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_as-flag.gif  ",
    },

    {
        CountryName: "Austria",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_au-flag.gif  ",
    },

    {
        CountryName: "Canada",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_ca-flag.gif",
    },

    {
        CountryName: "Egypt",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_eg-flag.gif ",
    },

    {
        CountryName: "Bahrain",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_ba-flag.gif  ",
    },

    {
        CountryName: "France",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_fr-flag.gif ",
    },

    {
        CountryName: "Germany",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_gm-flag.gif  ",
    },

    {
        CountryName: "Greece",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_gr-flag.gif ",
    },

    {
        CountryName: "Belgium",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_be-flag.gif  ",
    },

    {
        CountryName: "India",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_in-flag.gif ",
    },

    {
        CountryName: "Italy",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_it-flag.gif ",
    },

    {
        CountryName: "Japan",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_ja-flag.gif ",
    },

    {
        CountryName: "Jordan",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_jo-flag.gif ",
    },

    {
        CountryName: "Brazil",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_br-flag.gif  ",
    },

    {
        CountryName: "Kuwait",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_ku-flag.gif  ",
    },

    {
        CountryName: "Bulgaria",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_bu-flag.gif   ",
    },

    {
        CountryName: "Lebanon",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_le-flag.gif  ",
    },

    {
        CountryName: "Mexico",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_mx-flag.gif ",
    },

    {
        CountryName: "Morocco",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_mo-flag.gif  ",
    },

    {
        CountryName: "Canada",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_ca-flag.gif",
    },

    {
        CountryName: "China",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_ch-flag.gif   ",
    },

    {
        CountryName: "Colombia",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_co-flag.gif",
    },
    {
        CountryName: "Cuba",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_cu-flag.gif   ",
    },

    {
        CountryName: "Denmark",
        FlagImg: "https://www.worldometers.info/img/flags/small/tn_da-flag.gif   ",
    },

]; // array of objects that contain the flag picture url and the country name.


let rand; // variable to store in it the random number.
let flagName; //variable that store in it the flage name;
let flagImg; // variable to store in it the url of the img;
let score = 0; //deleare the score of the player;

document.getElementById("playButton").addEventListener('click', function(event) {
    document.getElementById("home").style.display = "none";
    document.getElementById("theGame").style.display = "flex";
    document.title = " The Game"

}); // listiner to the play button that hide the dic of the home and show the div of the game.


function alertRulesFunction() {
    alert("you can't write abbreviation \n" + "you have only one attempt in each level\n");
} // alert to show you the rules of the game



function getFlag() {
    rand = Math.floor(Math.random() * Countries.length);

    flagImg = document.getElementById("flagImg").src = Countries[rand].FlagImg;
    flagName = Countries[rand].CountryName;
    document.getElementById("score").textContent = "your score is " + score;
    document.getElementById("theAnswer").className = document.getElementById("theAnswer").className.replace(" correct", "");
    document.getElementById("theAnswer").className = document.getElementById("theAnswer").className.replace(" notCorrect", "");
    document.getElementById("theAnswer").value = "";
} // function that give us a random flag from the array
getFlag();


document.getElementById("submitB").addEventListener('click', (event) => {
    if ((document.getElementById("theAnswer").value).toLowerCase() === flagName.toLowerCase()) {
        document.getElementById("theAnswer").className = document.getElementById("theAnswer").className + " correct";
        score += 5;
        setTimeout(function() {
            getFlag();
        }, 1000)

    } else {
        document.getElementById("theAnswer").className = document.getElementById("theAnswer").className + " notCorrect";
        setTimeout(function() {
            document.getElementById("theGame").style.display = "none";
            document.getElementById("finalScore").style.display = "flex";
            document.getElementById("h1Score").textContent = "Your Score is : " + score;
        }, 1000)
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