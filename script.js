import Deck from "./deck.js"

const btnEle = document.querySelector(".btn")

function gameon() {

  const CARD_VALUE_MAP = { 
  "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10,
  "11": 12, "12": 12, "13": 13, "14": 14, "15": 15, "16": 16, "17": 17, "18": 18, "19": 19, "20": 20,
  "21": 21, "22": 22, "23": 23, "24": 24, "25": 25, "26": 26, "27": 27, "28": 28, "29": 29, "30": 30,
  "31": 31, "32": 32, "33": 33, "34": 34, "35": 35, "36": 36, "37": 37, "38": 38, "39": 39, "40": 40,
  "41": 41, "42": 42, "43": 43, "44": 44, "45": 45, "46": 46, "47": 47, "48": 48, "49": 49, "40": 40,
  "51": 51, "52": 52, "53": 53, "54": 54, "55": 55, "56": 56, "57": 57, "58": 58, "59": 59, "60": 60 
  }

  const computerCardSlot = document.querySelector(".computer-card-slot")
  const playerCardSlot = document.querySelector(".player-card-slot")
  const alphaCardSlot = document.querySelector(".alpha-card-slot")
  const computerDeckElement = document.querySelector(".computer-deck")
  const playerDeckElement = document.querySelector(".player-deck")
  const alphaDeckElement = document.querySelector(".alpha-deck")
  const text = document.querySelector(".text")
  const thetime = 500
  const btnEle3 = document.querySelector(".btn3")

  let playerDeck, alphaDeck, computerDeck, inRound, stop


  btnEle3.addEventListener("click", () => {
    if (stop) {
      realone()
      return
    }

    if (inRound) {
      cleanBeforeRound()
      console.log("Sex")
    } else {
      flip()
    }
  })

  realone()
  function realone() {
    startGame()
    inRound = false
    stop = false
  }

  function startGame() {
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
    alphaDeck = new Deck(deck.cards.slice(-1, 0))

    cleanBeforeRound()
  }

  function cleanBeforeRound() {
    inRound = false
    playerCardSlot.innerHTML = ""
    computerCardSlot.innerHTML = ""
    alphaCardSlot.innerHTML = ""
    text.innerText = ""

    updateDeckCount()
  }

  function flip() {
    inRound = true

    const computerCard = computerDeck.pop()
    const playerCard = playerDeck.pop()
    const alphaCard = []
    const alphaDeckCount = alphaDeck.numberOfCards + 2

    console.log()

    updateDeckCount()

    playerCardSlot.appendChild(playerCard.getHTML())

    setTimeout(function () {
      computerCardSlot.appendChild(computerCard.getHTML())
      const win = document.querySelector(".btn5")

      if (isRoundWinner(playerCard, computerCard, alphaCard)) {
        text.innerText = "You Rock!!😗"
        alphaDeck.push(computerCard)
        alphaDeck.push(playerCard)
      } else {
        text.innerText = "Stale"
        alphaDeck.push(computerCard)
        alphaDeck.push(playerCard)
      }

     /* win.addEventListener("click", () => {

      if (isRoundWinner( playerCard, computerCard, alphaCard)) {
        text.innerText = "Win"
        for (let i = 0; i < alphaDeckCount; i++) {
          playerDeck.push(alphaCard)
          alphaDeck.pop(alphaCard)
        }
      }
      else if (isRoundWinner(computerCard, playerCard, alphaCard)) {
        text.innerText = "Lose"
        for (let i = 0; i < alphaDeckCount; i++) {
          computerDeck.push(alphaCard)
          alphaDeck.pop(alphaCard)
        }
      }
      else {
        text.innerText = "Stale"
        alphaDeck.push(computerCard)
        alphaDeck.push(playerCard)
      }

      })*/

    }, thetime)
    
    if (isGameOver(playerDeck)) {
      text.innerText = "You Lose!!"
      stop = true
    } else if (isGameOver(computerDeck)) {
      text.innerText = "You Win!!"
      stop = true
    }
    
  }

  function updateDeckCount() {
    playerDeckElement.innerText = playerDeck.numberOfCards
    alphaDeckElement.innerText = alphaDeck.numberOfCards
    setTimeout(function () {
      computerDeckElement.innerText = computerDeck.numberOfCards
    }, thetime)
  }


  function isRoundWinner(cardOne, cardTwo) {
    let x = CARD_VALUE_MAP[cardOne.suit]
    let y = CARD_VALUE_MAP[cardTwo.suit]
    let sum, sub, val

    sum = x + y

    if (x > y) {
      sub = x - y
    } else {
      sub = y - x
    }

    if (sum % 10 === 0 || sub % 10 === 0) {
      val = true
    } else {
      val = false
    }
    return val
  }

  function isGameOver(deck) {
    return deck.numberOfCards === 0
  }

}

btnEle.addEventListener("click", () => {
  gameon()
})