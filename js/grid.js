$(document).ready(function(){

  $('.merch')
    .on('mouseover', function() {
      $('.merch-info', this).removeClass('transparent')
    })
    .on('mouseout', function() {
      $('.merch-info', this).addClass('transparent')
    })

})
