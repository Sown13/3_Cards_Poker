class Cards {
    constructor(value, suit, suitScore, specialValue) {
        this.cardValue = value;
        this.cardSuit = suit;
        this.cardSuitScore = suitScore;
        this.cardSpecial = specialValue;
    }

    getCardValue() {
        return this.cardValue;
    }

    getCardSuit() {
        return this.cardSuit;
    }

    getCardSuitScore() {
        return this.cardSuitScore;
    }

    setCardValue(value) {
        this.cardValue = value;
    }

    setCardSuit(suit) {
        this.cardSuit = suit;
    }

    setCardSuitScore(suitScore) {
        this.cardSuitScore = suitScore;
    }

    getSpecialCardValue() {
        return this.cardSpecial;
    }

    setSpecialCardValue(specialValue) {
        this.cardSpecial = specialValue;
    }
}


// Make a new deck
let suits = ['diamonds', 'hearts', 'clubs', 'spades'];
let suitScores = [4, 3, 2, 1];
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialValues = [10, 2, 3, 4, 5, 6, 7, 8, 9];
let deck = [];

function makeNewDeck() {
    deck = [];
    for (let i = 0; i < 4; i++) {
        let j = 0;
        for (j = 0; j < values.length; j++) {
            let cardInDeck = new Cards();
            cardInDeck.setCardSuit(suits[i]);
            cardInDeck.setCardSuitScore(suitScores[i]);
            cardInDeck.setCardValue(values[j]);
            cardInDeck.setSpecialCardValue(specialValues[j]);
            deck.push(cardInDeck);
        }
    }
    canvasNewDeck();
    console.log(deck)
}

// User~Player~PalyerDeck

class Players {
    constructor(name, score, money) {
        this.playerName = name;
        this.playerScore = score;
        this.playerMoney = money;
        this.playerDeck = [];
    }

    getPlayerScore() {
        return this.playerScore;
    }

    getPlayerName() {
        return this.playerName;
    }

    getPlayerMoney() {
        return this.playerMoney;
    }

    setPlayerMoney(money) {
        this.playerMoney = money;
    }

    setPlayerScore(score) {
        this.playerScore = score;
    }

    setPlayerName(name) {
        this.playerName = name;
    }

    // setPlayerDeck(arrayNew) {
    //     this.playerDeck = arrayNew;
    // }

    // getPlayerDeck() {
    //     return this.playerDeck;
    // }

    findTopCard() {
        let topCard = new Cards();
        let topSuitScore = parseInt(this.playerDeck[0].getCardSuitScore());
        let topSuit = this.playerDeck[0].getCardSuit();
        let topCardValue = parseInt(this.playerDeck[0].getSpecialCardValue())
        for (let y = 1; y < 3; y++) {
            if (topSuitScore === parseInt(this.playerDeck[y].getCardSuitScore())) {
                if (topCardValue < this.playerDeck[y].getSpecialCardValue()) {
                    topCardValue = this.playerDeck[y].getSpecialCardValue();
                    topSuit = this.playerDeck[y].getCardSuit();
                    topSuitScore = this.playerDeck[y].getCardSuitScore();
                    topCard.setSpecialCardValue(topCardValue);
                    topCard.setCardSuit(topSuit);
                    topCard.setCardSuitScore(topSuitScore);
                } else {
                    topCard.setSpecialCardValue(topCardValue);
                    topCard.setCardSuit(topSuit);
                    topCard.setCardSuitScore(topSuitScore);
                }
            } else if (topSuitScore < parseInt(this.playerDeck[y].getCardSuitScore())) {
                topSuitScore = parseInt(this.playerDeck[y].getCardSuitScore());
                topCardValue = this.playerDeck[y].getSpecialCardValue();
                topSuit = this.playerDeck[y].getCardSuit();
                topCard.setSpecialCardValue(topCardValue);
                topCard.setCardSuit(topSuit);
                topCard.setCardSuitScore(topSuitScore);
            } else {
                topCard.setSpecialCardValue(topCardValue);
                topCard.setCardSuit(topSuit);
                topCard.setCardSuitScore(topSuitScore);
            }
        }
        return topCard;
    }
}

let useres = [];
let betRate;
let moneyPot;


