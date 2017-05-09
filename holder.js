let request = new XMLHttpRequest();
let url = 'https://marmot.com/cart';
request.responseType= 'document'
request.open("GET", url, true)            //////// skeleton jQuery request \\\\\\\\\\\\
request.onreadystatechange = function() {
    if (this.readyState == 4) {
      let response = this.response
      debugger
    }
};
request.send()

this.response.getElementsByClassName('cart-order-totals') ///proper selectors 1 & 2
this.response.getElementsByClassName('cart-row')


parseInt(document.getElementsByClassName('minicart-quantity')[1].innerHTML, 10)

<div style={ position: 'fixed' z-index: '1'} />
let contentOverlay = document.createElement('div')
contentOverlay.style.height = `${window.innerHeight}px`
contentOverlay.style.width = '100%'           /////////over-lay div\\\\\\\\
contentOverlay.style.backgroundColor = "rgba(0,0,0, 0.9)"
contentOverlay.style.position = "fixed"
contentOverlay.style.top = '0'
contentOverlay.style.left = '0'
contentOverlay.style.zIndex = '10'
document.body.prepend(contentOverlay)

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


 document.addEventListener('scroll', function(e){
    let docHeight = document.body.offsetHeight
    let bottomOffset = window.innerHeight + window.pageYOffset
     if(overLayAbsent() && getPercentageScrolled(docHeight, bottomOffset) >= 90){
         let contentOverlay = document.createElement('div')
         contentOverlay.style.height = `${window.innerHeight}px`
         contentOverlay.style.width = '100%'           /////////over-lay div\\\\\\\\
         contentOverlay.style.backgroundColor = "rgba(15,15,15, 0.2)"
         contentOverlay.style.position = "fixed"
         contentOverlay.style.top = '0'
         contentOverlay.style.left = '0'
         contentOverlay.style.zIndex = '10'
         contentOverlay.className = 'overlay'
         document.body.prepend(contentOverlay)
     }
 })
