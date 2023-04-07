import React, { Children } from 'react';
import './cart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCrow, faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, handleClearCart, Children }) => {
  // console.log(cart)

  let totlaPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (let product of cart) {
    product.quantity = product.quantity || 1;
    totlaPrice = totlaPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  let tax = (totlaPrice * 10) / 100;
  let grandTotal = totalShipping + totlaPrice + tax;
  return (
    <div className='cart'>
      <h2>total cart:{quantity}</h2>
      <p>Total price:{totlaPrice}</p>
      <p>Total shipping:{totalShipping}</p>
      <p>Tax:{tax}</p>
      <p>Grad Total:{grandTotal}</p>

      <button onClick={() => handleClearCart()} className='clearBtn'> clear cart<FontAwesomeIcon icon={faTrash} size="2xl" /></button>
      {/* <button className='clearBtn'> Processed add to cart<FontAwesomeIcon icon={faCartShopping} size="2xl" /></button> */}

      {Children}
    </div>
  );
};

export default Cart;