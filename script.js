var answer1 = document.getElementById("awn1");
var answer2 = document.getElementById("awn2");
var answer3 = document.getElementById("awn3");
var answer4 = document.getElementById("awn4");
var answer5 = document.getElementById("awn5");
var question1 = document.getElementById("q1");
var question2 = document.getElementById("q2");
var question3 = document.getElementById("q3");
var question4 = document.getElementById("q4");
var question5 = document.getElementById("q5");
var btn = document.getElementById("btn");
var score = document.getElementById("text");

btn.addEventListener("click", btnClicked);

var scorenum = 0;
console.log(scorenum)



function btnClicked() {
    if (question1.value.toLowerCase() === "reach") {
        scorenum++;
        answer1.innerHTML = "Right"
    } else {
        answer1.innerHTML = "Wrong"
    } if (question2.value.toLowerCase() === "spartan 2" ||question2.value.toLowerCase() === "spartan ll" ||question2.value.toLowerCase() === "spartan ii") {
        scorenum++;
        answer2.innerHTML = "Right"
    } else {
        answer2.innerHTML = "Wrong"
    } if (question3.value.toLowerCase() === "assassin" ||question3.value.toLowerCase() === "he was a assassin" ||question3.value.toLowerCase() === "he was a assassin" ) {
        scorenum++;
        answer3.innerHTML = "Right"
    } else {
        answer4.innerHTML = "Wrong"
    }if (question4.value.toLowerCase() === "yes" ||question4.value.toLowerCase() === "no" ||question4.value.toLowerCase() === "maybe" ) {
        scorenum++;
        answer4.innerHTML = "Right"
    } else {
        answer4.innerHTML = "Wrong"
    }if (question5.value.toLowerCase() === "halo 3" ||question5.value.toLowerCase() === "halo three") {
        scorenum++;
        answer5.innerHTML = "Right"
    } else {
        answer5.innerHTML = "Wrong"
    }
    percent = Math.floor((scorenum / 5) * 100);
    score.innerHTML = `${scorenum} / 5 OR ${percent}%`;
    scorenum = 0;
}
