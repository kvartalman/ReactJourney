import React from 'react';
import '../GameOffer.css'
import {NavLink} from "react-router-dom";
import $ from 'jquery';
const OfferPanelButton = (props) => {

    return (
        <div>
            <NavLink onClick={props.clickFunc} to={props.link}>
                <span className={'offerButton'}>
                {props.name}
                </span>
            </NavLink>
        </div>
    )
}

export default OfferPanelButton