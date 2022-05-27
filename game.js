console.log('Call the game() function to start the game')

const OPTIONS = ['paper', 'rock', 'scissors']
let playerScore = 0, computerScore = 0

function computerPlay() {
    return OPTIONS[Math.floor(Math.random() * 3)];
}

function playRound(computerSelection, playerSelection) {

    let difference = OPTIONS.indexOf(computerSelection) - OPTIONS.indexOf(playerSelection)

    if (difference === 0) {
        return `TIE! Both selected ${computerSelection}`
    }
    else if (difference === 1 || difference === -2) {
        playerScore++
        return `You WIN! Your ${playerSelection} beats ${computerSelection}`
    }
    else if (difference === -1 || difference === 2) {
        computerScore++
        return `You LOSE! ${computerSelection} beats your ${playerSelection}`
    }
}

function game() {

    for (let i = 0; i < 5; i ++) {
        let playerSelection =  prompt("Type your option (rock, paper, scissors): ")

        // console.log(OPTIONS.includes(playerSelection.toLowerCase()))
        if (OPTIONS.includes(playerSelection.toLowerCase()) === false) {
            console.log('Invalid option')
            continue
        }
        else {
            let computerSelection = computerPlay()
            console.log(playRound(computerSelection, playerSelection))
        }
    }
    console.log(`FINAL SCORE\nPlayer ${playerScore} - ${computerScore} Computer`)
}