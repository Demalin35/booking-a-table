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
import GreekSalad from './components/GreekSalad';
import Bruschetta from './components/Bruschetta';
import TagliatelleBolognese from './components/TagliatelleBolognese';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Nav /> {/* Always render the Nav component on all pages */}

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/contact" element={<ContactPage />} /> {/* Route for ContactPage */}

            {/* Routes for individual dish pages */}
            <Route path="/greek-salad" element={<GreekSalad />} />
            <Route path="/bruschetta" element={<Bruschetta />} />
            <Route path="/tagliatelle-bolognese" element={<TagliatelleBolognese />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
