import React, {useEffect, useState} from "react";
import './AdminPanelStaff.css';
import Form from "react-bootstrap/Form";
import axios from "axios";

const AdminPanelStaff = () => {

    const [moderName, setModerName] = useState('');
    const [boosterName, setBoosterName] = useState('');
    const [staffList, setStaffList] = useState('');

    const moderNameInput = (e) => {
        setModerName(e.target.value);
    }

    const boosterNameInput = (e) => {
        setBoosterName(e.target.value);
    }

    useEffect(() => {
        const fetchStaffList = async () => {

            const authToken = localStorage.getItem('auth_token')

            try {
                const response = await axios.get('http://localhost:8000/users/api/v1/get_staff_list', {
                    headers: {
                        Authorization: `Token ${authToken}`
                    }
                }).then(response => {
                        setStaffList(response.data);
                        console.log(response.data)
                    }
                )
            } catch (error) {
                console.error(error)
            }
        }
        fetchStaffList();
    }, []);

    return (
        <div id={'adminPanelStaffMainContainer'}>
            <h1>Персонал</h1>
            <div id={'adminPanelStaffTypesContainer'}>
                <div>
                    <h2>Модераторы</h2>
                    <div className={'adminPanelStaffListContainer'}>
                        <div>
                            <Form>
                                <Form.Control
                                    value={moderName}
                                    onChange={moderNameInput}
                                    className={'signFormInput'}
                                    type="text"
                                    placeholder="Введи имя модератора..."
                                />
                            </Form>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
                <div>
                    <h2>Бустеры</h2>
                    <div className={'adminPanelStaffListContainer'}>
                        <div>
                            <Form>
                                <Form.Control
                                    value={boosterName}
                                    onChange={boosterNameInput}
                                    className={'signFormInput'}
                                    type="text"
                                    placeholder="Введи имя бустера..."
                                />
                            </Form>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPanelStaff;