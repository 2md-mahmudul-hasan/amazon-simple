import React from 'react';
import './cart.css'

const Cart = ({ cart }) => {
  console.log(cart)

  let totlaPrice = 0;
  let totalShipping = 0;
  for (let price of cart) {
    totlaPrice = totlaPrice + price.price;
    totalShipping = totalShipping + price.shipping;
  }

  let tax = (totlaPrice * 10) / 100;
  let grandTotal = totalShipping + totlaPrice + tax;
  return (
    <div className='cart'>
      <h2>total cart:{cart.length}</h2>
      <p>Total price:{totlaPrice}</p>
      <p>Total shipping:{totalShipping}</p>
      <p>Tax:{tax}</p>
      <p>Grad Total:{grandTotal}</p>
    </div>
  );
};

export default Cart;