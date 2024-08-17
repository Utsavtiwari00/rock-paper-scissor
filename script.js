let humanscore = 0;
let computerscore = 0;



function getComputerChoice(){
    const choices = ["rock","paper","scissor"]
    const randomchoice= Math.floor(Math.random()*choices.length);
    return  choices[randomchoice];
}
function getHumanChoice(){
    let Hchoice = prompt("Enter your choice");
    if (Hchoice !== null) {
        let h1choice = Hchoice.toLowerCase().trim();
        if (["rock", "paper", "scissor"].includes(h1choice)) {
            return h1choice;
        } else {
            alert("Invalid choice. Please enter 'rock', 'paper', or 'scissor'.");
            return getHumanChoice();
        }
    } else {
        alert("You must enter a choice.");
        return getHumanChoice();
    }
    
}
function playRound(Humanchoice,computerchoice){
    if(Humanchoice==computerchoice){
        console.log("Its a Tie");
    }
    else if(Humanchoice== "rock" && computerchoice=="scissor" || Humanchoice== "paper" && computerchoice=="rock" || Humanchoice== "scissor" && computerchoice=="paper")
        {
        console.log("You win");
        humanscore++;}
            else{
                console.log("you lose");
                computerscore++;
            }
            console.log("Your score = " + humanscore + " Computer score = " + computerscore)
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);