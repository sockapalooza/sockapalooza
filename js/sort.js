$(document).ready(function(){
	$('body').on('click', '#btn-sort', function(){

    var value = $('#sort-dropdown').val(),
        field = "sort: 'price desc'"

    switch (value) {
      case 'Price: high to low':
        field = 'price desc'
        break
      case 'Price: low to high':
        field = 'price asc'
        break
      case 'Style: A to Z':
        field = 'style asc'
        break
      case 'Color: A to Z':
        field = 'color asc'
        break
    }

    console.log(field)

    fetchApi('GET', '/products/?sort=' + field, {}, (items) => {
      console.log(items)
      document.getElementById('grid').innerHTML = ''
      createGrid(items)
    //   console.log(item)
    //   var individualPic = document.getElementById('individualPic')
    //   individualPic.setAttribute('src', item.product_image)
    //
    //   var individualPrice = document.getElementById('individualPrice')
    //   individualPrice.innerHTML = '$' + (item.price / 100)
    //
    //   var individualName = document.getElementById('gridSystemModalLabel')
    //   individualName.innerHTML = item.name
    //
    //   var individualDesc = document.getElementById('individualDesc')
    //   individualDesc.innerHTML = item.description
    })
  })
});
