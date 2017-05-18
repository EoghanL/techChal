//////// skeleton jQuery request \\\\\\\\\\\\

function preloadCartElements(){
  let request = new XMLHttpRequest();
  let url = 'https://marmot.com/cart';
  let cartQuantity = parseInt(document.querySelector('.minicart-quantity').innerHTML, 10)

  if(cartQuantity > 0){
    request.responseType= 'document'
    request.open("GET", url, true)
    request.onreadystatechange = function() {
        if (this.readyState == 4) {
          let response = this.response   ///get all necessary elements in arrays then for loop thru
          let imgSrcArr = response.querySelectorAll('.cart-row td a img')
          let itemPriceArr = response.querySelectorAll('.price-total')  ///add a possible link to the images to product page?
          for(let i = 0; i < cartQuantity; i++){
            localStorage.setItem(`item-${i}-Img`, imgSrcArr[i].src)
            localStorage.setItem(`item-${i}-Price`, itemPriceArr[i].innerHTML.trim())
          }
          localStorage.setItem('cartQuantity', cartQuantity)
        }
    };
    request.send()
  }
  else {
    localStorage.setItem('cartMessage', 'There are no items in your cart!')
  }
}
preloadCartElements()

function getColumNums(numItems){
  return Math.floor(Math.sqrt(numItems))
}

///========> document.body.removeChild(contentOverlay)
function overLayAbsent() {
  return document.body.getElementsByClassName('.overlay').length === 0
}
//This properly parses the percentage
///yOffset is in the form of `window.innerHeight + window.pageYOffset`
function getPercentageScrolled(docHeight, yOffset) {
  return Math.round((yOffset / docHeight) * 100)
}

function constructItemDivs(){

}

function constructImage(storageKey){
  let itemImg = document.createElement('img')
  itemImg.src = localStorage.getItem(storageKey)
  itemImg.style.padding = '3px'
  itemImg.style.float = 'left'
  return itemImg
}

function constructPrice(storageKey){
  let itemPrice = document.createElement('p')
  itemPrice.innerHTML = localStorage.getItem(storageKey)
  return itemPrice;
}
function formatCartHeight(numberOfItems, containerHeight){
  return (containerHeight * .75) / numberOfItems
}
function constructCartDisplay(){
  let productArr = []
  let itemNums = localStorage.getItem('cartQuantity')
  //columNums = getColumNums(itemNums)
  for(let i = 0; i < itemNums; i++){
    let itemDiv = document.createElement('div')
    formatCartHeight(localStorage.getItem('cartQuantity'))
    itemDiv.style.height = `${formatCartHeight(itemNums, window.innerHeight)}px`
    debugger
    itemDiv.appendChild(constructImage(`item-${i}-Img`))
    itemDiv.appendChild(constructPrice(`item-${i}-Price`))
    productArr.push(itemDiv)

  }
  return productArr
}

function constructOverlay() {
  let contentContainer = document.createElement('div')
  contentContainer.className = 'contentContainer'
  contentContainer.style.height = '85%'
  contentContainer.style.width = '85%'
  contentContainer.style.margin = 'auto'
  contentContainer.style.marginTop = '4.5%'
  contentContainer.style.backgroundColor = "rgba(15,15,15, 0.4)"
  contentContainer.style.zIndex = '11'
  contentContainer.style.border = 'solid rgb(230, 230, 230)'

  constructCartDisplay().forEach((item) => contentContainer.appendChild(item))
  return contentContainer
}

function addOverlay() {
  let docHeight = document.body.offsetHeight;
  let bottomOffset = window.innerHeight + window.pageYOffset;
  if(getPercentageScrolled(docHeight, bottomOffset) >= 90){
    let contentOverlay = document.createElement('div')
     contentOverlay.style.height = `${window.innerHeight}px`
     contentOverlay.style.width = '100%'           /////////over-lay div\\\\\\\\
     contentOverlay.style.backgroundColor = "rgba(15,15,15, 0.4)"
     contentOverlay.style.position = "fixed"
     contentOverlay.style.top = '0'
     contentOverlay.style.left = '0'
     contentOverlay.style.zIndex = '10'
     contentOverlay.className = 'overlay'
     document.body.prepend(contentOverlay)
     contentOverlay.appendChild(constructOverlay())
     document.removeEventListener('scroll', addOverlay)
  }
}
document.addEventListener('scroll', addOverlay)

/////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
document.addEventListener('load', )
response.querySelectorAll('.cart-row td a img')
response.querySelectorAll('.cart-row td a img') ///image selector
this.response.getElementsByClassName('cart-order-totals') ///proper selectors 1 & 2
this.response.getElementsByClassName('cart-row')
parseInt(document.getElementsByClassName('minicart-quantity')[1].innerHTML, 10)

ars_maquette_problack
ars_maquette_prolight

if (getPercentageScrolled(document.body.offsetHeight, (window.innerHeight + window.pageYOffset) >= 90){
  document.body.prepend(contentOverlay)
}

let request = new XMLHttpRequest();
let url = 'https://maromt.com/account'
request.responseType= 'text'
request.open("GET", url, true)
request.onreadystatechange = function() {
        if (this.readyState == 4) {
          let response = this.response
          debugger
        }
}
contentOverlay.set
contentOverlay.style.height = `${window.innerHeight}px`
contentOverlay.style.width = '100%'           /////////over-lay div\\\\\\\\
contentOverlay.style.backgroundColor = "rgba(15,15,15, 0.4)"
contentOverlay.style.position = "fixed"
contentOverlay.style.top = '0'
contentOverlay.style.left = '0'
contentOverlay.style.zIndex = '10'
contentOverlay.className = 'overlay'
