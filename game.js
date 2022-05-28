
const OPTIONS = ['paper', 'rock', 'scissors']
const OPTIONS_EMOJI = ['📄', '🪨', '✂️']
let playerScore = 0
let computerScore = 0

function computerPlay() {
    return OPTIONS[Math.floor(Math.random() * 3)];
}

function playRound(computerSelection, playerSelection) {
    let difference = OPTIONS.indexOf(computerSelection) - OPTIONS.indexOf(playerSelection)
    if (difference === 0) {
        return `TIE!`
    }
    else if (difference === 1 || difference === -2) {
        playerScore++
        return `You WIN!`
    }
    else if (difference === -1 || difference === 2) {
        computerScore++
        return `You LOOSE!`
    }
}


const optionsBtn = document.querySelectorAll('.game-option')
const gameResult = document.querySelector('.game-result')

optionsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let computerSelection = computerPlay()

        document.querySelector('.player-selection').innerText = btn.innerText
        document.querySelector('.computer-selection').innerText = OPTIONS_EMOJI[OPTIONS.indexOf(computerSelection)]
        
        let result = playRound(computerSelection, btn.value)
        gameResult.innerText = result

        document.querySelector('.player-score').innerText = playerScore
        document.querySelector('.computer-score').innerText = computerScore
        if (playerScore === 5 || computerScore === 5) {
            if (playerScore === 5) {document.querySelector('.final-result').innerText = 'You Win 🥳'}
            else if (computerScore === 5) {document.querySelector('.final-result').innerText = 'Machine Wins 😔'}
            document.querySelector('.gamesup').classList.toggle('hidden')
        }
    })
})

document.querySelector('.gamesup button').addEventListener('click', () => {
    location.reload()
})