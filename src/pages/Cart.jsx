import React from 'react';
import Header from '../components/Header';
const Cart = () => {
  return (
    <div>
      <Header />
      <div className="cart-container">
        <div className="cart">Items in Cart</div>
      </div>
    </div>
  );
};

export default Cart;