function newPlayer() {
    useres = [];
    useres.length = Math.abs(parseInt(prompt("Bạn muốn chơi bao nhiêu người? (tối đa 6)")));
    if (useres.length > 6) {
        useres.length = 6
    }
    for (let x = 0; x < useres.length; x++) {
        let player = new Players();
        let playerName = prompt(`Nhập tên người chơi thứ ${x + 1}`);
        player.setPlayerName(playerName);
        player.setPlayerScore(0);
        let playerMoney = parseInt(prompt(`Nhập số tiền người chơi thứ ${x + 1}`))
        player.setPlayerMoney(playerMoney);
        useres[x] = player;
    }
    betRate = parseInt(prompt("Nhập số tiền bạn muốn đặt cược mỗi lần chơi"));
    createNameAndMoney();
    console.log(useres)
}

// Make algorithm about Random math and rate


function dealCards() {
    let countCardLeft = deck.length;
    console.log(countCardLeft);
    let i = 0;
    for (let x = 0; x < useres.length; x++) {
        let tempDeck = [];
        let wallet = useres[x].getPlayerMoney();
        let walletLeft = wallet - betRate;
        useres[x].setPlayerMoney(walletLeft);
        useres[x].playerDeck = [];
        let contextPlayer = document.getElementById(`canvasPlayer${x + 1}`).getContext("2d");
        for (i = 0; i < 3; i++) {
            let cardIndexRemove = Math.floor(Math.random() * (countCardLeft - i - (x * 3)));
            tempDeck.push(deck[cardIndexRemove]);
            useres[x].playerDeck = tempDeck;
            let tempValue = useres[x].playerDeck[i].getCardValue();
            if (tempValue === 1) {
                tempValue = 'a'
            }
            contextPlayer.drawPokerCard(60 * i + 30, 30, 80, useres[x].playerDeck[i].getCardSuit(), tempValue)
            deck.splice(cardIndexRemove, 1)
        }
    }
    // canvasBackSide();
    moneyPot = betRate * useres.length;
    calPlayerScore();
    callFindTopCard();
    showScoreAndTopCard();
    console.log(useres);
    console.log(deck);
}

function calPlayerScore() {
    for (let x = 0; x < useres.length; x++) {
        let total = 0;
        for (let y = 0; y < 3; y++)
            total += parseInt(useres[x].playerDeck[y].getCardValue())
        useres[x].setPlayerScore(take2ndDiggit(total));
    }
}

function take2ndDiggit(number) {
    let c = number - (Math.floor(number / 10)) * 10;
    if (c === 0) {
        return 10;
    }
    return c;
}


function callFindTopCard() {
    for (let x = 0; x < useres.length; x++) {
        useres[x].findTopCard();
    }
}

let topPlayer = new Players();

function compareScore() {
    calPlayerScore();
    callFindTopCard();
    // let topPlayer = new Players();
    let topScore = useres[0].getPlayerScore();
    // let indexTop = 0;
    let topSuit = useres[0].findTopCard().getCardSuitScore();
    let topSuitSpecial = useres[0].findTopCard().getSpecialCardValue();
    let nameTop = useres[0].getPlayerName();
    for (let x = 1; x < useres.length; x++) {
        if (topScore === useres[x].getPlayerScore()) {
            if (topSuit === useres[x].findTopCard().getCardSuitScore()) {
                if (topSuitSpecial < useres[x].findTopCard().getSpecialCardValue()) {
                    topSuitSpecial = useres[x].findTopCard().getSpecialCardValue();
                    topSuit = useres[x].findTopCard().getCardSuitScore();
                    topScore = useres[x].getPlayerScore();
                    nameTop = useres[x].getPlayerName();
                    topPlayer.setPlayerName(nameTop);
                    topPlayer.setPlayerScore(topScore);
                } else {
                    topPlayer.setPlayerName(nameTop);
                    topPlayer.setPlayerScore(topScore);
                }
            } else if (topSuit < useres[x].findTopCard().getCardSuitScore()) {
                topSuit = useres[x].findTopCard().getCardSuitScore();
                topScore = useres[x].getPlayerScore();
                nameTop = useres[x].getPlayerName();
                topPlayer.setPlayerName(nameTop);
                topPlayer.setPlayerScore(topScore);
            } else {
                topPlayer.setPlayerName(nameTop);
                topPlayer.setPlayerScore(topScore);
            }
        } else if (topScore < useres[x].getPlayerScore()) {
            topScore = useres[x].getPlayerScore();
            nameTop = useres[x].getPlayerName();
            topPlayer.setPlayerName(nameTop);
            topPlayer.setPlayerScore(topScore);
        } else {
            topPlayer.setPlayerName(nameTop);
            topPlayer.setPlayerScore(topScore);
        }
    }
    console.log(topPlayer);
    topPlayer.setPlayerName(nameTop);
    topPlayer.setPlayerScore(topScore);
    calMoney();
    checkMoney();
    createNameAndMoney();
    displayToBoard();
    console.log(useres)
}

