function spinner() {
  const x = -1000
  const y = -3000

  const deg = Math.floor(Math.random() * (x - y)) + y
  const trunk = Math.floor(deg/360)
  const numero = deg - trunk * 360

  // setTimeout(() => {
  //   console.log(varGame)
  // }, 500);

  $('.contanerRoulette').css('transform', 'rotate('+deg+'deg)')
  setTimeout(() => {
    $('.contanerRoulette').css('transition', 'none')
    $('.contanerRoulette').css('transform', 'rotate('+numero+'deg)')
  }, 3000);

  if (numero >= 30 && numero <= 90) {
    varGame.numberRoulette = 6
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all ease 3s')
      $('.contanerRoulette').css('transform', 'rotate(60deg)')
    }, 3008);
  } else if (numero > 90 && numero <= 150) {
    varGame.numberRoulette = 5
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all ease 3s')
      $('.contanerRoulette').css('transform', 'rotate(120deg)')
    }, 3008);
  } else if (numero > 150 && numero <= 210) {
    varGame.numberRoulette = 4
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all ease 3s')
      $('.contanerRoulette').css('transform', 'rotate(180deg)')
    }, 3008);
  } else if (numero > 210 && numero <= 270) {
    varGame.numberRoulette = 3
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all ease 3s')
      $('.contanerRoulette').css('transform', 'rotate(240deg)')
    }, 3008);
  } else if (numero > 270 && numero <= 330) {
    varGame.numberRoulette = 2
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all ease 3s')
      $('.contanerRoulette').css('transform', 'rotate(300deg)')
    }, 3008);
  } else if (numero > 330 && numero <= 360) {
    varGame.numberRoulette = 1
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all ease 3s')
      $('.contanerRoulette').css('transform', 'rotate(360deg)')
    }, 3008);
  } else if (numero > 0 && numero <= 30) {
    varGame.numberRoulette = 1
    setTimeout(() => {
      $('.contanerRoulette').css('transition', 'all ease 3s')
      $('.contanerRoulette').css('transform', 'rotate(0deg)')
    }, 3008);
  }


}
