$(window).on('load', function () {
  setTimeout(() => {
    $('#loaderContainer').fadeOut()
    $('#cont').show()
  }, 1500);
});

let offset

if (screen.width > 768){
  offset = 200
} else {
  offset = 0
}

new WOW({offset:offset, scrollContainer: null}).init()

let cards = []

const getCards = async() => {
  let data = await fetch('components/GameCards.json')
  cards = await data.json()
}

$(document).ready(function() {
  $('#Start').load('components/Start.html');
  $('#Avatar').load('components/Avatar.html');
  $('#Awards').load('components/Awards.html');
  $('#Game').load('components/Game.html');
  $('#Store').load('components/Store.html');
  getCards()

  setTimeout(() => {
    console.log(cards[0][0].feedback.positive)
  }, 1000);
});

// --------------change-screen-----------

function nextAvatar() {
  $('#Avatar .imgAvatar').load(`assets/icons/${settingChild.gameChild}.svg`);
  $('#Start').hide()
  $('#Avatar').show()
}

function nextAwards() {
  $('#Avatar').hide()
  $('#Awards').show()
  $('#Awards .imgAvatar').load(`assets/icons/${settingChild.gameChild}.svg`);
  setTimeout(() => {
    $('.imgAvatar .hair').attr('fill', settingChild.hair);
    $('.imgAvatar .skin').attr('fill', settingChild.skin);
    $('.imgAvatar .shirt').attr('fill', settingChild.clothes.shirt);
    $('.imgAvatar .pants').attr('fill', settingChild.clothes.pants);
    $(`#Awards .imgAvatar`).show();
  }, 10);
}

function nextGame() {
  $('#Roulette').load('components/Roulette.html');
  $('#Awards').hide()
  $('#Game').show()
}

// --------------Variables--------------

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
}

function innerQuestion() {
  $('#innerQuestion').text(cards[0][0].text).show()
  let button = cards[0][0].options.map((btn) =>{
    return(`
      <button onclick="response(${btn.valid})">${btn.text}</button>
    `)
  })
  $('#modalQuestion').append(button);
}

function response(valid) {
  $('#innerQuestion').hide()
  $('#modalQuestion').hide();
  $('#modalFeedback').fadeIn()
  if (valid === true) {
    $('#modalFeedback').text(cards[0][0].feedback.positive)
  } else {
    $('#modalFeedback').text(cards[0][0].feedback.negative)
  }
}

function closeModal() {
  setTimeout(() => {
    $('#innerQuestion').text("")
    $('#modalQuestion').text("").show();
    $('#modalFeedback').hide()
  }, 500);
}
