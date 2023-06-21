import React from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {signOut} from 'firebase/auth';
import {auth} from "../Authorization/firebase";

const UserProfile = () => {

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Container fluid>
            Hello there!
            <Button onClick={handleLogout}>Logout</Button>
        </Container>
    )
}

export default UserProfile;