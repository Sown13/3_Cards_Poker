let context = document.getElementById("myCanvas").getContext("2d");
// canvas.drawPokerCard(10, 10, 80, 'hearts', '6');
let positionX = [0, 90, 180, 270, 360, 450, 540, 630, 720, 810, 900, 990, 1140, 1230, 1320, 1410];
let positionX2 = [0, 90, 180, 270, 360, 450, 540, 630, 720, 810, 900, 990, 1080, 1170, 1260, 1350, 1440];
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
    for (let x = 0; x < useres.length; x++) {
        context.font = `18px Lucida Handwriting`;
        context.fillText(`${useres[x].getPlayerName()}`, 110, (80+x*30));
    }
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
            canvas.drawPokerCard(positionX[x], positionY[y], 100)
        }
    }
}

function drawHowToPlay(){
    context.clearRect(0,0,800,370);
    context.fillStyle = `#F0F8FF`;
    context.font = `30px Arial`;
    context.fillText(`Hướng dẫn chơi:`,10,30)
    context.font =`20px Arial`;
    context.fillText(`Sau khi khởi tạo số người chơi, tên người chơi, số tiền tham gia, số tiền cược`,20,60)
    context.fillText(`Ấn nút [Bộ bài mới] để khởi tạo bộ bài mới`,20,90);
    context.fillText(`Ấn nút [Chia bài] để chia bài cho mỗi người chơi `,20,120);
    context.fillText(`Ấn nút [Kết quả] để tính và hiển thị kết quả, thông báo người chiến thắng`,20,150);
    context.fillText(`Có thể tiếp tục chia đến khi hết bài hoặc quay về bước [Bộ bài mới]`,20,180);
    context.fillText(`Có thể ấn nút [Chơi nhanh] để bỏ qua 3 bước trên và đến thẳng kết quả của Round đấu này`,20,210);
    context.fillText(`Luật chơi như luật 3 cây bình thường (trừ việc tính tiền)`,20,240);
    context.fillText(`Qua mỗi vòng đấu, người chiến thắng sẽ nhận được số tiền cược của mỗi người chơi khác`,20,270);
    context.fillText(`Tiếp tục chơi cho đến khi tìm ra người chiến thắng cuối cùng (người duy nhất còn tiền)`,20,300);
}

document.getElementById("howToPlay").addEventListener("click",drawHowToPlay);

function drawPlayerList(){
    context.clearRect(0,0,800,370);
    context.fillStyle = `#00FFFF`;
    context.font = `25px Arial`;
    context.fillText(`Player Name`,70,40);
    context.fillText(`Player Money`,600,40);
    for (let x=0;x<useres.length;x++){
        context.fillText(`${useres[x].getPlayerName()}`,100,90+x*40)
        context.fillText(`------------------------`,300,90+x*40)
        context.fillText(`${useres[x].getPlayerMoney()}  $`,650,90+x*40)
    }
}

document.getElementById("playerList").addEventListener("click",drawPlayerList);

let iconPlayer = [];
function drawIcon() {
    for (let x = 0; x < useres.length; x++) {
        iconPlayer[x] = document.getElementById(`icon${x+1}`)
        iconPlayer.push(iconPlayer[x])
        let contextPlayer = document.getElementById(`canvasPlayer${x+1}`).getContext("2d")
        contextPlayer.clearRect(0,0,245,150);
        contextPlayer.drawImage(iconPlayer[x],50,75);
    }
}

