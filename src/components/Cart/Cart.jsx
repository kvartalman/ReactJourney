import {useCart} from "react-use-cart";
import './Cart.css'
import React from "react";

const Cart = () => {
    const {
        isEmpty,
        cartTotal,
        totalUniqueItems,
        items,
        updateItemQuantity,
        emptyCart,
        removeItem,
        addItem
    } = useCart();

    return (
        <div style={{background: `url('./backgrounds/checkoutPage.jpg')`}} id={'cartMainContainer'}>
            <div id={'checkoutForm'}>
                <p>Total value: {cartTotal}</p>
            </div>
        </div>
    )

}

export default Cart
