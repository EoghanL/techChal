let request = new XMLHttpRequest();
let url = 'https://marmot.com/cart';
request.responseType= 'document'
request.open("GET", url, true)            //////// THIS WORKS \\\\\\\\\\\\
request.onreadystatechange = function() {
    if (this.readyState == 4) {
      let response = this.response
      debugger
    }
};
request.send()

this.response.getElementsByClassName('cart-order-totals')
this.response.getElementsByClassName('cart-row')

// request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//
// $.ajax({
//     url: `https://marmot.com/cart`,
//     method: "GET",
// 	  crossOrigin: true,
//     done: function(data){
//       let response = data
//       debugger
//     }
//   })

parseInt(document.getElementsByClassName('minicart-quantity')[1].innerHTML, 10)

<div style={ position: 'fixed' z-index: '1'} />
let contentOverlay = document.createElement('div')
contentOverlay.style.height = `${window.innerHeight}px`
contentOverlay.style.width = '100%'           /////////Getting there\\\\\\\\
contentOverlay.style.backgroundColor = "rgba(0,0,0, 0.9)"
contentOverlay.style.position = "fixed"
contentOverlay.style.top = '0'
contentOverlay.style.left = '0'
document.body.appendChild(contentOverlay)
contentOverlay.style.zIndex = '1'
