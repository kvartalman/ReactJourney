import React from "react";
import './AdminPanelNavBar.css';
import {NavLink} from "react-router-dom";

const AdminPanelNavBar = (props) => {

    const handleMenuChoice = () => {
        props.setMenuIndex(0);
    };

    return (
        <div id={'adminPanelNavBarMainContainer'}>
            <div id={'adminPanelNavBarBackToShopContainer'}>
                <NavLink to={'/'} id={'adminPanelNavBarBackToShop'}>Back to shop</NavLink>
                <button onClick={() => {handleMenuChoice()}}>Main menu</button>
            </div>
        </div>
    );
};

export default AdminPanelNavBar;