import React, {useEffect, useState} from 'react';
import Button from "react-bootstrap/Button";
import './UserProfile.css'
import {NavLink} from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const UserProfile = () => {

    const validator = require('validator');

    const [user, setUser] = useState('');
    const [deleteAccountPassword, setDeleteAccountPassword] = useState('');
    const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
    const [changePasswordModal, setChangePasswordModal] = useState(false);
    const [changeEmailModal, setChangeEmailModal] = useState(false);
    const [newEmail, setNewEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordRepeat, setNewPasswordRepeat] = useState('');
    const [passwordEmailChange, setPasswordEmailChange] = useState('');
    const [passwordErrorText, setPasswordErrorText] = useState('');
    const [emailErrorText, setEmailErrorText] = useState('');
    const [emailSentModal, setEmailSentModal] = useState(false);

    const [wrongPassword, setWrongPassword] = useState('');
    const [emailChangeWrongPassword, setEmailChangeWrongPassword] = useState('');

    const deleteAccountPasswordInput = (e) => {
        setDeleteAccountPassword(e.target.value);
    }

    const passwordEmailChangeInput = (e) => {
        setPasswordEmailChange(e.target.value)
    }

    const newEmailInput = (e) => {
        setNewEmail(e.target.value);
    }

    const currentPasswordInput = (e) => {
        setCurrentPassword(e.target.value);
    }

    const newPasswordInput = (e) => {
        setNewPassword(e.target.value);
    }

    const newPasswordRepeatInput = (e) => {
        setNewPasswordRepeat(e.target.value)
    }

    const handleModalsOfChangesClose = (stateFunc) => {
        stateFunc(false);
        setWrongPassword('');
    }

    const handleLogout = async () => {
        const response = await axios.post('http://localhost:8000/auth/token/logout',
            null,
            {
                headers: {
                    Authorization: `Token ${localStorage.getItem('auth_token')}`
                }
            })
            .then(response => {
                console.log(response);
                localStorage.removeItem('auth_token');
                console.log('Successfully logout');
                window.location.href = '/';
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
                setWrongPassword(error.response.data.error);
            })
    }

    const deleteAccount = async () => {
        await axios.delete(`http://localhost:8000/users/api/v1/user_delete?password=${deleteAccountPassword}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('auth_token')}`
            }
        })
            .then(response => {
                console.log(response);
                localStorage.removeItem('auth_token');
                setShowDeleteAccountModal(false);
                window.location.href = '/';
                window.location.reload();
            })
            .catch(error => {
                console.log(error);

            })
    }

    const changeEmail = async () => {

        if (newEmail && validator.isEmail(newEmail) && passwordEmailChange) {
            console.log(localStorage.getItem('auth_token'))
            await axios.patch('http://localhost:8000/users/api/v1/user_update_email',
                {
                    new_email: newEmail,
                    password: passwordEmailChange
                },
                {
                    headers: {
                        Authorization: `Token ${localStorage.getItem('auth_token')}`
                    }
                }
            )
                .then(response => {
                    console.log(response)
                    setEmailSentModal(true)
                })
                .catch(error => {
                    console.log(error)
                    setWrongPassword(error.response.data.error);
                })
        } else if (!newEmail || !validator.isEmail(newEmail)) {
            setEmailErrorText('Email field must be filled in correctly')
        }
        else if (!passwordEmailChange) {
            setEmailErrorText('Password field must be filled')
        }
    }

    const changePassword = async () => {

        if (newPassword && newPasswordRepeat && newPassword === newPasswordRepeat && newPassword.length >= 8) {
            await axios.patch('http://localhost:8000/users/api/v1/user_update_password',
                {
                    current_password: currentPassword,
                    new_password: newPassword,
                },
                {
                    headers: {
                        Authorization: `Token ${localStorage.getItem('auth_token')}`
                    }
                })
                .then(response => {
                    console.log(response)
                    setWrongPassword('');
                })
                .catch(error => {
                    console.log(error)
                    setWrongPassword(error.response.data.error);
                })
        } else if (!newPassword) {
            setPasswordErrorText('You must enter new password!')
        } else if (newPassword !== newPasswordRepeat) {
            setPasswordErrorText('Password mismatch')
        } else if (newPassword.length < 8) {
            setPasswordErrorText('Password length must be at least 8 characters')
        }
    }

    useEffect(() => {
        const checkUser = async () => {

            const authToken = localStorage.getItem('auth_token')

            if (authToken) {
                const response = await axios.get('http://localhost:8000/users/api/v1/user_view', {
                    headers: {
                        Authorization: `Token ${authToken}`
                    }
                })
                    .then(response => {
                        setUser(true);
                        console.log(response.data);
                    })
                    .catch(error => {
                        setUser(false);
                    })
            }
        }
        checkUser()
    }, []);


    return (
        <div>
            {user ?
                <div>
                    <NavLink to={'/'}>
                        <Button onClick={handleLogout}>Logout</Button>
                    </NavLink>
                    <div id={'userProfileDeleteAccountContainer'}>
                        <p onClick={() => setShowDeleteAccountModal(true)}>Delete account</p>

                    </div>
                    <div id={'userProfileChangeDataContainer'}>
                        <p onClick={() => setChangeEmailModal(true)}>Change email</p>
                        <p onClick={() => setChangePasswordModal(true)}>Change password</p>
                    </div>
                    <Modal centered show={changeEmailModal} onHide={() => handleModalsOfChangesClose(setChangeEmailModal)}>
                        <h3>Change email</h3>
                        <Form>
                            <Form.Label>Enter new email</Form.Label>
                            <Form.Control
                                value={newEmail}
                                onChange={newEmailInput}
                                placeholder={'Enter new email here...'}
                            />
                            <Form.Label>Confirm with password</Form.Label>
                            <Form.Control
                                value={passwordEmailChange}
                                onChange={passwordEmailChangeInput}
                                placeholder={'Enter password here...'}
                            />
                        </Form>
                        <div>
                            {emailErrorText ?
                                <p>{emailErrorText}</p>
                                :
                                null
                            }
                            {
                                wrongPassword ?
                                    <p>{wrongPassword}</p>
                                    :
                                    null
                            }
                            <button
                                onClick={() => changeEmail()}
                            >Confirm
                            </button>
                        </div>
                    </Modal>
                    <Modal centered show={changePasswordModal} onHide={() => handleModalsOfChangesClose(setChangePasswordModal)}>
                        <h3>Change password</h3>
                        <Form>
                            <Form.Label>Enter current password</Form.Label>
                            <Form.Control
                                value={currentPassword}
                                onChange={currentPasswordInput}
                                placeholder={'Enter current password here...'}
                            />
                            <Form.Label>Enter new password</Form.Label>
                            <Form.Control
                                value={newPassword}
                                onChange={newPasswordInput}
                                placeholder={'Enter new password here...'}
                            />
                            <Form.Label>Confirm new password</Form.Label>
                            <Form.Control
                                value={newPasswordRepeat}
                                onChange={newPasswordRepeatInput}
                                placeholder={'Enter new password again...'}
                            />
                        </Form>
                        <div>
                            {passwordErrorText ?
                                <p>{passwordErrorText}</p>
                                :
                                null
                            }
                            {wrongPassword ?
                                <p>{wrongPassword}</p>
                                :
                                null
                            }
                            <button
                                onClick={() => changePassword()}
                            >Confirm
                            </button>
                        </div>
                    </Modal>
                    <Modal centered show={showDeleteAccountModal} onHide={() => handleModalsOfChangesClose(setShowDeleteAccountModal)}>
                        <h3>Are you sure?</h3>
                        <p>You will lose all your statistic</p>
                        <Form>
                            <Form.Label>Enter password to confirm</Form.Label>
                            <Form.Control
                                value={deleteAccountPassword}
                                onChange={deleteAccountPasswordInput}
                                placeholder={'Enter password here...'}
                            />
                        </Form>
                        {wrongPassword ?
                            <p>{wrongPassword}</p>
                            :
                            null
                        }
                        <button
                            onClick={() => deleteAccount()}
                        >Confirm
                        </button>
                        <button
                            onClick={() => setShowDeleteAccountModal(false)}
                        >Close
                        </button>
                    </Modal>
                    <Modal centered show={emailSentModal} onHide={() => setEmailSentModal(false)}>
                        <p>Email changed successfully!</p>
                    </Modal>
                    <Modal centered ></Modal>
                </div>
                :
                <p>Log in to visit this page</p>}
        </div>
    )
}

export default UserProfile;