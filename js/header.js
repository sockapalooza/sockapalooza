$(function(){

    $("#loginPop").popover({
        html : true,
        content: function() {
          return $("#loginPopBody").html();
        }
    });

    // window.scrollTo(0,210);

    $(window).on('beforeunload', function() {
      $(window).scrollTop(210);
    });

    $(document).scroll(function() {
      var y = $(this).scrollTop();
      console.log(y)
      if (y < 200) {
        $('.header-logo').addClass('transparent')
      } else {
        $('.header-logo').removeClass('transparent');
      }
    });
});
