import React from 'react';
import './CartProduct.css'

const CartProduct = () => {
    return (
        <div className='row w-100 cart-product-container align-items-center m-0 my-3 rounded-3'>
            <div className="col-4 p-1">
                <img className="w-100" src="https://i.ibb.co/HYmQQLG/dinner1.png" alt="" />
            </div>
            <div className="col-4 p-0  d-flex flex-column justify-content-center">
                <div className="cart-product-info">
                    <p>breakfast</p>
                    <h6>$34</h6>
                    <p><small>Delivery free</small></p>
                </div>
            </div>
            <div className="col-4 p-0 cart-product-count">
                <div className='d-flex align-items-center justify-content-center'>
                    <span>-</span> <input type="text" readOnly value="02" />  <span>+</span>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;