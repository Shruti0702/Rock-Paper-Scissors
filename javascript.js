let user=0;
let comp_score=0;
const choice=document.querySelectorAll(".choices");
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user");
const computer_score=document.querySelector("#computer");
const computerchoice=()=>{
    const option=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    return option[index];
}
const showwinner=(userWin) =>{
    if(userWin){
        user++;
        userscore.innerText=user;
        console.log("You win..");
        msg.innerText="You win";
        msg.style.backgroundColor="green";
    }
    else{
        comp_score++;
        computer_score.innerText=comp_score;
        console.log("You lose..");
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    //generating computer choice
    let userwin=true;
    console.log("userchoice",userchoice);
    const computer= computerchoice();
    console.log("computerchoice",computer);
    if (userchoice===computer){
        console.log("It's are draw");
        msg.innerText="Draw!!";
        msg.style.backgroundColor="green";
    }
    else 
    {
        if((userchoice==="paper" && computer==="scissors")||(userchoice==="scissors" && computer==="rock")||(userchoice==="rock" && computer==="paper"))
        {
            userwin=false;
        }
        else
        {
            userwin=true;
        }
        showwinner(userwin);
    }
}
choice.forEach( (choices) => {
    choices.addEventListener("click", ()=> 
    {
    const userid=choices.getAttribute("id");
    console.log("choice was clicked..",userid);
    playgame(userid);
    });
});