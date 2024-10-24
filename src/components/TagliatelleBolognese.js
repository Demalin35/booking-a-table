import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import './TagliatelleBolognese.css';
import tagliatelleImage from '../images/TagliatelleBolognese.jpg';

const TagliatelleBolognese = () => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const dish = {
    id: 3,
    name: 'Tagliatelle Bolognese',
    description: 'Slow-cooked meat sauce served over ribbons of pasta.',
    price: 15.00,
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(dish, quantity);
    }
  };

  return (
    <div className="tagliatelle-page">
      <img src={tagliatelleImage} alt={dish.name} className="tagliatelle-image" />
      <div className="tagliatelle-content">
        <h2 className="tagliatelle-title">{dish.name}</h2>
        <p className="tagliatelle-description">{dish.description}</p>
        <p className="tagliatelle-price">${dish.price.toFixed(2)}</p>

        <div className="tagliatelle-quantity">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            min="1"
          />
        </div>

        <button className="tagliatelle-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default TagliatelleBolognese;
