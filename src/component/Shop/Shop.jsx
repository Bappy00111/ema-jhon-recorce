import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProduct] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))

    },[])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                    key = {product.id}
                    product ={product}
                    ></Product>)
                }

            </div>
            <div className='card-container'>
                <h3>Product summery</h3>

            </div>
            
        </div>
    );
};

export default Shop;