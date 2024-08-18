document.addEventListener("DOMContentLoaded", () => {
    let humanscore = 0;
    let computerscore = 0;
    let rounds = 5;

    const btn1 = document.querySelector(".rock button");
    const btn2 = document.querySelector(".paper button");
    const btn3 = document.querySelector(".scissor button");

    const compChoiceDisplay = document.querySelector(".comp");
    const humanChoiceDisplay = document.querySelector(".human");
    const humanScoreDisplay = document.querySelector(".hscore");
    const computerScoreDisplay = document.querySelector(".Cscore");
    const resultDisplay = document.querySelector(".result");

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissor"];
        const randomChoice = Math.floor(Math.random() * choices.length);
        return choices[randomChoice];
    }

    function getHumanChoice() {
        return new Promise((resolve) => {
            btn1.addEventListener("click", () => {
                resolve("rock");
            }, { once: true });
            btn2.addEventListener("click", () => {
                resolve("paper");
            }, { once: true });
            btn3.addEventListener("click", () => {
                resolve("scissor");
            }, { once: true });
        });
    }

    function playRound(humanChoice, computerChoice) {
        humanChoiceDisplay.textContent = "Your choice is: " + humanChoice;
        compChoiceDisplay.textContent = "Computer choice is: " + computerChoice;

        if (humanChoice === computerChoice) {
            resultDisplay.textContent = "It's a Tie!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissor") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissor" && computerChoice === "paper")
        ) {
            resultDisplay.textContent = "You win this round!";
            humanscore++;
        } else {
            resultDisplay.textContent = "You lose this round!";
            computerscore++;
        }

        humanScoreDisplay.textContent = "Your score is: " + humanscore;
        computerScoreDisplay.textContent = "Computer score is: " + computerscore;
    }

    async function playGame() {
        while (rounds > 0) {
            const humanSelection = await getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            rounds--;

            if (rounds === 0) {
                if (humanscore > computerscore) {
                    resultDisplay.textContent = "You win the game!";
                } else if (humanscore < computerscore) {
                    resultDisplay.textContent = "You lose the game!";
                } else {
                    resultDisplay.textContent = "It's a tie game!";
                }
            }
        }
    }

    playGame();
});
