let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const getCompChoice = () => {
  const options = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you win! Your${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText =`you lose! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const drawGame = () => {
    msg.innerText = "Game was draw, play again";
    msg.style.backgroundColor = "#081b31";
}
const playGame = (userChoice) => {
  console.log("user choice = ",userChoice);
  //Generate Computer Choice
  const compChoice = getCompChoice();
  console.log("comp choice=", compChoice);

  if(userChoice === compChoice) {
     //Draw Game
     drawGame();
  }else{
    let userWin = true;
    if(userChoice === "rock"){
       userWin = compChoice === "paper" ? false : true;
    }else if (userChoice === "paper"){
        //rock, scissor
        userWin = compChoice === "scissors" ? false : true;
    }else{
        //rock, paper
       userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}
choices.forEach((choice) => {
  choice.addEventListener("click", ()=> {
   const userChoice = choice.getAttribute("id");
   playGame(userChoice);
  })
})