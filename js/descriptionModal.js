$(document).ready(function(){
	$(".descriptionModal").click(function(){
		$("#descriptionModal").modal('show');
	});
});

//this is the plus minus for quantity of item to add to card//
$(function() {
  // This button will increment the value
  $('.qtyplus').click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment
      $('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
  // This button will decrement the value till 0
  $(".qtyminus").click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
      // Decrement one
      $('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
});

fetchApi('GET', '/products/', {}, (items) => {
    console.log(items)
    items.forEach(function(item) {
        console.log(item)
        // var div = document.createElement('a')
        // div.classList.add('selected')
    })
    // etsyData.results.forEach(function(boardGame) {
    //   var div = document.createElement('a')
    //   div.classList.add('board-game')
    //   div.setAttribute('href', boardGame.url)
    //
    //   var img = document.createElement('img')
    //   img.setAttribute('src', boardGame.Images[0].url_570xN)
    //   console.log(boardGame)
    //   div.appendChild(img)
    //
    //   var title = document.createElement('p')
    //   title.innerHTML = boardGame.title
    //   div.appendChild(title)
    //
    //   var seller = document.createElement('p')
    //   seller.innerHTML = boardGame.Shop.shop_name
    //   div.appendChild(seller)
    //
    //   var price = document.createElement('p')
    //   price.innerHTML = boardGame.price
    //   div.appendChild(price)
    //
      document.getElementById('selected-item').appendChild(div)
    //
    // })
})
