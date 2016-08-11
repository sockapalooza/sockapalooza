$(document).ready(function(){



})

//Fetch the API data
fetchApi('GET', '/products/', {}, (items) => {

  items.forEach(function(item){
    var btnQuickAdd = document.createElement('button'),
      staticOption = document.createElement('option'),
      sizeDropdown = document.createElement('select'),
      merchCategory = document.createElement('h1'),
      merchName = document.createElement('h1'),
      merchPrice = document.createElement('h1'),
      merchInfo = document.createElement('div'),
      merchImg = document.createElement('img'),
      merchContainer = document.createElement('div')

    sizeDropdown.setAttribute('name', 'sizes')
    merchImg.setAttribute('src', item.image)

    btnQuickAdd.classList.add('btn-quick-add')
    merchCategory.classList.add('merch-category')
    merchName.classList.add('merch-name')
    merchPrice.classList.add('merch-price')
    merchInfo.classList.add('merch-info', 'transparent')
    merchImg.classList.add('merch-img')
    merchContainer.classList.add('col-xs-3', 'merch', 'descriptionModal')

    btnQuickAdd.innerHTML = 'Quick Add'
    staticOption.innerHTML = 'Sizes:'
    merchCategory.innerHTML = item.category
    merchName.innerHTML = item.name
    merchPrice.innerHTML = '$' + (item.price / 100)

    sizeDropdown.appendChild(staticOption)

    item.sizes.forEach(function(size){
      var sizeOption = document.createElement('option')
      sizeOption.innerHTML = size.size
      sizeDropdown.appendChild(sizeOption)
    })

    merchInfo.appendChild(merchCategory)
    merchInfo.appendChild(merchName)
    merchInfo.appendChild(merchPrice)
    merchInfo.appendChild(sizeDropdown)
    merchInfo.appendChild(btnQuickAdd)
    merchContainer.appendChild(merchImg)
    merchContainer.appendChild(merchInfo)

    document.getElementById('grid').appendChild(merchContainer)
  })

  $('.merch')
    .on('mouseover', function() {
      $('.merch-info', this).removeClass('transparent')
    })
    .on('mouseout', function() {
      $('.merch-info', this).addClass('transparent')
    })
})

{/* <div class="col-xs-3 merch descriptionModal">
  <img src="https://unsplash.it/600?random" class="merch-img" />
  <div class="merch-info transparent">
    <h1 class="merch-category">LLama Socks</h1>
    <h1 class="merch-name">The Perusian</h1>
    <h1 class="merch-price">$20.00</h1>
    <select name="select">
      <option value="size">Sizes:</option>
      <option value="small">S</option>
      <option value="medium">M</option>
      <option value="large">L</option>
      <option value="x-large">XL</option>
      <option value="xx-large">XXL</option>
      <option value="xxx-large">XXXL</option>
    </select>
    <button class="btn-quick-add">Quick Add</button>
  </div>
</div> */}
