import React, { useState } from 'react'

const Cart = () => {
    const [cartCount,setCartCount]=useState(0);
    const handleClick = () => setCartCount(cartCount+1);
  return (
    <div className='cart-container'>
      <h1>Number of items in the cart {cartCount}</h1>
      <button onClick={handleClick}>Add to Cart {cartCount}</button>
    </div>
  )
}

export default Cart
