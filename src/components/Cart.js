// src/components/Cart.js
import React from 'react';

function Cart() {
  // Placeholder logic for cart data
  const cartItems = [];

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
