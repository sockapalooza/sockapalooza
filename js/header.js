$(function(){

    // $("[data-toggle=popover]").popover();

    $("#loginPop").popover({
        html : true,
        content: function() {
          return $("#loginPopBody").html();
        }
    });


});
