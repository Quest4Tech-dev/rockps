let humanScore=0, compScore=0;
let round=1, maxrounds=5;
function playRound(humanChoice,computerChoice){
       const win={
        rock:"scissor",
        paper:"rock",
        scissor:"paper"
       };
      
       if(computerChoice==win[`${humanChoice}`]){
        alert(`Your choice ${humanChoice} beats computer choice ${computerChoice}`);
        humanScore++;
       }
       else if(computerChoice==humanChoice){
        alert(`this is a tie, computer also choosed ${computerChoice}`);
       }
       else{
        alert(`computer choice ${computerChoice} beats your choice ${humanChoice}`);
        compScore++;
       }
       round++;
       updateround();
       updatescore();
}

function updateround(){
    document.getElementById("round").innerText=`round no: ${round}`;
}

function updatescore(){
    document.querySelector("#score").innerText=` your score is :${humanScore}
                                                 computer score is :${compScore}`
}
function reset(){
    round=1;
    humanScore=0;
    compScore=0;
    updateround();
    updatescore();
    // displayResult();
}

function displayResult(){
    document.querySelector("#result").innerText=`your final score is ${humanScore}
                                                 computer final score is ${compScore}`
                    
    if(humanScore>compScore){
                            alert("you win!!");
                        }
    else if(humanScore==compScore){
                            alert("this is a tie");
                        }
    else{
                            alert("computer wins, you are a looser");
                        }

    
}
function getcomputerchoice(){
        const choices=["rock","paper","scissor"];
        return computerChoice=choices[Math.floor(Math.random()*choices.length)];}



document.querySelector("#rock").addEventListener("click",()=>{
    if(round<maxrounds){
        playRound("rock",getcomputerchoice());
    }
    else{
        displayResult();
        resetgame();
    }
})
document.querySelector("#paper").addEventListener("click",()=>{
    if(round<maxrounds){
        playRound("paper",getcomputerchoice());
    }
    else{
        displayResult();
        resetgame();
    }
})
document.querySelector("#scissor").addEventListener("click",()=>{
    if(round<maxrounds){
        playRound("scissor",getcomputerchoice());
    }
    else{
        displayResult();
        resetgame();
    }
})
if(round<maxrounds){
play=prompt("do you want to play again??").toLowerCase();
if(play!=="yes"){
    alert("thanks for playing");
    displayResult();
    restgame();
}
}




// function getcomputerchoice(){
//     const choices=["rock","paper","scissor"];
//     return computerChoice=choices[Math.floor(Math.random()*choices.length)];
   
// }
// function getHumanChoice(){
//     let humanChoice=prompt("enter your choice from rock, paper and scissor").toLowerCase();
//     while(!["rock","paper","scissor"].includes(humanChoice)){

//         humanChoice=prompt("choice not found! enter your choice from rock, paper and scissor").toLowerCase();
//     }
//     return humanChoice;
//     }

// const rock=document.querySelector("#rock");
// const paper=document.querySelector("#paper");
// const scissor=document.querySelector("#scissor");
// while(true){
// rock.addEventListener("click",()=>{
//     comp=getcomputerchoice();
//     let r="rock";
//     playRound(r,comp);
// })
// paper.addEventListener("click",()=>{
//     comp=getcomputerchoice();
//     let p="paper";
//     playRound(p,comp);
// })
// scissor.addEventListener("click",()=>{
//     comp=getcomputerchoice();
//     let s="scissor";
//     playRound(s,comp);
// })

// const play=prompt("do you want to play again. yes/no").toLowerCase();
// if(play!=="yes"){
//     alert("thanks for playing");
//     break;
// }
// }

// // let i=0;
// // alert("this is a game of five rounds");
// // while(i<5){
// // human=getHumanChoice();
// // comp=getcomputerchoice();
// // playRound(human,comp);

// // //const play=prompt("do you want to play again. yes/no").toLowerCase();
// // // 
// // i++;

// // }
// alert(`your score: ${humanScore}
//     computer score: ${compScore}`);
// if(humanScore>compScore){
//     alert("you win!!");
// }
// else if(humanScore==compScore){
//     alert("this is a tie");
// }
// else{
//     alert("computer wins, you are a looser");
// }
