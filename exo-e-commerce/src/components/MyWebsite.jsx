import { RouterProvider } from 'react-router-dom';
import router from '../app-routing';
import { useState } from 'react';
import ProductContext from '../contexts/ProductContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";


function MyWebsite() {

    const [productList, setProductList] = useState([])
    const [cart, setCart] = useState([])



  return (
    <ProductContext.Provider value={{productList, setProductList,cart,setCart}}>
      <RouterProvider router={router} />
      </ProductContext.Provider>
  );
}

export default MyWebsite;