import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = (CartItems) => {
  return (
    <header className='header'>
      <div>
        <h1>
          <Link to='/' className='logo'>Electronics  Shop</Link>
        </h1>
      </div>
      <div className='header-Links'>
           <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
           </ul>
           <ul>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
           </ul>
           <ul>
            <li>
              <Link to='/cart' className='cart'><AiOutlineShoppingCart/> <span className='cart-length'>
                { CartItems.length === 0 ? " " : CartItems.length}
               </span></Link>
            </li>
           </ul>

      </div>
    </header>



  )
}

export default Header;