let gameseq=[];
let userseq=[];

let level=0;
let started=false;
let h2=document.querySelector("h2");
let btns=["red", "green", "blue","purple"];

document.addEventListener("keypress" , function (){
   if(started==false){
    console.log("game is started");
    started=true;
   }
   levelup();

})
 function btnflash(btn){
    btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
}, 250);

 }
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let rend=Math.floor(Math.random()*3);
    let rendc=btns[rend];
    let rbtn=document.querySelector(`.${rendc}`);
    gameseq.push(rendc);
    console.log(gameseq);
    btnflash(rbtn);

}
function checkans(idx){

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML= `game over  your score is <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor ="white";
    } , 250);
        resetgame();
    }

}
function btnpress(){
   
    let btn=this;
    btnflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn .addEventListener("click", btnpress);
}
function resetgame(){
    level=0;
    started=false;
    gameseq=[];
    userseq=[];

}