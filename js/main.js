console.log("hello i am activaed");
var length = document.querySelectorAll(".drum").length;
for (var i = 0; i < length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var ch = this.innerHTML;
        var audio;
        playsound(ch);
        animation(ch);
    });
}

document.addEventListener("keydown", function(ev) {
    playsound(ev.key);
    animation(ev.key);
});

function playsound(ch) {
    switch (ch) {
        case "w":
            audio = new Audio("./music/hihat.wav");
            audio.play();
            break;
        case "a":
            audio = new Audio("./music/snare.wav");
            audio.play();
            break;
        case "d":
            audio = new Audio("./music/kick.wav");
            audio.play();
            break;
        case "l":
            audio = new Audio("./music/boom.wav");
            audio.play();
            break;
        case "s":
            audio = new Audio("./music/clap.wav");
            audio.play();
            break;
        case "k":
            audio = new Audio("./music/openhat.wav");
            audio.play();
            break;
        case "j":
            audio = new Audio("./music/ride.wav");
            audio.play();
            break;
        case "f":
            audio = new Audio("./music/tink.wav");
            audio.play();
            break;
        case "g":
            audio = new Audio("./music/tom.wav");
            audio.play();
            break;

        default:
    }
}

function animation(event) {
    var tapped = document.querySelector("." + event);
    tapped.classList.add("pressed");
    setTimeout(function() {
        tapped.classList.remove("pressed");
    }, 100);
}