class Cards {
    constructor(value, suit, suitScore) {
        this.cardValue = value;
        this.cardSuit = suit;
        this.cardSuitScore = suitScore;
    }

    getCardValue() {
        return this.cardValue = valueNumber;
    }

    getCardSuit() {
        return this.cardSuit = suit;
    }

    getCardSuitScore() {
        return this.cardSuitScore = suitScore;
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

// User

class Players {
    constructor(name, score, money) {
        this.playerName = name;
        this.playerScore = score;
        this.playerMoney = money;
        this.playerDeck = [];
    }

    getPlayerScore() {
        return this.playerScore = score;
    }

    getPlayerName() {
        return this.playerName = name;
    }

    getPlayerMoney() {
        return this.playerMoney = money;
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
    for (x = 0; x < numPlayer; x++) {
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
    console.log(useres);
    console.log(deck);
}

