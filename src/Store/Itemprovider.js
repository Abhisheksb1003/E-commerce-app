import React, { useState } from "react";
import Itemstore from "./Itemstore";


const Itemprovider = (props) => {
  const [cartElements, setCartElements] = useState([]);
 

  const addtocartHandler = (item) => {
    const existingCartItem = cartElements.find(
      (cartitem) => cartitem.id === item.id
    );

    if (existingCartItem) {
      alert('item alredy exists')
    } else {
      setCartElements((prevItems) => [...prevItems, {...item, quantity:1 }]);
    }
  };

  const itemstore = {
    cart: cartElements,
    addToCart: addtocartHandler,
  };

  return (
    <Itemstore.Provider value={itemstore}>{props.children}</Itemstore.Provider>
  );
};
export default Itemprovider;