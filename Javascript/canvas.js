let context = document.getElementById("myCanvas").getContext("2d");
// canvas.drawPokerCard(10, 10, 80, 'hearts', '6');
let positionX = [0, 90, 180, 270, 360, 450, 540, 630, 720];
let positionY = [0, 90, 180, 270];
// let size = [60, 80]
let suitCardCanvas = ['hearts', 'diamonds', 'spades', 'clubs'];
let cardNum = ['a', 2, 3, 4, 5, 6, 7, 8, 9]

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
