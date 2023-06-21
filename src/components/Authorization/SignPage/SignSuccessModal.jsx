import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const SignSuccessModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Success!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Check your e-mail</h4>
                <p>
                    We use mail authentication to ensure the stability of our store.
                    We have sent an email to the address provided. Please open it and follow the link.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Okay!</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SignSuccessModal