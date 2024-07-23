let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-btn");
let msgcontainer=document.querySelector("#msg-container");
let msg=document.querySelector("#msg");

let turnO= true;

//2d array of ein pattern
const winpattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetgame=()=>{
    turnO=true;
    enableboxes();
    msg.innerText=" ";
    count=0;
    
};

let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box is clicked");
        if(turnO){
            box.innerHTML="O";
            turnO=false;
            count++;
        }else{
            box.innerHTML="X";
            turnO=true;
            count++;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disablebox=()=>{
    for(let box of boxes ){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=" ";
    }
    
};
const showwinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    disablebox();
    
};
const draw=()=>{
    msg.innerText="The match is draw..  There is no winner";
}

const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);

            }
        }
        if(count==9){
            draw();
        }
    }
};
newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

