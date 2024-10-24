import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import './Bruschetta.css';
import bruschettaImage from '../images/bruschetta.jpg';

const Bruschetta = () => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const dish = {
    id: 2,
    name: 'Bruschetta',
    description: 'Grilled bread with garlic, olive oil, and salt.',
    price: 5.99,
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(dish, quantity);
    }
  };

  return (
    <div className="bruschetta-page">
      <img src={bruschettaImage} alt={dish.name} className="bruschetta-image" />
      <div className="bruschetta-content">
        <h2 className="bruschetta-title">{dish.name}</h2>
        <p className="bruschetta-description">{dish.description}</p>
        <p className="bruschetta-price">${dish.price.toFixed(2)}</p>

        <div className="bruschetta-quantity">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            min="1"
          />
        </div>

        <button className="bruschetta-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Bruschetta;
