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


$(document).on("click", "#signup", function() {
    redirect('signup.html');
});
$(document).on("click", "#home-logo", function() {
    redirect('index.html');
});
$(document).on("click", ".btn-quick-add", function() {
     console.log();
});

// fetchApi('GET', '/orders/', {}, (response) => {
//   response.forEach(function(object){
//
//   })


// fetchApi('GET', '/orders', {}, (response) => {
// console.log(response);
//   })
// fetchApi('GET', '/orders/', {}, (response) => {
// console.log(response);
//   })
//POST order/id/orderings
//prod id , prod qty, orderid , size

// fetchApi('GET', '/orders/', {}, (response) => {
//   response.forEach(function(object){
//
//     var nameText = document.createTextNode(object.name)
//     var priceText = document.createTextNode(object.price)
//     var sizeText = document.createTextNode(object.sizes[1].size)
//     //div col-md-4 no-pads cart-item-holder  border
//     var div = document.createElement('div')
//     div.classList.add('col-md-4','no-pads','cart-item-holder','border')
//     //product image img-responsive cart-item
//     var img = document.createElement('img')
//     img.setAttribute('src', object.image)
//     img.classList.add('img-responsive','cart-item')
//
//
//     //overlay div
//     var div1 = document.createElement('div')
//     div1.classList.add('col-md-12','cart-item-desc')
//     //prod name
//     var name = document.createElement('h6')
//     name.appendChild(nameText)
//     name.classList.add('add-space')
//     //product price
//     var price = document.createElement('h6')
//     price.appendChild(priceText)
//     price.classList.add('add-space')
//
//     //prod size
//     var size = document.createElement('h6')
//     size.appendChild(sizeText)
//     size.classList.add('add-space')
//
//     //handles the overlay
//     div1.appendChild(name)
//     div1.appendChild(price)
//     div1.appendChild(size)
//     //main div
//     div.appendChild(img)
//     div.appendChild(div1)
//
//     console.log(object);
//
//     document.querySelector('.modal-cart-content').appendChild(div)
//
//
//   })
// })
