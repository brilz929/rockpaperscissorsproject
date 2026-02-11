    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');
    const playerIcon = document.querySelector('.player-icon');
    const computerIcon = document.querySelector('.computer-icon');
    const playerScoreEl = document.getElementById('player-score');
    const computerScoreEl = document.getElementById('computer-score');
    const titleHeader = document.querySelector('h1');
    const resetBtn = document.getElementById('reset-btn');

    let humanScore = 0;
    let computerScore = 0;
    let currentRound = 0;
    let maxRounds = 5;
    
    let choices = [
        { name: 'rock', emoji: '🪨', beats: 'scissors' },
        { name: 'paper', emoji: '📄', beats: 'rock' },
        { name: 'scissors', emoji: '✂️', beats: 'paper' }
    ]


    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random()* choices.length)
        return choices[randomIndex];
    }

    function playRound(playerChoice) {
       if (currentRound >= maxRounds) {
        titleHeader.textContent = "Game over!";
        return;
       }
        const computerChoice = getComputerChoice();
        
        playerIcon.textContent = playerChoice.emoji;
        computerIcon.textContent = computerChoice.emoji;

        currentRound++;

        if (playerChoice.name === computerChoice.name) {
            titleHeader.textContent = `ROUND ${currentRound}: TIE!`;
        } else if (playerChoice.beats === computerChoice.name) {
            humanScore++;
            titleHeader.textContent = `ROUND ${currentRound}: You win!`;
            playerScoreEl.textContent = `PLAYER: ${humanScore}`;
        } else {
            computerScore++;
            titleHeader.textContent = `ROUND ${currentRound}: Computer wins!`;
            computerScoreEl.textContent = `COMPUTER: ${computerScore}`;
        }

        if (currentRound === maxRounds)
            declareWinner()
        
    }

    function declareWinner() {
    if (humanScore > computerScore) {
        titleHeader.textContent = "GAME OVER: YOU WIN!";
        titleHeader.style.color = "gold";
    } else if (computerScore > humanScore) {
        titleHeader.textContent = "GAME OVER: COMPUTER WINS!";
    } else {
        titleHeader.textContent = "GAME OVER: IT'S A DRAW!";
    }
    resetBtn.style.display = "block";
    
    resetBtn.addEventListener('click', () => {
        currentRound = 0;
        humanScore = 0;
        computerScore = 0;

        titleHeader.textContent = "PLAY GAME";
        titleHeader.style.color = "hsl(120, 100%, 50%)";
        playerScoreEl.textContent = "PLAYER: 0";
        computerScoreEl.textContent = "COMPUTER: 0";
        playerIcon.textContent = "";
        computerIcon.textContent = "";

        resetBtn.style.display = "none";
    })
}

    rockButton.addEventListener('click', () => {playRound(choices[0]);});
    paperButton.addEventListener('click', () => {playRound(choices[1]);});
    scissorsButton.addEventListener('click', () => {playRound(choices[2]);
    });
