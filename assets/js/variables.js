// --------------Variables--------------

// NOTE: la variable Money contiene los montos de las cartas, cochinito y cantidad de ceros a mostrar,
// si una carta dice que gano bs. 500.000 corresponde al blueCard en la posicion 5 y se le agregan los ceros
// IMPORTANTE: no quitar el 1 antes de los ceros ya que funciona como multiplicador

let money = {
  ceros: 100000,
  blueCard: [0,1,2,3,4,5,6,7,8,9],
  greenCard: [0, 1.5, 2.5, 6, 7, 8],
  pig: 0
}

// NOTE: cartas (typeCard) segun el array:

// 0 = blueCards
// 1 = cianCards
// 2 = greenCards
// 3 = redCards
// 4 = yellowCards

let randomCard = {
  typeCard: 0,
  new: [0,0,0,0,0],
  old:[[],[],[],[],[]]
}

let settingChild = {
  gameChild : 'boy',
  hair: '#4C141A',
  skin: '#F7C0A2',
  clothes: {
    shirt: '#ff8500',
    pants: '#DB6D06',
  }
}

let varGame = {
  numberRoulette: 1,
  avatarPosition: 0
}
