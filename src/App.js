// App.js
import './App.css';
import Product from './Product/Product';
import Cart from './Cart/Cart';
import React, { useState } from "react";
import Header from './UI/Header';
import Itemprovider from './Store/Itemprovider';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './About/About';
import Footer from './UI/Footer';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import ProductDetails from './Product/ProductDetails';

function App(props) {
  const [Hidecart, setHidecart] = useState(false);

  const showcart = () => {
    setHidecart(true);
  };

  const hidecart = () => {
    setHidecart(false);
  };

  return (
    <Itemprovider>
      {Hidecart && <Cart onClose={hidecart} />}
      <Header onOpen={showcart} />

      <Routes>
        <Route path='/' element={<Navigate to='/store' />} />
        <Route path='/store' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/store/:productID' element={<ProductDetails />} />
      </Routes>

      <Footer />
    </Itemprovider>
  );
}

export default App;
