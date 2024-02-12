import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import './loginModal.css'
import {NavLink} from "react-router-dom";
import axios from "axios";


const LoginModal = (props) => {

    const [usernameText, setUsernameText] = useState('');
    const [pswText, setPswText] = useState('');
    const [newError, setNewError] = useState(null);
    const [showPsw, setShowPsw] = useState(false);
    const [remember, setRemember] = useState(false);

    const usernameInput = (e) => {
        setUsernameText(e.target.value)
    };
    const pswInput = (e) => {
        setPswText(e.target.value)
    }

    const clearForms = () => {
        setPswText('');
        setUsernameText('');
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
           const response = await axios.post('http://localhost:8000/auth/token/login',
               {
                   username: usernameText,
                   password: pswText,
                   remember: remember

               });

            if (response.status === 201 || response.status === 200) {
                props.closeModal()
                setNewError(null);
                props.setUser(true)
                clearForms();
                localStorage.setItem('auth_token', response.data['auth_token'])
                console.log('Login successful. Tokens:', response.data);
            }

        } catch (error) {
            if (error.response) {
                setNewError(error.response.data.detail);
            } else {
                setNewError('Error during login')
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
                                    onChange={usernameInput}
                                    value={usernameText}
                                    className={'loginModalForm'}
                                    placeholder="Your username..."
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
                                <Form.Check
                                    type={'checkbox'}
                                    onChange={() => setRemember(!remember)}
                                    />
                                <NavLink to={'/'} onClick={props.closeModal}>Forgot Password?</NavLink>
                            </Form.Group>
                        </Form>
                    </div>
                    {newError ? <p id={'errorMessage'}>
                        {newError}
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