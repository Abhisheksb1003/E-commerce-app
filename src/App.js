// App.js
import './App.css';
import Product from './Product/Product';
import Cart from './Cart/Cart';
import React, {useContext,Fragment, useState } from "react";
import Header from './UI/Header';
import Itemprovider from './Store/Itemprovider';
import { Routes, Route, Navigate,Switch,Redirect } from 'react-router-dom';
import About from './About/About';
import Footer from './UI/Footer';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import ProductDetails from './Product/ProductDetails';
import Login from './Login/Login';
import Itemstore from './Store/Itemstore';

function App(props) {
  const itemctx = useContext(Itemstore);
  const [Hidecart, setHidecart] = useState(false);
  const isLoggedIn = itemctx.isLoggedIn;
  const showcart = () => {
    setHidecart(true);
  };
  const hidecart = () => {
    setHidecart(false);
  };
  return (
    <Fragment>
      {console.log(isLoggedIn)}
      {Hidecart && <Cart onClose={hidecart} />}
      <Header onOpen={showcart} />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/store" exact>
          {isLoggedIn && <Product />}
          {!isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        {isLoggedIn && (
          <Route path="/store/:productID">
            <ProductDetails />
          </Route>
        )}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}
export default App;
