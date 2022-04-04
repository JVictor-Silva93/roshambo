let choices = ['rock', 'paper', 'scissors'];
let playerChoice;
let computerChoice;
let roundOutcome;
let playerScore = 0;
let computerScore = 0;
let victoryMessage;

function computerPlay () {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice
}

const rocks = document.getElementById("rock");
rocks.addEventListener("click", function() {
    computerPlay();
    playerChoice = "rock";
    playRound(playerChoice, computerChoice);

    checkScore (playerScore, computerScore);
    container.appendChild(scoreP);
    scoreP.style.color = 'green';
    scoreP.textContent = victoryMessage;
    console.log(roundOutcome);
    console.log(playerScore);
    console.log(computerScore);
});

const papers = document.getElementById("paper");
papers.addEventListener("click", function() {
    computerPlay();
    playerChoice = "paper";
    playRound(playerChoice, computerChoice);

    checkScore (playerScore, computerScore);
    container.appendChild(scoreP);
    scoreP.style.color = 'green';
    scoreP.textContent = victoryMessage;
    console.log(roundOutcome);
    console.log(playerScore);
    console.log(computerScore);
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", function() {
    computerPlay();
    playerChoice = "scissors";
    playRound(playerChoice, computerChoice);

    checkScore (playerScore, computerScore);
    container.appendChild(scoreP);
    scoreP.style.color = 'green';
    scoreP.textContent = victoryMessage;
    console.log(roundOutcome);
    console.log(playerScore);
    console.log(computerScore);
});

function playRound (playerChoice, computerChoice) {
    
    switch (true) {
        case (playerChoice === computerChoice):
            roundOutcome = "Draw!";
            container.appendChild(aNewP);
            aNewP.style.color = 'black';
            aNewP.textContent = "Round outcome: " + roundOutcome;
            return roundOutcome;
        case (playerChoice === "rock" && computerChoice === "scissors"):
        case (playerChoice === "paper" && computerChoice === "rock"):
        case (playerChoice === "scissors" && computerChoice === "paper"):
            playerScore += 1;
            roundOutcome = "Victory!";
            container.appendChild(aNewP);
            aNewP.style.color = 'blue';
            aNewP.textContent = "Round outcome: " + roundOutcome;
            return roundOutcome;
        default:
            roundOutcome = "Defeat!";
            container.appendChild(aNewP);
            aNewP.style.color = 'red';
            aNewP.textContent = "Round outcome: " + roundOutcome;
            computerScore += 1;
            return roundOutcome;
    }
}

function checkScore (playerScore, computerScore) {
    if (playerScore === 5) {
        victoryMessage = "You win! Refresh this page to play again.";
        document.querySelectorAll('button.btn').forEach(elem => {
            elem.disabled = true;
        });
    } else if (computerScore === 5) {
        victoryMessage = "You lose! Refresh this page to play again.";
        document.querySelectorAll('button.btn').forEach(elem => {
            elem.disabled = true;
        });
    } else {
        victoryMessage = "Keep playing!";
    }
    return victoryMessage;
}

// main container div, used to set up as parent to new elements
const container = document.querySelector('.results');

// papragraph with results
const aNewP = document.createElement('p');
const scoreP = document.createElement('p');




// function playerPlay () {
//     playerChoice = prompt('Please pick between the following choices: ' + choices).toLowerCase();
//     if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors'){
//         (alert('Great choice!'));
//     } else {
//         alert('Not the right choice, refresh the page to try again.');
//     }
//     return playerChoice;
// }

// function game () {
//     for (let i = 0; i < 5; i++) {
//         computerPlay ();
//         playerPlay ();
//         playRound (playerChoice, computerChoice);
//         console.log ('Player selection: ' + playerChoice + ' | ' + 'Computer selection: ' + computerChoice)
//         console.log (playRound(playerChoice, computerChoice))
//      }
// }
