import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className='signup'>
      <h2>Sign Up !!</h2>
      <form>
        <div className='name'>
          <label for='name'>Name:</label>
          <input  type='text' id='name' placeholder='Abc' required/>
        </div>
        <div className='email'>
          <label for='name'>Email:</label>
          <input  type='text' id='name' placeholder='xyz@abc.com' required/>
        </div>
        <div className='contact'>
          <label for='contact'>Contact:</label>
          <input  type='number' id='contact' placeholder='+91**********' required/>
        </div>
        <div className='address'>
          <label for='address'>Address:</label>
          <input  type='text' id='text' placeholder='abcsdkfjhkjsadhf' required/>
        </div>
        <button type='submit' className='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Signup