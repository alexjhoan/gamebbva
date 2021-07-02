function awardsActive(active) {
  $('.containerselectAward .premio.active').removeClass('active')
  $(active).addClass('active')

  $("#selectedAward").removeAttr("disabled");
}
