// App.js
import './App.css';
import Product from './Product/Product';
import Cart from './Cart/Cart';
import React, { useState } from "react";
import Header from './UI/Header';
import Itemprovider from './Store/Itemprovider';
import { Routes, Route } from 'react-router-dom'; // Import Routes

import About from './About/About';
import Footer from './UI/Footer';
import Home from './Home/Home';
import Contact from './Contact/Contact';

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

      {/* Wrap Routes around Route components */}
      <Routes>
        <Route path='/store' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </Itemprovider>
  );
}

export default App;
