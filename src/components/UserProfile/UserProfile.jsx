import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {signOut} from 'firebase/auth';
import {auth} from "../Authorization/firebase";
import {NavLink} from "react-router-dom";

const UserProfile = () => {

    const [user, setUser] = useState('');

    // Logout function (using firebase here)
    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        return auth.onAuthStateChanged((user) => {
            setUser(user);
        });
    }, []);


    return (
        <>
            {user ? <Container fluid>
                    {user.email ? <p>Hello there, {auth.currentUser.email}!</p> : null}
                    {user.uid}
                    <NavLink to={'/'}>
                        <Button onClick={handleLogout}>Logout</Button>
                    </NavLink>
                </Container>
                :
                <p>lol</p>}
        </>
    )
}

export default UserProfile;