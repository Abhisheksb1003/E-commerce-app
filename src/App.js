import './App.css';
import Product from './Product/Product';
import Cart from './Cart/Cart';
import React ,{useState} from "react";
import Header from './UI/Header';
import Itemprovider from './Store/Itemprovider';

function App(props) {

  const [Hidecart, setHidecart]= useState(false)

  const showcart=()=>{
    setHidecart(true)
  }

  const hidecart=()=>{
    setHidecart(false)
  }

  return (
    <Itemprovider>
      {Hidecart && <Cart onClose={hidecart}/>}
      <Header onOpen={showcart} />
      <Product />

    </Itemprovider>
  );
}

export default App;