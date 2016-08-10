$(function(){

    $("#loginPop").popover({
        html : true,
        content: function() {
          return $("#loginPopBody").html();
        }
    });

    $(window).on('beforeunload', function() {
      $(window).scrollTop(210);
    });

    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y < 200) {
        $('.header-logo').addClass('transparent')
      } else {
        $('.header-logo').removeClass('transparent');
      }
    });
});
