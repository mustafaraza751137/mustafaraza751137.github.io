var seconds = 4;
var el = document.getElementById('counter');
var counter = setInterval(function(){
    seconds -= 1;
    el.innerText = "The game will start in a few seconds ";
    if(seconds == 0){
        clearInterval(counter);
    }
}, 1000);

// Player name
var player = "Player";
var score = parseInt(document.querySelector(".score span").innerHTML);

// Function to change the player name
function editNames() {
    player = prompt("Change Player name");
    document.querySelector("p.Player").innerHTML = player;
}

var value=0;
var btn=document.querySelector(".input");

function get(p){
    $(".input").removeClass("active");
    window.btn=p;
    window.value=btn.value;
    document.querySelector(".variable span").innerHTML=value;
    btn.className="input active";
}

// Function to roll the dice
setInterval(function(){
    setTimeout(function () {
        var randomNumber = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
            "dice" + randomNumber + ".png");
        
        if (randomNumber == value) {
            document.querySelector(".result").innerHTML = (player + ", Your guess was right!");
            score+=10;
            document.querySelector(".score span").innerHTML=score;
        }

        else {
            document.querySelector(".result").innerHTML
                            = (player + ", Your guess was wrong");
        }
        value=0;
        btn.className="input";
    }, 1000);
},4000);

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