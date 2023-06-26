import React from "react";
import './AddCartModal.css'
import Modal from 'react-bootstrap/Modal';

const AddCartModal = (props) => {

    return (
                <Modal
                    centered
                    size="sm"
                    show={props.show}
                    onHide={props.setShowModal(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Small Modal
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
    );
}

export default AddCartModal;