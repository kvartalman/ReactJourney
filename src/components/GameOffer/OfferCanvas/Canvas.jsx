import React, {useState} from 'react';
import {Button, Offcanvas} from "react-bootstrap";
import './Canvas.css'

function Canvas({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2 canvasButton">
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props} className={'offCanvas'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Canvas