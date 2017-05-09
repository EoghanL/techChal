
//////// skeleton jQuery request \\\\\\\\\\\\


function preloadCartElements(){
  let request = new XMLHttpRequest();
  let url = 'https://marmot.com/cart';
  let cartQuantity = parseInt(document.querySelector('.minicart-quantity').innerHTML, 10)
  debugger
  if(cartQuantity > 0){
    request.responseType= 'document'
    request.open("GET", url, true)
    request.onreadystatechange = function() {
        if (this.readyState == 4) {
          let response = this.response   ///get all necessary elements in arrays then for loop thru
          let imgSrcArr = response.querySelectorAll('.cart-row td a img')
          debugger
        }
    };
    request.send()
  }
}

response.querySelectorAll('.cart-row td a img') ///image selector
this.response.getElementsByClassName('cart-order-totals') ///proper selectors 1 & 2
this.response.getElementsByClassName('cart-row')


parseInt(document.getElementsByClassName('minicart-quantity')[1].innerHTML, 10)

///========> document.body.removeChild(contentOverlay)
document.onload
if (getPercentageScrolled(document.body.offsetHeight, (window.innerHeight + window.pageYOffset) >= 90){
  document.body.prepend(contentOverlay)
}
function overLayAbsent(){
  return document.body.getElementsByClassName('.overlay').length === 0
}
//This properly parses the percentage

function getPercentageScrolled(docHeight, yOffset){ ///yOffset is in the form of `window.innerHeight + window.pageYOffset`
  return Math.round((yOffset / docHeight) * 100)
}

function addOverlay(){
  let docHeight = document.body.offsetHeight
  let bottomOffset = window.innerHeight + window.pageYOffset
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
     document.removeEventListener('scroll', addOverlay)
  }
}
document.addEventListener('scroll', addOverlay)


 document.addEventListener('load', )
 response.querySelectorAll('.cart-row td a img')
