function randomCardFunction(arrayCard) {
  let min = 0
  let max = cards[randomCard.typeCard].length - 1
  let num = Math.floor(Math.random()*(max-min+1))+min;

  if (randomCard.old[arrayCard].length > max) {
    alert('no hay mas cartas aleatorias')
  } else {
    if (!randomCard.old[arrayCard].includes( num )) {
      randomCard.new[arrayCard] = num
      randomCard.old[arrayCard].push(num)
      console.log(randomCard)
    } else {
      console.log('si lo incluye')
      while (randomCard.old[arrayCard].includes( num )) {
        num = Math.floor(Math.random()*(max-min+1))+min;
      }
      randomCard.new[arrayCard] = num
      randomCard.old[arrayCard].push(num)
    }
  }
}

function viewCard(colorCard, arrayCard) {
  randomCard.typeCard = arrayCard
  // randomCardFunction(arrayCard)
  if (randomCard.new[randomCard.typeCard] < cards[randomCard.typeCard].length) {
    setTimeout(() => {
      $(`.${colorCard} .innerQuestion`).text(cards[randomCard.typeCard][randomCard.new[arrayCard]].text).show()
      if (randomCard.typeCard === 4) {
        $(`.${colorCard} .modalFeedback`).show();
      } else {
        let button = cards[randomCard.typeCard][randomCard.new[arrayCard]].options.map((btn, i) =>{
          return(`<p onclick="response(${btn.valid})"><span>${i + 1}.</span> ${btn.text}</p>`)
        })
        $(`.${colorCard} .modalQuestion`).append(button);
        $(`.${colorCard} .modalQuestion`).show();
      }
    }, 50);

    $(`.${colorCard}`).addClass('selectCard');

    $('#ModalBg').fadeIn()

    setTimeout(() => {
      $(`.${colorCard}`).addClass('showCard');
    }, 400);
  } else {
    alert('no hay mas cartas de este color viewCard')
  }
}

function response(valid) {
  const feedbacks =  cards[randomCard.typeCard][randomCard.new[randomCard.typeCard]].feedback
  const profit = ' Has ganado Bs. ' + (money.blueCard[feedbacks.indexMoney] * money.ceros).toLocaleString() + '.'
  const greenCard = (money.greenCard[feedbacks.indexMoney] * money.ceros)
  $('.innerQuestion').hide()
  $('.modalQuestion').hide()
  $('.modalFeedback').fadeIn()
  if (randomCard.typeCard === 0 ) {
    if (valid === true) {
      $('.modalFeedback p').text(feedbacks.positive + profit)
      money.pig = (money.pig + (money.blueCard[feedbacks.indexMoney] * money.ceros))
      console.log((money.pig))
    } else {
      $('.modalFeedback p').text(feedbacks.negative)
    }
  } else if (randomCard.typeCard === 1 ) {
    if (valid === true) {
      $('.modalFeedback p').text(feedbacks.positive)
      varGame.avatarPosition = varGame.avatarPosition + 1
      console.log(varGame)
    } else {
      $('.modalFeedback p').text(feedbacks.negative)
    }
  } else if (randomCard.typeCard === 2 ) {
    if (valid === true) {
      $('.modalFeedback p').text(feedbacks.positive + (feedbacks.indexMoney ? greenCard.toLocaleString() + '.' : "" ))
      money.pig = money.pig + greenCard
      console.log(greenCard)
    } else {
      $('.modalFeedback p').text(feedbacks.negative + (feedbacks.indexMoney ? greenCard + ' No has ganado dinero.' : ""))
    }
  } else if (randomCard.typeCard === 3 ) {
    if (valid === true) {
      $('.modalFeedback p').text(feedbacks.positive.text + (feedbacks.positive.spend * money.ceros).toLocaleString())
      console.log(feedbacks.positive.spend)
      money.pig = (money.pig - (feedbacks.positive.spend * money.ceros))
      console.log(money)
    } else {
      $('.modalFeedback p').text(feedbacks.negative.text + (feedbacks.negative.spend * money.ceros).toLocaleString())
      money.pig = (money.pig - (feedbacks.negative.spend * money.ceros))
      console.log(money)
    }
  }
}

function hideCards(colorCard) {
  $(`.${colorCard}`).removeClass('showCard');
  setTimeout(() => {
    $(`.${colorCard}`).removeClass('selectCard');
    $(`.${colorCard} .innerQuestion`).text("")
    $(`.${colorCard} .modalQuestion`).text("").show();
    $(`.modalFeedback`).hide()
    $('#ModalBg').fadeOut()
  }, 400);

  // funcion para que se muestre una a una.... eliminar despues
  if (randomCard.new[randomCard.typeCard] > cards[randomCard.typeCard].length) {
    alert('no hay mas cartas de este color')
  } else {
    randomCard.new[randomCard.typeCard] ++
  }

  // console.log(randomCard)
}
