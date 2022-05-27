export function getCart() {
  const products = JSON.parse(localStorage.getItem('cart'));
  return products || {};
}

export function addToCart(product) {
  const { id, available_quantity: stock } = product;
  const products = getCart();
  if (Object.keys(products).some((key) => key === id)) {
    if (products[id].amount === stock) {
      return;
    }
    products[id].amount += 1;
  } else {
    product.amount = 1;
    products[id] = product;
  }
  localStorage.setItem('cart', JSON.stringify(products));
}

export function removeFromCart({ id }, entirely) {
  const products = getCart();
  if (entirely) {
    delete products[id];
  } else if (products[id].amount > 1) {
    products[id].amount -= 1;
  }
  localStorage.setItem('cart', JSON.stringify(products));
}