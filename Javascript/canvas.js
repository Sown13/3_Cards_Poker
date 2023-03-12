let context = document.getElementById("myCanvas").getContext("2d");
// canvas.drawPokerCard(10, 10, 80, 'hearts', '6');
let positionX = [0, 90, 180, 270, 360, 450, 540, 630, 720, 810, 900, 990, 1140, 1230, 1320, 1410];
let positionX2 = [0, 90, 180, 270, 360, 450, 540, 630, 720, 810, 900, 990, 1080, 1170, 1260, 1350,1440];
let positionY = [0, 90, 180, 270];
// let size = [60, 80]
let suitCardCanvas = ['hearts', 'diamonds', 'spades', 'clubs'];
let cardNum = ['a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k', 'joker']

let contextHead = document.getElementById("headCanvas").getContext("2d");
for (let c = 0; c < 4; c++) {
    contextHead.drawPokerCard(positionX[c], 0, 120, suitCardCanvas[Math.floor(Math.random() * 4)], cardNum[Math.floor(Math.random() * 14)])
}
for (let c = 12; c < 16; c++) {
    contextHead.drawPokerCard(positionX[c], 0, 120, suitCardCanvas[Math.floor(Math.random() * 4)], cardNum[Math.floor(Math.random() * 4)])
}

//HEADER--------------------
contextHead.fillStyle = "#FFD700";
contextHead.font = `35px Papyrus`;
contextHead.fillText(`-CODE88-`, 530, 40);
contextHead.font = `35px Arial`;
contextHead.fillText(`NHÀ CÁI UY TÍN ĐẾN TỪ`, 410, 100);
// contextHead.font = `60px Copperplate`;
// contextHead.fillText(`CODEGYM`,830,100);
let logoCodegym = document.getElementById("logoCodegym");
contextHead.drawImage(logoCodegym, 830, 50);

//FOOTER--------------------

let contextFoot = document.getElementById("footCanvas").getContext("2d");
for (let c = 0; c < 17; c++) {
    contextFoot.drawPokerCard(positionX2[c], 0, 80, suitCardCanvas[Math.floor(Math.random() * 4)], 'joker')
}
//--------------------------------------------------------------

function drawWelcome() {
    context.clearRect(0, 0, 800, 370);
    let welcome = document.getElementById("welcome");
    context.drawImage(welcome, 13, -40);
    context.fillStyle = `#F0F8FF`;
    context.font = `20px Arial`;
    context.fillText(`Chào mừng: `, 50, 50);
    context.fillText(`đến với CODE88 `, 200, 260);
    context.font = `18px Lucida Handwriting`;
    context.fillText(`${useres[0].getPlayerName()}`, 110, 80);
    context.fillText(`${useres[1].getPlayerName()}`, 110, 110);
    context.fillText(`${useres[2].getPlayerName()}`, 110, 140);
    context.fillText(`${useres[3].getPlayerName()}`, 110, 170);
    context.fillText(`${useres[4].getPlayerName()}`, 110, 200);
    context.fillText(`${useres[5].getPlayerName()}`, 110, 230);
}


function canvasNewDeck() {
    context.clearRect(0, 0, 800, 370);
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 9; x++) {
            context.drawPokerCard(positionX[x], positionY[y], 100, suitCardCanvas[y], cardNum[x])
        }
    }
}

// let canvasPlayer = document.getElementById("").getContext("2d");
function canvasBackSide() {
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 9; x++) {
            canvas.drawPokerCard(positionX[x], positionY[y], 100, 800, 370)
        }
    }
}

