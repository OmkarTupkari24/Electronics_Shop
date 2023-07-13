import React, { useState } from 'react';
import data from './components/back/Data/Data.js';
import Header from './components/front/Header/Header.jsx';
import Products from './components/front/products/Products.js';
import Signup from './components/front/Signup/Signup.js';
import Cart from './components/front/Cart/Cart.js';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

// import Routes  from './components/front/Routes/Routes';

const App = () => {
   const {productItems} = data;
   const [CartItems,setCartItems]= useState([]);
   
   
   const handleAddProduct = (product) =>{
    const ProductExist = CartItems.find((item)=>item.id === product.id);
    if(ProductExist){
      setCartItems(CartItems.map((item)=>item.id === product.id ? 
      {...ProductExist, quantity:ProductExist.quantity + 1} : item)
      );
    }
    else{
        setCartItems([...CartItems,{...product, quantity:1}]);
    }
  };

  const handleRemoveProduct = (product) =>{
    const ProductExist = CartItems.find((item)=>item.id === product.id);
     
    if(ProductExist.quantity === 1){
      setCartItems(CartItems.filter((item)=> item.id !== product.id));
    } else{
      setCartItems(
        CartItems.map((item)=> 
          item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1}
          : item
        )
      );
    }
}

const handleCartClearance = () =>{
  setCartItems([]);
}


   return (
      <Router>
          <Header/>
          <Routes>
             <Route path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
             <Route path='/Signup' element={<Signup/>}/>   
             <Route path='/Cart' element={<Cart CartItems={CartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}/>         
          </Routes>
      <Routes/>
       
    </Router>
   );
};

export default App;
