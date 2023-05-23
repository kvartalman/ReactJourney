import React from 'react';
import './OfferPanel.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import OfferPanelButton from "./OfferPanelButton";

const OfferPanel = (props) => {
    return (
        <ButtonGroup vertical className={'offerPanel'}>
            <OfferPanelButton link={'#'} name={'Button'}/>
            <OfferPanelButton link={'#'} name={'Button'}/>
            <OfferPanelButton link={'#'} name={'Button'}/>
            <OfferPanelButton link={'#'} name={'Button'}/>
            <OfferPanelButton link={'#'} name={'Button'}/>
        </ButtonGroup>
    )
}

export default OfferPanel