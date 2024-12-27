let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add items to the cart
function addToCart(productName, price) {
  const item = { name: productName, price: price };
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}

// Function to display cart items
function displayCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalContainer = document.getElementById('cart-total');
  cartContainer.innerHTML = '';

  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;
    cartContainer.innerHTML += `
      <div>
        <p>${item.name} - ₹${item.price.toFixed(2)}</p><button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });

  totalContainer.textContent = `Total: ₹${total.toFixed(2)}`;
}

// Function to remove items from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}
