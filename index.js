let boxes=document.querySelectorAll(".box");
let btnReset=document.querySelector("#btn-reset");
let winner=document.querySelector(".winner");
let btnNewGame=document.querySelector("#newGame");

let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let turnO=true;
let count=0;
let winFlag=false;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.style.color="black";
            box.innerText="O";
            turnO=false;
        }
        else{
            box.style.color="red";;
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        checkWinner();
    })
});

const resetGame=()=>{
    turnO=true;
    winFlag=false;
    count=0;
    enableBoxes();
    winner.classList.add("hide");
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;

        if(posVal1!=="" && posVal1===posVal2 && posVal2===posVal3){
            winFlag=true;
            showWinner(posVal1); 
        }
        else if(count===9 && !winFlag){
            document.querySelector("#win").innerText="Gmae : DRAW \n\n No Winners";
            winner.classList.remove("hide");
            disableBoxes();
        }
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(posVal1)=>{
    document.querySelector("#win").innerText=`Congratulations!! Winner is ${posVal1}`;
    winner.classList.remove("hide");
    disableBoxes();
};

btnReset.addEventListener("click",resetGame);
btnNewGame.addEventListener("click",resetGame);