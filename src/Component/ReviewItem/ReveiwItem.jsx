import React from 'react';
import './reviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ReveiwItem = ({ product, handleRemoveCart }) => {
  const { id, quantity, name, price, img } = product
  return (
    <div className='reviewItem'>
      <img style={{ 'width': '80px', 'height': '80px' }} src={img}></img>
      <div className="item-info">
        <p>name:{name}</p>
        <p>price:{price}</p>
        <p>quantity:{quantity}</p>
      </div>

      <button onClick={() => handleRemoveCart(id)} className='delete-btn'><FontAwesomeIcon icon={faTrash} size="2xl" /></button>
    </div>
  );
};

export default ReveiwItem;