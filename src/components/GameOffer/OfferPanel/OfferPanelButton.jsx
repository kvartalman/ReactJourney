import React from 'react';
import '../GameOffer.css'
import {NavLink} from "react-router-dom";

const OfferPanelButton = (props) => {
    return (
        <div>
            <NavLink to={props.link}>
                <span className={'offerButton'}>
                {props.name}
                </span>
            </NavLink>
        </div>
    )
}

export default OfferPanelButton