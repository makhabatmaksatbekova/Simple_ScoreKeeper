var player1Display = document.querySelector("#p1Display");
let player2Display = document.querySelector("#p2Display");
let reset = document.querySelector("#reset");
let p1Score = document.querySelector("#scoreP1");
let p2Score = document.querySelector("#scoreP2");
let playScore = document.querySelector("p span");
let input = document.querySelector("input");

let displayScore1 = 0;
let displayScore2 = 0;
let maxScore = 5;


player1Display.addEventListener("click", function(){
    if(displayScore1 === maxScore || displayScore2 === maxScore ){
        return
    }   
    displayScore1 ++;
    if(displayScore1 === maxScore){
        p1Score.classList.add("winner")
     }
    p1Score.textContent = displayScore1;
})

player2Display.addEventListener("click", function(){
    if(displayScore1 === maxScore || displayScore2 === maxScore ){
        return
    }
     displayScore2 ++;
     if(displayScore2 === maxScore){
        p2Score.classList.add("winner")
     }
     p2Score.textContent = displayScore2;
})

reset.addEventListener("click", function(){
    setToZero();

})

function setToZero(){
    displayScore1 = 0;
    displayScore2 = 0;
    p1Score.textContent = displayScore1;
    p2Score.textContent = displayScore2;
    p1Score.classList.remove("winner")
    p2Score.classList.remove("winner")
}


input.addEventListener("change", function(){
    playScore.textContent = this.value;
    maxScore = Number(this.value)
    setToZero();
})




// let firstName = prompt("What is your first name? ")
// let lastName = prompt("What is your last name? ")
// let age = prompt("What is your age? ")
// console.log("Your full name is " + firstName + " " + lastName);
// console.log("Your age is " + age );


// let userAge = prompt("What is your age");
// alert(userAge + " years is "+ userAge*365 + " days")

// let message = prompt("Are you there?");

// while(message.indexOf("yes") ===-1){
//     message = prompt("Are you there?")
// }
// alert("Finally you made it")