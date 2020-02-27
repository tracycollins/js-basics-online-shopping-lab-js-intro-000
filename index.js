var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(100*Math.random())
  var itemObj = { itemName: item, itemPrice: price };
  cart.push(itemObj)
  return(`${item} has been added to your cart.`)
}

function viewCart() {
  if (cart.length === 0){
    return("Your shopping cart is empty.")
  }
  var text = "In your cart, you have "
  for(var i=0; i<cart.length; i++){
    if (cart.length == 1){
      text = text + `${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
    else if (i === cart.length-1){
      text = text + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
    if (i < cart.length-1){
      text = text + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  }
  return text
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
