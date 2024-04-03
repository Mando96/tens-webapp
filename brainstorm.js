
function flipCards() {
    inRound = true
  
    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()
    const alphaCard = []
    const alphaDeckCount = alphaDeck.numberOfCards + 2
    
    i
    playerCardSlot.appendChild(playerCard.getHTML())
    computerCardSlot.appendChild(computerCard.getHTML())
    //alphaCardSlot.appendChild(alphaCard.getHTML())
  
    if (isRoundWinner(playerCard, computerCard, alphaCard)) {
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
  
    if (isGameOver(playerDeck)) {
      text.innerText = "You Lose!!"
      stop = true
    } else if (isGameOver(computerDeck)) {
      text.innerText = "You Win!!"
      stop = true
    }
  }
  
  function updateDeckCount() {
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innerText = playerDeck.numberOfCards
    alphaDeckElement.innerText = alphaDeck.numberOfCards
  }
  
  function isRoundWinner(cardOne, cardTwo) {
    let x = CARD_VALUE_MAP[cardOne.suit]
    let y = CARD_VALUE_MAP[cardTwo.suit]
    let sum, sub, val
  
    sum = x + y
  
    if (x > y) {
      sub = x - y
    } else {
      sub = y -x
    }
  
    if (sum % 10 === 0 || sub % 10 === 0) {
      val = true
    } else {
      val = false
    }
    return val
  }