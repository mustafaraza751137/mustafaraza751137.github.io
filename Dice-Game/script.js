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

    // Here max=6 and min=1;
    // Math.floor(Math.random() * (max - min + 1) + min);
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    console.log(randomNumber);

    // rolling dice
    document.querySelector(".img1").setAttribute("src",
        "images/dice" + randomNumber + ".png");
    
    // checking for result
    if (randomNumber == value) {
        document.querySelector(".result").innerText = (player + ", Your guess was right!");
        score+=10;
        document.querySelector(".score span").innerText=score;
    }

    else {
        document.querySelector(".result").innerText
                        = (player + ", Your guess was wrong!");
    }

    //changing value to its default value after matching result
    value=0;
    document.querySelector(".variable span").innerText=0;
    btn.className="input";

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

    // if given name is null or empty don't change
    if(player == null || player == "")
        player="Player";
}