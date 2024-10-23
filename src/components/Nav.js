import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Nav.css';
import logo from '../logo2.png';
import headerImage from '../header-image.jpg';
import greekSalad from '../images/greek-salad.jpg';
import bruschetta from '../images/bruschetta.jpg';
import dessert from '../images/dessert.jpg';
import customer1 from '../images/review.png';
import customer2 from '../images/review.png';
import customer3 from '../images/review.png';
import Modal from './Modal'; // Import the Modal component
import BookingForm from './BookingForm'; // Import the BookingForm

function Nav({ availableTimes, dispatch }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Header with an image, heading, and reserve button */}
      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <button className="reserve-btn" onClick={openModal}>
              Reserve a Table
            </button>
          </div>
          <div className="header-image-container">
            <img src={headerImage} alt="Delicious food" className="header-image" />
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        <ul className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/booking">Book Table</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {/* Conditionally render Specials and Testimonials only on the main page ("/") */}
      {location.pathname === '/' && (
        <>
          {/* Menu Section */}
          <section className="menu-section">
            <h2 className="menu-title">This Week's Specials!</h2>
            <div className="menu-grid">
              <div className="menu-card">
                <img src={greekSalad} alt="Greek Salad" className="menu-image" />
                <div className="menu-card-content">
                  <h3>Greek Salad</h3>
                  <p>$12.99 - Crisp lettuce, peppers, olives, and feta cheese garnished with garlic croutons.</p>
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
              <div className="menu-card">
                <img src={bruschetta} alt="Bruschetta" className="menu-image" />
                <div className="menu-card-content">
                  <h3>Bruschetta</h3>
                  <p>$5.99 - Grilled bread with garlic, olive oil, and salt.</p>
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
              <div className="menu-card">
                <img src={dessert} alt="Chocolate Mousse" className="menu-image" />
                <div className="menu-card-content">
                  <h3>Tagliatelle Bolognese</h3>
                  <p>$15.00 - Slow-cooked meat sauce served over ribbons of pasta.</p>
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="testimonials-section">
            <h2 className="testimonials-title">What Our Customers Say</h2>
            <div className="testimonials-container">
              <div className="testimonial-card">
                <img src={customer1} alt="Customer 1" className="testimonial-image" />
                <h3 className="customer-name">Emily R.</h3>
                <p className="testimonial-quote">"The best dining experience I’ve ever had. The Greek salad was so fresh!"</p>
                <div className="star-rating">⭐⭐⭐⭐⭐</div>
              </div>

              <div className="testimonial-card">
                <img src={customer2} alt="Customer 2" className="testimonial-image" />
                <h3 className="customer-name">John D.</h3>
                <p className="testimonial-quote">"I loved the bruschetta. Perfectly grilled and delicious!"</p>
                <div className="star-rating">⭐⭐⭐⭐⭐</div>
              </div>

              <div className="testimonial-card">
                <img src={customer3} alt="Customer 3" className="testimonial-image" />
                <h3 className="customer-name">Sophia P.</h3>
                <p className="testimonial-quote">"The dessert was heavenly, especially the chocolate mousse!"</p>
                <div className="star-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Booking Form Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <BookingForm availableTimes={availableTimes} closeModal={closeModal} dispatch={dispatch} />
      </Modal>
    </>
  );
}

export default Nav;
