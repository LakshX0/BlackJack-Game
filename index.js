let player = {
    name: "Lakshan",
    chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " :$" + player.chips

function getRandomCard() {

    let shuffle =  Math.floor(Math.random() *13) + 1

    if (shuffle > 11) {
        return 10
    } else if (shuffle === 1) {
        return 11
    } else {
        return shuffle
    }
    
}

function startGame() {
    isAlive = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {

    if (isAlive === true && hasBlackJack === false) {

    let card = getRandomCard()
    sum += card
    // Push the card to the cards array
    cards.push(card)
    console.log(cards)
    renderGame()
    }
    
    
}
