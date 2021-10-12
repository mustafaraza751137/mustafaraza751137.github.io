var seconds = 4;
var el = document.getElementById('counter');
var counter = setInterval(function(){
    seconds -= 1;
    el.innerText = "Loading! Game will start in a few second!";
    if(seconds == 0){
        clearInterval(counter);
    }
}, 1000);

// Player name
var player = "Player";
var score = parseInt(document.querySelector(".score span").innerText);

var value=0;
var btn=document.querySelector(".input");

// Function to get input
function get(p){
    $(".input").removeClass("active");
    window.btn=p;
    window.value=btn.innerText;
    document.querySelector(".variable span").innerText=value;
    btn.className="input active";
}

// Function to roll the dice and match with input
setInterval(function(){
    setTimeout(function () {
        var randomNumber = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
            "images/dice" + randomNumber + ".png");
        
        if (randomNumber == value) {
            document.querySelector(".result").innerText = (player + ", Your guess was right!");
            score+=10;
            document.querySelector(".score span").innerText=score;
        }

        else {
            document.querySelector(".result").innerText
                            = (player + ", Your guess was wrong!");
        }
        value=0;
        btn.className="input";
    }, 1000);
},4000);

// Fuction for timer
setInterval(function(){
    var seconds = 4;
    var el = document.getElementById('counter');
    var counter = setInterval(function(){
        seconds -= 1;
        el.innerText = "The dice will change in " + seconds + " seconds.";
        if(seconds == 0){
            clearInterval(counter);
        }
    }, 1000);
},4000);

// Function to change the player name
function editName() {
    player = prompt("Change Player name");
}