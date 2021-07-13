$(window).on('load', function () {
  $('body').css('opacity', '1');
  setTimeout(() => {
    $('#loaderContainer').fadeOut()
    $('#cont').show()
  }, 1500);
});

// ------------------init-load---------------------

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
    $('#Cards').load('components/Cards.html');
  }, 300);
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
  }, 15);
}

function nextGame() {
  $('#Roulette').load('components/Roulette.html');
  $('#Awards').hide()
  $('#Game').show()
  selectaward();
}

function showCards(params) {
  $('#Cards').load('components/Cards.html');
}

