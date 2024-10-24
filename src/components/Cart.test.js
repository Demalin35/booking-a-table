import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartContext } from './CartContext';
import Cart from './Cart';

describe('Cart Component', () => {
  it('displays cart items and total price', () => {
    // Mock cart context with a cart containing items
    const mockCartContext = {
      cart: [
        { id: 1, name: 'Bruschetta', price: 5.99, quantity: 2 },
        { id: 2, name: 'Greek Salad', price: 12.99, quantity: 1 },
      ],
      removeFromCart: jest.fn(),
      clearCart: jest.fn(),
    };

    render(
      <CartContext.Provider value={mockCartContext}>
        <Cart />
      </CartContext.Provider>
    );

    // Check if cart items are rendered
    expect(screen.getByText('Bruschetta (x2)')).toBeInTheDocument();
    expect(screen.getByText('$11.98')).toBeInTheDocument(); // 2x $5.99
    expect(screen.getByText('Greek Salad (x1)')).toBeInTheDocument();
    expect(screen.getByText('$12.99')).toBeInTheDocument();

    // Check total price
    expect(screen.getByText('Total: $24.97')).toBeInTheDocument();
  });

  it('renders empty cart message when no items', () => {
    const mockCartContext = { cart: [], removeFromCart: jest.fn(), clearCart: jest.fn() };

    render(
      <CartContext.Provider value={mockCartContext}>
        <Cart />
      </CartContext.Provider>
    );

    // Check empty cart message
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });
});
