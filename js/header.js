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

fetchApi('GET', '/products/', {}, (response) => {
  response.forEach(function(object){

    var nameText = document.createTextNode(object.name)
    var priceText = document.createTextNode(object.price)
    var sizeText = document.createTextNode(object.sizes[1].size)
    //div col-md-4 no-pads cart-item-holder  border
    var div = document.createElement('div')
    div.classList.add('col-md-4','no-pads','cart-item-holder','border')
    //product image img-responsive cart-item
    var img = document.createElement('img')
    img.setAttribute('src', object.image)
    img.classList.add('img-responsive','cart-item')


    //overlay div
    var div1 = document.createElement('div')
    div1.classList.add('col-md-12','cart-item-desc')
    //prod name
    var name = document.createElement('h6')
    name.appendChild(nameText)
    //product price
    var price = document.createElement('h6')
    price.appendChild(priceText)
    //prod size
    var size = document.createElement('h6')
    size.appendChild(sizeText)

    //handles the overlay
    div1.appendChild(nameText)
    div1.appendChild(priceText)
    div1.appendChild(sizeText)
    //main div
    div.appendChild(img)
    div.appendChild(div1)

    document.querySelector('.modal-cart-content').appendChild(div)


  })


  //prod size
  //prod price
  //prod name

})
