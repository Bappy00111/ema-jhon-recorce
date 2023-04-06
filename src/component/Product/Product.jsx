import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    
    const {img,name,price,seller,ratings} = props.product;
    const producthandeler = props.producthandeler;

    
    return (
        <div className='product'>
            <p><img src={img} alt="" /></p>

          <div className='product-cart'>
          
            <h4 className='product-name'>{name}</h4>
            <h3>price:${price}</h3>
            <p>Manufatcher:{seller}</p>
            <p>rating:{ratings}  stars</p>
          </div>
          <button onClick={() => producthandeler(props.product)} className='btn-card'>
            Add to cart
            <FontAwesomeIcon icon={faShoppingCart} />
            
            </button>
            
        </div>
    );
};

export default Product;