import React from 'react';
import './product.css'

const Product = ({ product }) => {
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

        <button className='addToCartBTn'>Add to cart </button>
      </div>
    </div>
  );
};

export default Product;