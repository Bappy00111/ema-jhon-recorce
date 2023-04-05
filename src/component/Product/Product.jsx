import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {img,name,price,seller,ratings} = props.product;
    return (
        <div className='product'>
            <p><img src={img} alt="" /></p>

          <div className='product-cart'>
          
            <h4 className='product-name'>{name}</h4>
            <h3>price:${price}</h3>
            <p>Manufatcher:{seller}</p>
            <p>rating:{ratings}  stars</p>
          </div>
          <button className='btn-card'>
            Add to cart
            
            </button>
            
        </div>
    );
};

export default Product;