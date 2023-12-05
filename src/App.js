import './App.css';
import Product from './Product/Product';
import Cart from './Cart/Cart';
import React ,{useState} from "react";
import Header from './UI/Header';
import Itemprovider from './Store/Itemprovider';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './About/About';
import Footer from './UI/Footer';


const router = createBrowserRouter([
  {path :'/', element: <Product/>},
  {path :'/store', element: <Product/>},
  {path :'/about', element: <About/>},
])

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
      <RouterProvider router={router}/>
      <Footer/>

    </Itemprovider>
  );
}

export default App;