/// idea: thêm ID người chơi, sẽ không lo vấn đề 2 người chơi cùng tên.
function calMoney() {
    for (let x = 0; x < useres.length; x++) {
        if (useres[x].getPlayerName() === topPlayer.getPlayerName()) {
            let tempWallet = useres[x].getPlayerMoney();
            tempWallet += moneyPot;
            useres[x].setPlayerMoney(tempWallet);
            moneyPot = 0;
            break;
        }
    }
}

let useresRemoved = [];

function checkMoney() {
    let loserPlayer = new Players();
    for (let x = 0; x < useres.length; x++) {
        if (useres[x].playerMoney <= 0) {
            loserPlayer = useres[x];
            useres.splice(x, 1);
            useresRemoved.push(loserPlayer);
            let contextPlayer = document.getElementById(`canvasPlayer${useres.length + 1}`).getContext("2d");
            contextPlayer.clearRect(0, 0, 245, 150);
            document.getElementById(`nameP${useres.length + 1}`).innerHTML = ``;
            document.getElementById(`moneyP${useres.length + 1}`).innerHTML = ``;
            document.getElementById(`sum${useres.length + 1}`).innerHTML = ``;
            document.getElementById(`topCard${useres.length + 1}`).innerHTML = ``;
        }
    }
    console.log(useresRemoved)
}

// function checkFinalWinner() {
//     if (useres.length === 1) {
//         context.clearRect(0, 0, 800, 370);
//         context.fillStyle = `#00FFFF`;
//         context.font = "50px Arial";
//         context.fillText(`Final Winner: ${useres[0].getPlayerName()}`, 30, 200);
//     }
// }

function playQuick() {
    makeNewDeck();
    dealCards();
    compareScore();
    console.log(useres)
}

function createNameAndMoney() {
    for (let x = 0; x < useres.length; x++) {
        document.getElementById(`nameP${x + 1}`).innerHTML = useres[x].getPlayerName();
        document.getElementById(`moneyP${x + 1}`).innerHTML = useres[x].getPlayerMoney();
    }
}

function showScoreAndTopCard() {
    for (let x = 0; x < useres.length; x++) {
        document.getElementById(`sum${x + 1}`).innerHTML = useres[x].getPlayerScore();
        document.getElementById(`topCard${x + 1}`).innerHTML = `${useres[x].findTopCard().getSpecialCardValue()} ${useres[x].findTopCard().getCardSuit()}`;
    }
}

function displayToBoard() {
    // document.getElementById(`myCanvas`).innerHTML = `${topPlayer.getPlayerName()}---${topPlayer.getPlayerScore()}`;
    if (useres.length === 1) {
        context.clearRect(0, 0, 800, 370);
        context.fillStyle = `#00FFFF`;
        context.font = "50px Arial";
        context.fillText(`Final Winner: ${useres[0].getPlayerName()}`, 30, 200);
    } else {
        context.clearRect(0, 0, 800, 370);
        context.fillStyle = `#00FFFF`;
        context.font = "50px Arial";
        context.fillText(`Round Winner: ${topPlayer.getPlayerName()}---${topPlayer.getPlayerScore()} điểm`, 30, 200);
    }
}

let rank = [];

// function rankPlayer() {
//     rank = [];
//     for (let x = 0; x < useres.length; x++) {
//         rank[x] = useres[x].getPlayerMoney();
//     }
//     rank.sort();
// }
//
// function displayRank(){
//     rankPlayer();
//     let display = ``;
//     for (let x=0;x<rank.length;x++){
//         display += `Rank 1 - ${useres[x].getPlayerName()}`
//     }
// }

document.getElementById("newGame").addEventListener("click", newPlayer);
document.getElementById("newDeck").addEventListener("click", makeNewDeck);
document.getElementById("dealCard").addEventListener("click", dealCards);
document.getElementById("dealCard").addEventListener("click", dealCards);
document.getElementById("result").addEventListener("click", compareScore);
document.getElementById("quickPlay").addEventListener("click", playQuick);
