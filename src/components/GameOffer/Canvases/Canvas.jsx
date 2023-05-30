import React, {useState} from 'react';
import {Button, Offcanvas} from "react-bootstrap";
import './Canvas.css'
import OfferPanelButton from "../OfferPanel/OfferPanelButton";


function Canvas(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let canvasButtonsArr = props.canvasButtons.map(button => (
        <OfferPanelButton clickFunc={handleClose} link={button.link} name={button.name} />
    ))

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2 canvasButton">
                {props.buttonName}
            </Button>
            <Offcanvas placement={props.placement} show={show} onHide={handleClose} {...props} className={
                'offCanvas'} id={'gameOfferCanvas'}>
                <Offcanvas.Header closeButton className={'offerCanvasHeader'}>
                    <Offcanvas.Title className={'offerCanvasTitle'}>{props.title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {canvasButtonsArr}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Canvas