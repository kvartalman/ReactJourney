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
                {items.map(item => (
                    <div>
                        <div>{item.title}</div>
                        <div>{item.price}</div>
                        <div>{item.quantity}</div>
                        <div><img src={item.img} alt={'doomslayer'} /></div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Cart
