import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import './loginModal.css'
import {NavLink} from "react-router-dom";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "./firebase";



const LoginModal = (props) => {

    const [emailText, setEmailText] = useState('');
    const [pswText, setPswText] = useState('');
    const [error, setError] = useState(null);
    const [showPsw, setShowPsw] = useState(false);

    const emailInput = (e) => {
            setEmailText(e.target.value)
    };
    const pswInput = (e) => {
            setPswText(e.target.value)
    }

    const clearForms = () => {
        setPswText('');
        setEmailText('');
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, emailText, pswText);
            clearForms();
            setError(null);
            props.closeModal();
        } catch (error) {
            if (error.code) {
                switch(error.code) {
                    case 'auth/user-not-found': {
                        setError('User not found. Make sure you enter the correct email');
                        break;
                    }
                    case 'auth/wrong-password': {
                        setError('Password is incorrect');
                        break;
                    }
                    case 'auth/invalid-email': {
                        setError('Wrong email format');
                        break;
                    }
                    case 'auth/user-disabled': {
                        setError('Your account was disabled. Contact support');
                        break;
                    }
                    case 'auth/network-request-failed': {
                        setError('Server is not available. Please try again later');
                        break;
                    }
                    case 'auth/too-many-requests': {
                        setError('Too many requests');
                        break;
                    }
                    case 'auth/internal-error': {
                        setError('Server error. Please try again later');
                        break;
                    }
                    case 'auth/missing-password': {
                        setError('Fields must not be empty')
                    }
                    default:
                        break;
                }
            } else {
                setError(error.message);
            }
        }
    }

    return (
        <>
            <Modal centered show={props.modal} onHide={props.closeModal} id={'loginModalWindow'}>
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
                                    className={'loginModalForm'}
                                    placeholder="Your e-mail..."
                                />
                                <Form.Control
                                    onChange={pswInput}
                                    value={pswText}
                                    checked={showPsw}
                                    type={showPsw ? 'text' : 'password'}
                                    className={'loginModalForm'}
                                    placeholder="Your password..."
                                />
                                <Form.Check
                                    type="checkbox"
                                    onChange={() => setShowPsw(!showPsw)}
                                />
                                <NavLink to={'/'} onClick={props.closeModal}>Forgot Password?</NavLink>
                            </Form.Group>
                        </Form>
                    </div>
                    {error ? <p id={'errorMessage'}>
                        {error}
                    </p> : null}
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