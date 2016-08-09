$(function(){
    // Enables popover #1
    $("[data-toggle=popover]").popover();

    // Enables popover #2
    $("#loginPop").popover({
        html : true,
        content: function() {
          return $("#loginPopBody").html();
        }
    });
});
