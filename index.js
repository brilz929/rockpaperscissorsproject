    let choices = ["rock", "paper", "scissors"]


    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random()* choices.length)
        return choices[randomIndex];
    }

    function getHumanChoice() {
        let choice = "";
        while (!choices.includes(choice)) {
            choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
            if (!choices.includes(choice)) {
                alert("Invalid choice. Please try again.");
            }
        }
        return choice;
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!"
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                   (humanChoice === "paper" && computerChoice === "rock") ||
                   (humanChoice === "scissors" && computerChoice === "paper")) {
            return "You win this round!"
        } else {
            return "Computer wins this round!"
        }
    }

    function playGame() {
        let humanScore = 0
        let computerScore = 0

        for (let round = 1; round <= 5; round++) {
            const humanChoice = getHumanChoice();
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);


            console.log(`Round ${round}: You chose ${humanChoice}, Computer chose ${computerChoice}.`);
            console.log(playRound(humanChoice, computerChoice));

            if (result === "You win this round!") {
                humanScore++;
                // console.log("You win this round!");
            } else if (result === "Computer wins this round!") {
                computerScore++;
                // console.log("Computer wins this round!");
            } else {
                // console.log("It's a tie!");
            }
        }
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    
    }
    console.log(playGame());