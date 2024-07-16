let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#newGamebtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let moves=0; 
// playerX,playerO
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const showDraw=()=>{
msg.innerText="It is a draw Start Again!";
msgcontainer.classList.remove("hide");
}
const resetgame=()=>{
    turnO=true;
    enableboxes();
    moves=0;
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button is clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        moves++;
         checkWinner();
    });
});
const diasableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
        msg.innerText=`Winner is ${winner}`
        msgcontainer.classList.remove("hide");
        diasableboxes();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2 &&pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    }
    if(moves===9){
     console.log("It's a draw");
     showDraw();
    }
}
newGamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);