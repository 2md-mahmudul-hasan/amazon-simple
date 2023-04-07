import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import './order.css'
import ReveiwItem from '../ReviewItem/ReveiwItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import CheckOut from '../CheckOut/CheckOut';

const Orders = () => {
  const SavedCart = useLoaderData()
  const [cart, setCart] = useState(SavedCart)

  const handleRemoveCart = (id) => {
    const remainingProduct = cart.filter(product => product.id !== id)
    setCart(remainingProduct);
    removeFromDb(id)
  }

  const handleClearCart = () => {
    setCart([])
    deleteShoppingCart()
  }

  return (
    <div className='order'>
      <div className='review-container'>
        {cart.map(product => <ReveiwItem handleRemoveCart={handleRemoveCart} key={product.id} product={product}></ReveiwItem>)}
      </div>

      <div className='cart-container'>
        <Cart handleClearCart={handleClearCart} cart={cart}></Cart>

        <button><Link to='/checkout'> Processed checkout </Link></button>
      </div>

    </div>

  );
};

export default Orders;