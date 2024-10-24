import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import './GreekSalad.css';
import greekSaladImage from '../images/greek-salad.jpg';

const GreekSalad = () => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const dish = {
    id: 1,
    name: 'Greek Salad',
    description: 'Crisp lettuce, peppers, olives, and feta cheese garnished with garlic croutons.',
    price: 12.99,
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(dish, quantity);
    }
  };

  return (
    <div className="greek-salad-page">
      <img src={greekSaladImage} alt={dish.name} className="greek-salad-image" />
      <div className="greek-salad-content">
        <h2 className="greek-salad-title">{dish.name}</h2>
        <p className="greek-salad-description">{dish.description}</p>
        <p className="greek-salad-price">${dish.price.toFixed(2)}</p>

        <div className="greek-salad-quantity">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            min="1"
          />
        </div>

        <button className="greek-salad-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default GreekSalad;
