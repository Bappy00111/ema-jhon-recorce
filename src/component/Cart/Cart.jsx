import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const card = props.card; option-1
    const {card} = props;
    
    let total = 0;
    let totalshipingCart = 0;
    for(const product of card){
        total = total+product.price;
        totalshipingCart = totalshipingCart + product.shipping;


    }
  const tax = total*7/100;
  const garanttotal = total+totalshipingCart+tax;
    return (
        <div className='cart'>
             <h3 className='product-name'>Order summery</h3>
                <p>Selected Items:{card.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalshipingCart}</p>
                <p>Tax:{tax.toFixed(2)} $</p>
                <p>Grand Total:{garanttotal.toFixed(2)} $</p>
            
        </div>
    );
};

export default Cart;