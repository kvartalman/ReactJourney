import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {useCart} from "react-use-cart";
import './CartGoodsModal.css'
import {NavLink} from "react-router-dom";

const CartGoodsModal = (props) => {

    const {
        items,
        removeItem
    } = useCart();

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Let's make some boost!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={'cartGoodsModalBody'}>
                    {items.map(item => (
                        <div key={item.id} className={'cartGoodsItem'}>
                            <div className={'cartGoodsItemInfo'}>
                                <div className={'cartGoodsItemImgContainer'}>
                                    <img src={item.img} alt={'doomslayer'} className={'cartGoodsItemImg'}/>
                                </div>
                                <div className={'cartGoodsItemName'}>
                                    <div className={'cartGoodsItemTitle'}>{item.title}</div>
                                    <div className={'cartGoodsItemQuantity'}>Quantity: {item.quantity}</div>
                                </div>
                            </div>
                            <div className={'cartGoodsItemPriceContainer'}>
                                <div className={'cartGoodsItemPrice'}>{item.price}&#8364;</div>
                                <Button onClick={() => removeItem(item.id)} className={'cardGoodsTrashButton'}>
                                    <img src={'./trash.png'} alt={'trash bin'} className={'cartGoodsTrashBin'}/>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className={'cartGoodsFooterButtons'}>
                    <NavLink to={'cart'}>
                        <Button onClick={props.onHide} className={'cartGoodsButton'}>
                            Checkout
                        </Button>
                    </NavLink>
                    <Button onClick={props.onHide} className={'cartGoodsButton'}>Continue shopping</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default CartGoodsModal;