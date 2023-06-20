import React, {useRef, useState} from 'react';
import Container from "react-bootstrap/Container";
import './signPage.css'
import {Button, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app} from "./firebase";

const SignPage = () => {
    const auth = getAuth(app);

    const userRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [userText, setUserText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [pswText, setPswText] = useState('');

    const userInput = (e) => {setUserText(e.target.value)}
    const emailInput = (e) => {setEmailText(e.target.value)}
    const pswInput = (e) => {setPswText(e.target.value)}

    const handleSign = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, emailText, pswText);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container fluid id={'signPageContainer'}>
            <Row>
                <h1 id={'signPageHeader'}>Welcome!</h1>
                <Form.Group id={'signPageFormGroup'}>
                    <h2 id={'signFormHeader'}>Join our squad!</h2>
                    <Form.Label className={'signFormLabel'}>UserName</Form.Label>
                    <Form.Control
                        ref={userRef}
                        value={userText}
                        onChange={userInput}
                        className={'signFormInput'}
                        type=""
                        placeholder="Enter Username..."
                    />
                    <Form.Label className={'signFormLabel'}>Email</Form.Label>
                    <Form.Control
                        ref={emailRef}
                        value={emailText}
                        onChange={emailInput}
                        className={'signFormInput'}
                        type=""
                        placeholder="Enter e-mail..."
                    />
                    <Form.Label className={'signFormLabel'}>Password</Form.Label>
                    <Form.Control
                        ref={passwordRef}
                        value={pswText}
                        onChange={pswInput}
                        className={'signFormInput'}
                        placeholder="Enter password..."
                    />
                </Form.Group>
                <div className={'addCardButtons'}>
                <Button id={'signInButton'} onClick={handleSign}>JOIN!</Button>
                </div>
            </Row>
        </Container>
    )
}

export default SignPage;