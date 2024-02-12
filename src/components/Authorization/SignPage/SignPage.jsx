import React, {useState} from 'react';
import './signPage.css'
import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SignSuccessModal from "./SignSuccessModal";
import axios from "axios";

const SignPage = () => {

    const [userText, setUserText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [pswText, setPswText] = useState('');
    const [newError, setNewError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showPsw, setShowPsw] = useState(false);
    const [email, setEmail] = useState('');
    const userInput = (e) => {
        setUserText(e.target.value)
    }
    const emailInput = (e) => {
        setEmailText(e.target.value)
    }
    const pswInput = (e) => {
        setPswText(e.target.value)
    }

    const clearForms = () => {
        setUserText('');
        setEmailText('');
        setPswText('');
    }

    // Using Firebase SDK to create new user
    const handleSign = async (e) => {
        e.preventDefault();
            const response = await axios.post('http://localhost:8000/auth/users/',
                {
                    username: userText,
                    email: emailText,
                    password: pswText,
                    group: 'Boosters'
                })
                .then(response => {
                    setShowModal(true);
                    setNewError(null);
                    setEmail(emailText);
                    clearForms();
                })
                .catch(error => {
                    console.log(error)
                })


    }

    return (
        <div id={'signPageContainer'}>
            <h1 id={'signPageHeader'}>Welcome!</h1>
            <Form.Group id={'signPageFormGroup'}>
                <h2 id={'signFormHeader'}>Join our squad!</h2>
                <Form.Label className={'signFormLabel'}>UserName</Form.Label>
                <Form.Control
                    value={userText}
                    onChange={userInput}
                    className={'signFormInput'}
                    type=""
                    placeholder="Enter Username..."
                />
                <Form.Label className={'signFormLabel'}>Email</Form.Label>
                <Form.Control
                    value={emailText}
                    onChange={emailInput}
                    className={'signFormInput'}
                    type="text"
                    placeholder="Enter e-mail..."
                />
                <Form.Label className={'signFormLabel'}>Password</Form.Label>
                <Form.Control
                    value={pswText}
                    type={showPsw ? 'text' : 'password'}
                    onChange={pswInput}
                    className={'signFormInput'}
                    placeholder="Enter password..."
                />
                <Form.Check
                    type="checkbox"
                    onChange={() => setShowPsw(!showPsw)}
                />
                {newError ? <p id={'errorMessage'}>
                    {newError}
                </p> : null}
            </Form.Group>
            <div className={'addCardButtons'}>
                <Button id={'signInButton'} onClick={handleSign}>JOIN!</Button>
            </div>
            <SignSuccessModal
                email={email}
                show={showModal} onHide={() => setShowModal(false)}
            />
        </div>
    )
}

export default SignPage;