import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import './loginModal.css'
import {NavLink} from "react-router-dom";

const LoginModal = (props) => {


    return (
        <>
            <Modal show={props.modal} onHide={props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>LOGIN</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={'loginFormsContainer'}>
                        <Form>
                            <Form.Group>
                                <Form.Control
                                    className={'loginModalForm'}
                                    placeholder="Your e-mail..."
                                />
                                <Form.Control
                                    className={'loginModalForm'}
                                    placeholder="Your password..."
                                />
                                <NavLink to={'/'} onClick={props.closeModal}>Forgot Password?</NavLink>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className={'loginButtonsContainer'}>
                        <Button variant="secondary" onClick={props.closeModal}>
                            I'm new here
                        </Button>
                        <Button variant="primary" onClick={props.closeModal}>
                            Login
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal;