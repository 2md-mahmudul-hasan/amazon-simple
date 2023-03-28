import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = ({ product, productAdd }) => {
  const { category, id, img, name, price, quantity, seller, ratings } = product;



  return (
    <div>
      <div className="product-data">
        <img src={img} alt="image" />
        <h6>{name}</h6>

        <div className="product-info">
          <p>Price: ${price}</p>
          <p>Seller: ${seller}</p>
          <b>Ratings : {ratings}</b>
        </div>

        <button onClick={() => productAdd(product)} className='addToCartBTn'><FontAwesomeIcon icon={faCartShopping} />Add to cart </button>
      </div>
    </div>
  );
};

export default Product;