// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Cart from './components/Cart';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import ConfirmationPage from './components/ConfirmationPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav /> {/* Nav will handle rendering Specials and Testimonials conditionally */}

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/contact" element={<ContactPage />} /> {/* Add route for ContactPage */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
