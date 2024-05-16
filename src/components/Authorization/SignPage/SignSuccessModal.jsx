import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import './SignSuccessModal.css';

const SignSuccessModal = (props) => {

    const [showSentInfo, setShowSentInfo] = useState(false);

    const handleEmailResend = async () => {
        await axios.post('http://localhost:8000/auth/users/resend_activation/', {
            email: props.email
        })
            .then(response => {
                console.log(response);
                setShowSentInfo(true);
            })
            .catch(error => {
                console.log(error)
            })
    }

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
                {showSentInfo ?
                    <p>We sent you letter again! If you still can't get letter - write to our manager please</p>
                    :
                    null
                }
                <div>
                    <Button onClick={() => handleEmailResend()}>I didn't get an email</Button>
                    <Button onClick={props.onHide}>Okay!</Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default SignSuccessModal