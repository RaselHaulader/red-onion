import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import Header from '../Shared/Header/Header';
import './Cart.css'

const Cart = () => {
    return (
        <>
        <Header></Header>
        <div className="row container p-5">
            <div className="edit-delivery-container col-md-6 col-12 p-5">
                <h3>Edit Delivery Details</h3>
                <input placeholder="Address" type="text" />
                <input placeholder="Area" type="text" />
                <input placeholder="Road No" type="text" />
                <input placeholder="Block" type="text" />
                <input placeholder="House " type="text" />
                <button className="color-btn border-0 rounded">Save and continue</button>
            </div>
            <div className="col-md-6 col-12 cart-container pt-5">
                <div className="w-50 ms-auto">
                    <div >
                        <p><small>From <b>Gulshan Plaza Restaura GPR</b> </small></p>
                        <p><small>Arriving in 20-30 min</small></p>
                        <p><small>107 Rd No 8</small></p>
                    </div>
                    <div className="cart-product-item-container">
                        <CartProduct></CartProduct>
                        <CartProduct></CartProduct>
                        <CartProduct></CartProduct>
                        <CartProduct></CartProduct>
                        <CartProduct></CartProduct>
                    </div>
                    <div className="cart-calc mt-2">
                        <p><small>Subtotal 4 item</small> <small>$320</small></p>
                        <p><small>Tax</small><small>$5</small></p>
                        <p><small>Delivery Fee</small><small>$2</small></p>
                        <p><span>Total</span><span>$320</span></p>
                        <button className="w-100  p-3 rounded text-white border-0">Place order</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Cart;