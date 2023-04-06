import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products,setProduct] = useState([]);
    const [card,setCard] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))

    },[]);


 useEffect(()=>{
    const storeproduct = getShoppingCart();
    console.log(storeproduct);

 },[])

    const producthandeler = (product) =>{
      const newproduct = [...card,product];
      setCard(newproduct); 
      addToDb(product.id)
      
      }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                    key = {product.id}
                    product ={product}
                    producthandeler={producthandeler}
                    ></Product>)
                }

            </div>
            <div className='card-container'>
                <Cart
                card={card}
                ></Cart>
               

            </div>
            
        </div>
    );
};

export default Shop;