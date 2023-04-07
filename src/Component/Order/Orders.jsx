import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import './order.css'
import ReveiwItem from '../ReviewItem/ReveiwItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
  const SavedCart = useLoaderData()
  const [cart, setCart] = useState(SavedCart)

  const handleRemoveCart = (id) => {
    const remainingProduct = cart.filter(product => product.id !== id)
    setCart(remainingProduct);
    removeFromDb(id)
  }

  return (
    <div className='order'>
      <div className='review-container'>
        {cart.map(product => <ReveiwItem handleRemoveCart={handleRemoveCart} key={product.id} product={product}></ReveiwItem>)}
      </div>

      <div className='cart-container'>
        <Cart cart={cart}></Cart>
      </div>
    </div>

  );
};

export default Orders;