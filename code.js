let choices = ['rock', 'paper', 'scissors'];
let playerChoice
let computerChoice

function computerPlay () {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice
}

function playerPlay () {
    playerChoice = prompt('Please pick between the following choices: ' + choices).toLowerCase();
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors'){
        (alert('Great choice!'));
    } else {
        alert('Not the right choice, refresh the page to try again.');
    }
    return playerChoice;
}

function playRound (playerChoice, computerChoice) {
    let roundOutcome
    switch (true) {
        case (playerChoice === computerChoice):
            roundOutcome = "Draw!";
            return roundOutcome;
        case (playerChoice === "rock" && computerChoice === "scissors"):
        case (playerChoice === "paper" && computerChoice === "rock"):
        case (playerChoice === "scissors" && computerChoice === "paper"):
            roundOutcome = "Victory!";
            return roundOutcome;
        default:
            roundOutcome = "Defeat!";
            return roundOutcome;
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        computerPlay ();
        playerPlay ();
        playRound (playerChoice, computerChoice);
        console.log ('Player selection: ' + playerChoice + ' | ' + 'Computer selection: ' + computerChoice)
        console.log (playRound(playerChoice, computerChoice))
     }
}

game ();
