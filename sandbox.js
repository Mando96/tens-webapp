function flipCard() {
    inRound = true
  
    const btnEle1 = document.querySelector(".btn1")
    const btnEle2 = document.querySelector(".btn2")
    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()
    const alphaCard = []
    const alphaDeckCount = alphaDeck.numberOfCards + 2
  
   // btnEle1.addEventListener("click", () => { playerCardSlot.appendChild(playerCard.getHTML()) })
    //btnEle2.addEventListener("click", () => { computerCardSlot.appendChild(computerCard.getHTML())})
    

    /* Adding the Card to the Slot */
    computerCardSlot.appendChild(computerCard.getHTML())
    playerCardSlot.appendChild(playerCard.getHTML())
    //alphaCardSlot.appendChild(alphaCard.getHTML())
  

    /* What to do if the Function isRound is true*/

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

    /* What to do if the Function isGameover is true */
  
    if (isGameOver(playerDeck)) {
      text.innerText = "You Lose!!"
      stop = true
    } else if (isGameOver(computerDeck)) {
      text.innerText = "You Win!!"
      stop = true
    }
  }

  
  if (stop) {
    startGame()
    return
  }

  if (inRound) {
    cleanBeforeRound()
  } else {
    flipCards()
  }

i = 0
/*  while (i < numberOfCards ) {
    allow player to press btn
    => flip card2
    if(card1 is fliped){
      flip card2
    }
    else{
      waiting for player 1
    }
    i++;
  }*/