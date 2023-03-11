let canvas = document.getElementById("myCanvas").getContext("2d");
// canvas.drawPokerCard(10, 10, 80, 'hearts', '6');
let positionX = [0,60,120,180,240,300,360,420,480];
let positionY = [0,80,160,240];
let size = [60,80]
let suitCardCanvas =['hearts','diamonds','spades','clubs'];
let cardNum = ['a',2,3,4,5,6,7,8,9]
for (let y=0;y<4;y++){
    for(let x=0;x<9;x++){
        canvas.drawPokerCard(positionX[x],positionY[y],100,suitCardCanvas[y],cardNum[x])
    }
}