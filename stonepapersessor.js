let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#User-score");
const compscorepara = document.querySelector("#Comp-score");

const gencomputerChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = ()=>{
    msg.innerText = "Game was Draw. Try Again";
    msg.style.backgroundColor = "grey";
}

const showWinner = (userWin, Userchoice, compChoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText = userscore
        msg.innerText = `You Won!!!. Your ${Userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lose! ${compChoice} beats Your ${Userchoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (Userchoice) =>{
    console.log("User Choice = ",Userchoice);
    //generate comp choice
    const compChoice = gencomputerChoice();
    console.log("Computer Choice = ",compChoice);

    if(Userchoice === compChoice){
        //draw game
        drawGame();
    }
    else{
       // let userWin = true;
        if(Userchoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        } else if(Userchoice === "paper"){
            userWin = compChoice === "scissors"? false: true;
        } else{
          userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin, Userchoice,compChoice);
    }
};

choices.forEach((choice) =>{
   choice.addEventListener("click",()=>{
    const Userchoice = choice.getAttribute("id");
    playGame(Userchoice);
   });
});