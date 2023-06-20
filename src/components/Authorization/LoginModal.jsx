import React, {useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import './loginModal.css'
import {NavLink} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {app} from "./firebase";

const auth = getAuth(app);

const LoginModal = (props) => {

    const emailForm = useRef(null);
    const pswForm = useRef(null);

    const [emailText, setEmailText] = useState('');
    const [pswText, setPswText] = useState('');

    const emailInput = (e) => {
        setEmailText(e.target.value)
    };
    const pswInput = (e) => {
        setPswText(e.target.value)
    }

    const handleLogin = async (e) => {
        props.closeModal()
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, emailText, pswText);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Modal show={props.modal} onHide={props.closeModal} id={'loginModalWindow'}>
                <Modal.Header closeButton>
                    <Modal.Title>LOGIN</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={'loginFormsContainer'}>
                        <Form>
                            <Form.Group>
                                <Form.Control
                                    onChange={emailInput}
                                    value={emailText}
                                    ref={emailForm}
                                    className={'loginModalForm'}
                                    placeholder="Your e-mail..."
                                />
                                <Form.Control
                                    onChange={pswInput}
                                    value={pswText}
                                    ref={pswForm}
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
                        <NavLink to={'sign'}>
                            <Button variant="secondary" onClick={() => {
                                props.closeModal()
                            }}>
                                I'm new here
                            </Button>
                        </NavLink>
                        <Button variant="primary" onClick={handleLogin}>
                            Login
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal;