// Write code below 💖

console.log("hello there");
let computer =Math.floor(Math.random() *3);
let player='Rock';

if(computer === 0){
  choice='Rock';
} else if(computer ===1){
  choice='Paper';
} else {
  choice='Scissors';
}

console.log("Computer picked:", choice);
console.log("Player picked:",player);

if((player==='Rock' && choice==='Scissors')||(player ==='Paper' && choice==='Rock') || (player==='Scissors' && choice==='Paper')){
    console.log("Player won");
} else if(player===choice){
  console.log("Draw");
}