function computerPlay() {
    let plays = ["Rock","Paper","Scissors"];
    return plays[Math.floor(Math.random()*plays.length)];
}

let roundResults = document.querySelector('#roundResults');
let scoreP = document.querySelector('#playerScore');
let scoreC = document.querySelector('#computerScore');
let finished = false;
let scorePC = 0;
let scoreCC = 0;

function playRound(playerSelection, computerSelection) {
    let ch = playerSelection.charAt(0).toUpperCase();
    let play = ch + (playerSelection.toLowerCase().slice(1)).trim();
    let cPlay = computerSelection.trim();
    if (play === computerSelection) {
        return "That's a draw. You both played " + play + "!";
    } else if (play === "Rock") {
        if (cPlay === "Paper") {
            scoreCC++;
            return "You lose. Paper beats " + play;
        } else if (cPlay === "Scissors") {
            scorePC++;
            return "You win. Rock beats " + cPlay;
        }
    } else if (play === "Paper") {
        if (cPlay === "Rock") {
            scorePC++;
            return "You win. Paper beats " + cPlay;
        } else if (cPlay === "Scissors") {
            scoreCC++;
            return "You lose. Scissors beats " + play;
        }
    } else if (play === "Scissors") {
        if (cPlay === "Rock") {
            scoreCC++;
            return "You lose. Rock beats " + play;
        } else if (cPlay === "Paper") {
            scorePC++;
            return "You win. Scissors beats " + cPlay;
        }
    }
}

function victory(){
    finished = true;
    if(scoreCC==5){
        roundResults.textContent = "COMPUTER WON.";
    }else{
        roundResults.textContent = "YOU WON.";
    }

}

function updateScore(playerSelection) {
    if(playerSelection!=undefined) roundResults.textContent =  playRound(playerSelection, computerPlay());
    scoreP.textContent = "Player Score: " + scorePC;
    scoreC.textContent = "Computer Score: " + scoreCC;
    if(scorePC==5||scoreCC==5) victory();
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    scorePC=0;
    scoreCC=0;
    finished=false;
    updateScore();
    roundResults.textContent = "";
});


const playButtons = document.querySelectorAll('button.playbutton');
playButtons.forEach(button => button.addEventListener('click', () => {  
    if(!finished){
        updateScore(button.classList[0]);
        console.log(button.classList);
    }
}));
