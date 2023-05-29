import React, {useState} from 'react';
import {Button, Offcanvas} from "react-bootstrap";
import '../Canvas.css'

function OfferCanvas({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2 canvasButton">
                {name}
            </Button>
            <Offcanvas placement={'start'} show={show} onHide={handleClose} {...props} className={'offCanvas'}>
                <Offcanvas.Header closeButton className={'offerCanvasHeader'}>
                    <Offcanvas.Title className={'offerCanvasTitle'}>Offers</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {props.canvasButtonsArr}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OfferCanvas