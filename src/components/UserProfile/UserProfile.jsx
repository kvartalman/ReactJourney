import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import './UserProfile.css'
import {NavLink} from "react-router-dom";
import axios from "axios";

const UserProfile = () => {

    const [user, setUser] = useState('');
    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/v1/logout', {
                refresh_token: localStorage.getItem('refresh_token')
            })
            if (response.status === 200 || response.status === 201) {
                localStorage.removeItem('access_token')
                localStorage.removeItem('refresh_token')
            }

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        const checkUser = async () => {
            const response = await axios.get('http://localhost:8000/api/v1/user_view')

            if (response.status === 200 || response.status === 201) {
                setUser(true)
            }
        }
        checkUser()
    }, []);

    return (
        <>
            {user ?
                <Container fluid>
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