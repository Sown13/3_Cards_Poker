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
let suits = ['Diamond', 'Heart', 'Club', 'Spade'];
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

    // moneyCal() {
    //     compareScore();
    //     let wallet = this.playerMoney.getPlayerMoney()
    //     if (this.playerName === topPlayer.playerName) {
    //         wallet += betRate * (useres.length - 1);
    //         this.playerMoney.setPlayerMoney(wallet);
    //     } else {
    //         wallet -= betRate;
    //         this.playerMoney.setPlayerMoney(wallet);
    //     }
    // }
}

let useres = [];
let betRate;
let moneyPot;
function newPlayer() {
    useres = [];
    useres.length = parseInt(prompt("Bạn muốn chơi bao nhiêu người? (tối đa 12 người Plz~)"));
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
    console.log(useres)
}

// Make algorithm about Random math and rate


function dealCards() {
    let countCardLeft = deck.length;
    console.log(countCardLeft)
    let numPlayer = useres.length;
    let i = 0;
    for (let x = 0; x < numPlayer; x++) {
        let tempDeck = [];
        useres[x].playerDeck = [];
        for (i = 0; i < 3; i++) {
            let cardIndexRemove = Math.floor(Math.random() * (countCardLeft - i - (x * 3)));
            console.log(cardIndexRemove);
            tempDeck.push(deck[cardIndexRemove]);
            useres[x].playerDeck = tempDeck;
            deck.splice(cardIndexRemove, 1)
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


function callFindTopCard() {
    for (let x = 0; x < useres.length; x++) {
        useres[x].findTopCard();
        console.log(useres[x].findTopCard())
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
    let topSuitSpecial = useres[0].findTopCard().getSpecialCardValue()
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
    return topPlayer;
}

function testPerfomance() {
    makeNewDeck();
    dealCards();
    callFindTopCard();
    compareScore();
    console.log(useres)
}