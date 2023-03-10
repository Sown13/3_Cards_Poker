class Cards {
    constructor(value, suit, suitScore) {
        this.cardValue = value;
        this.cardSuit = suit;
        this.cardSuitScore = suitScore;
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
}

// Make a new deck
let suits = ['Diamond', 'Heart', 'Club', 'Spade'];
let suitScores = [4, 3, 2, 1];
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
            deck.push(cardInDeck);
        }
    }
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

    setPlayerDeck(arrayNew) {
        this.playerDeck = arrayNew;
    }

    getPlayerDeck() {
        return this.playerDeck;
    }

    findTopCard() {
        let topCard = new Cards();
        let topSuitScore = parseInt(this.playerDeck[0].getCardSuitScore());
        let topSuit = this.playerDeck[0].getCardSuit();
        let topCardValue = parseInt(this.playerDeck[0].getCardValue())
        for (let y = 1; y < 3; y++) {
            if (topSuitScore === parseInt(this.playerDeck[y].getCardSuitScore())) {
                if (topCardValue < this.playerDeck[y].getCardValue()) {
                    topCardValue = this.playerDeck[y].getCardValue();
                    topSuit = this.playerDeck[y].getCardSuit();
                    topSuitScore = this.playerDeck[y].getCardSuitScore();
                    topCard.setCardValue(topCardValue);
                    topCard.setCardSuit(topSuit);
                    topCard.setCardSuitScore(topSuitScore);
                } else {
                    topCard.setCardValue(topCardValue);
                    topCard.setCardSuit(topSuit);
                    topCard.setCardSuitScore(topSuitScore);
                }
            } else if (topSuitScore < parseInt(this.playerDeck[y].getCardSuitScore())) {
                topSuitScore = parseInt(this.playerDeck[y].getCardSuitScore());
                topCardValue = this.playerDeck[y].getCardValue();
                topSuit = this.playerDeck[y].getCardSuit();
                topCard.setCardValue(topCardValue);
                topCard.setCardSuit(topSuit);
                topCard.setCardSuitScore(topSuitScore);
            } else {
                topCard.setCardValue(topCardValue);
                topCard.setCardSuit(topSuit);
                topCard.setCardSuitScore(topSuitScore);
            }
        }
        return topCard;
    }
}

let useres = [];

function newPlayer() {
    useres = [];
    useres.length = parseInt(prompt("Số người chơi (làm ơn nhập số <= 6 Plz~)"));
    for (let x = 0; x < useres.length; x++) {
        let player = new Players();
        let playerName = prompt(`Nhập tên người chơi thứ ${x + 1}`);
        player.setPlayerName(playerName);
        player.setPlayerScore(0);
        let playerMoney = parseInt(prompt(`Nhập số tiền người chơi thứ ${x + 1}`))
        player.setPlayerMoney(playerMoney);
        useres[x] = player;
    }
    console.log(useres)
}

function dealCards() {
    let numPlayer = useres.length;
    let i = 0;
    for (let x = 0; x < numPlayer; x++) {
        let tempDeck = [];
        useres[x].playerDeck = [];
        for (i = 0; i < 3; i++) {
            let cardIndex = Math.floor(Math.random() * (36 - i - (x * 3)));
            console.log(cardIndex);
            tempDeck.push(deck[cardIndex]);
            useres[x].playerDeck = tempDeck;
            deck.splice(cardIndex, 1)
        }
    }
    calPlayerScore();
    callFindTopCard();
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

// function findTopCard() {
//     let topCard = new Cards();
//     let topSuitScore = parseInt(useres.playerDeck[0].getCardSuitScore());
//     let topSuit = useres.playerDeck[0].getCardSuit();
//     let topCardValue = parseInt(useres.playerDeck[0].getCardValue())
//     for (let y = 1; y < 3; y++) {
//         if (topSuitScore === parseInt(useres.playerDeck[y].getCardSuitScore())) {
//             if (topCardValue < useres.playerDeck[y].getCardValue()) {
//                 topCardValue = useres.playerDeck[y].getCardValue();
//                 topSuit = useres.playerDeck[y].getCardSuit();
//                 topSuitScore = useres.playerDeck[y].getCardSuitScore();
//                 topCard.setCardValue(topCardValue);
//                 topCard.setCardSuit(topSuit);
//                 topCard.setCardSuitScore(topSuitScore);
//             }
//         } else if (topSuitScore < parseInt(useres.playerDeck[y].getCardSuitScore())){
//             topSuitScore = parseInt(useres.playerDeck[y].getCardSuitScore());
//             topCardValue = useres.playerDeck[y].getCardValue();
//             topSuit = useres.playerDeck[y].getCardSuit();
//             topCard.setCardValue(topCardValue);
//             topCard.setCardSuit(topSuit);
//             topCard.setCardSuitScore(topSuitScore);
//         }
//     } console.log(topCard)
// }

function callFindTopCard() {
    for (let x = 0; x < useres.length; x++) {
        useres[x].findTopCard();
        console.log(useres[x].findTopCard())
    }
}

function compareScore() {
    let topPlayer = new Players();
    let top = useres[0].getPlayerScore();
    let indexTop = 0;
    let nameTop = useres[0].getPlayerName();
    for (let x = 1; x < useres.length; x++) {
        if (top < useres[x].getPlayerScore()) {
            top = useres[x].getPlayerScore();
            nameTop = useres[x].getPlayerName();
            topPlayer.setPlayerName(nameTop)
        } else topPlayer.setPlayerName(nameTop)
    }
    console.log(topPlayer)
    return topPlayer
}
function testPerfomance(){
    makeNewDeck();
    dealCards();
    callFindTopCard();
    compareScore();
    console.log(useres)
}