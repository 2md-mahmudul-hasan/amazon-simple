import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

import Product from '../Product/Product';
import './shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])


  useEffect(() => {
    const storedCart = getShoppingCart()
    const savedCart = []
    //step 1: get id from stored cart;
    for (const id in storedCart) {
      //step 2: get product by using id from products state;
      const addedProduct = products.find(product => product.id === id);
      console.log(addedProduct)

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
      }
    }
    setCart(savedCart)
  }, [products])
  const productAdd = (product) => {
    const newCart = [...cart, product]
    setCart(newCart)
    addToDb(product.id)

  }


  const handleClearCart = () => {
    setCart([])
    deleteShoppingCart()
  }
  return (
    <div className='shop-container'>
      <div className="product-container">
        {
          products.map(product => <Product productAdd={productAdd} product={product} key={product.id}></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart handleClearCart={handleClearCart} cart={cart}></Cart>
        <Link to='/orders'><button>Review order</button></Link>
      </div>
    </div>
  );
};

export default Shop;