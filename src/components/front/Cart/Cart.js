import React from 'react'
import './Cart.css';

const Cart = ({CartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) => {

     const totalPrice = CartItems.reduce(
        (price,item)=> price + item.quantity * item.price,
     0);

    return (
    <div className='cart-items'>
       <h2 className='cart-items-header'>Cart Items</h2>
         <div className='clear-cart'>
            {CartItems.length >= 1 && (
                   <button className='clear-cart-button' onClick={handleCartClearance}>Clear cart</button>   
            )}
         </div>

          {CartItems.length === 0 && (
           <div className='cart-items-empty'>No items are added</div>
           )}
    
        <div> 
           {CartItems.map((item)=>(
            <div key={item.id} className='cart-items-list'>
               <img className='cart-items-image' 
                    src={item.image}
                    alt={item.name}   
                />
            <div className='cart-items-title'>{item.title}</div>
             <div className='cart-items-function'>
                  <button className='cart-items-add' onClick={()=>handleAddProduct(item)}>+</button>
                  <button className='cart-items-remove' onClick={()=>handleRemoveProduct(item)}>-</button>
             </div>
             <div className='cart-items-price'>
                {item.quantity} * ${item.price}
             </div>
            </div>
            ))} 
       </div>
       <div className='cart-items-total-price-name'>
             Total price: 
            <div className='cart-items-total-price'>${totalPrice}</div>
       </div>
    </div>
  )
}

export default Cart