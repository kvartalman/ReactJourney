import React, {useState} from 'react';
import './signPage.css'
import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {createUserWithEmailAndPassword, getAuth, updateProfile} from "firebase/auth";
import {app} from "../firebase";
import SignSuccessModal from "./SignSuccessModal";

const SignPage = () => {
    const auth = getAuth(app);

    const [userText, setUserText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [pswText, setPswText] = useState('');
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const userInput = (e) => {
            setUserText(e.target.value)
    }
    const emailInput = (e) => {
            setEmailText(e.target.value)
    }
    const pswInput = (e) => {
            setPswText(e.target.value)
    }

    // Using Firebase SDK to create new user
    const handleSign = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, emailText, pswText);
            const user = userCredential.user;
            await updateProfile(user, {displayName: userText} );
            setShowModal(true);
            setError(null);
        } catch (error) {
            if (error.code) {
                switch(error.code) {
                    case 'auth/invalid-email': {
                        setError('Неверный формат e-mail');
                        break;
                    }
                    case 'auth/weak-password': {
                        setError('Неверный формат пароля (минимум 6 символов)');
                        break;
                    }
                    case 'auth/missing-password': {
                        setError('Поля не должны быть пустыми!');
                        break;
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
                        type={'password'}
                        onChange={pswInput}
                        className={'signFormInput'}
                        placeholder="Enter password..."
                    />
                    {error ? <p id={'errorMessage'}>
                        {error}
                    </p> : null}
                </Form.Group>
                <div className={'addCardButtons'}>
                <Button id={'signInButton'} onClick={handleSign}>JOIN!</Button>
                </div>
            <SignSuccessModal show={showModal} onHide={() => setShowModal(false)} />
        </div>
    )
}

export default SignPage;