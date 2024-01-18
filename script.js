let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const usercount=document.querySelector(".user-score");
const computercount=document.querySelector(".computer-score");


const showWinner=(userWin,Userchoice,computerChoice)=>{
    if(userWin){
        msg.innerText='You Win! Your '+ Userchoice +'  beats '+ computerChoice ;
        msg.style.backgroundColor='green';
        userScore++;
        usercount.innerText=userScore;
    }else{
        msg.innerText="You Lost,"+ computerChoice +' beats Your '+Userchoice;
        msg.style.backgroundColor='red';
        compScore++;
        computercount.innerText=compScore;
    }
}
const draw=()=>{
    // console.log("Draw a game");
    msg.innerText="Draw Match,Play Again"
    msg.style.backgroundColor='Yellow';
}


const genRandomChoice= () =>{
    const options=["rock","Scissor","paper"];
    const compGen=Math.floor(Math.random()*3);
    return options[compGen];
}

const game=(Userchoice)=>{
    // console.log("User choice",Userchoice);
    let computerChoice=genRandomChoice();
    // console.log("Computer Choice",computerChoice);
    if(Userchoice===computerChoice){
       draw();
        
    }else{
        let userWin=true;
        if(Userchoice==="paper"){
            userWin=computerChoice==="Scissor"?false:true;
        }
        else if(Userchoice==="rock"){
            userWin=computerChoice==="paper"?false:true;
        }
        else{
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin,Userchoice,computerChoice)

    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const Userchoice=choice.getAttribute("id");
        // console.log("clicked", Userchoice);
        game(Userchoice);
    });
    
});

