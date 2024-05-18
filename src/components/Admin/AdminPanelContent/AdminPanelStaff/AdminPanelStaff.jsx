import React, {useEffect, useState} from "react";
import './AdminPanelStaff.css';
import Form from "react-bootstrap/Form";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

const AdminPanelStaff = () => {

    const [moderName, setModerName] = useState('');
    const [boosterName, setBoosterName] = useState('');
    const [boostersList, setBoostersList] = useState([]);
    const [moderatorsList, setModeratorsList] = useState([]);
    const [boostersPage, setBoostersPage] = useState(1);
    const [moderatorsPage, setModeratorsPage] = useState(1);
    const [registerModal, setRegisterModal] = useState(false);
    const [staffGroup, setStaffGroup] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [successfullyCreated, setSuccessfullyCreated] = useState(false);
    const [successfullyDeleted, setSuccessfullyDeleted] = useState(false);
    const [staffToDelete, setStaffToDelete] = useState('');
    const [group, setGroup] = useState('');

    const itemsPerPage = 10;

    const passwordInput = (e) => {
        setPassword(e.target.value);
    }

    const passwordRepeatInput = (e) => {
        setPasswordRepeat(e.target.value);
    }

    const emailInput = (e) => {
        setEmail(e.target.value);
    }

    const nicknameInput = (e) => {
        setNickname(e.target.value);
    }

    const moderNameInput = (e) => {
        setModerName(e.target.value);
    }

    const boosterNameInput = (e) => {
        setBoosterName(e.target.value);
    }

    const staffRegistrationModal = (group) => {
        setStaffGroup(group);
        setRegisterModal(true);
    }

    const handleRegisterModalClose = () => {
        setRegisterModal(false);
        setEmail('');
        setPassword('');
        setNickname('');
        setPasswordRepeat('');
    }

    const paginate = (list, page) => {
        const startIndex = (page - 1) * itemsPerPage;
        return list.slice(startIndex, startIndex + itemsPerPage);
    }

    const showBoosters = () => {

        if (boosterName) {
            return boostersList.filter(user => user.toLowerCase().includes(boosterName.toLowerCase())).sort()
        }

        return paginate(boostersList, boostersPage).map(booster => (
            <li key={booster.id}>{booster.username}</li>
        ));
    }

    const showModerators = () => {

        if (moderName) {
            const searchList = moderatorsList.filter(
                user =>
                    user.username.toLowerCase().includes(moderName.toLowerCase())).sort()

            return paginate(searchList, moderatorsPage).map(moderator => (
                <li onClick={() => setStaffToDelete(moderator.username)} key={moderator.id}>{moderator.username}</li>
            ))
        }

        return paginate(moderatorsList, moderatorsPage).map(moderator => (
            <li key={moderator.id}>{moderator.username}</li>
        ));
    }

    const handleBoostersPrev = () => {
        setBoostersPage(prev => Math.max(prev - 1, 1));
    }

    const handleBoostersNext = () => {
        setBoostersPage(prev => Math.min(prev + 1, Math.ceil(boostersList.length / itemsPerPage)));
    }

    const handleModeratorsPrev = () => {
        setModeratorsPage(prev => Math.max(prev - 1, 1));
    }

    const handleModeratorsNext = () => {
        setModeratorsPage(prev => Math.min(prev + 1, Math.ceil(moderatorsList.length / itemsPerPage)));
    }

    const handleStaffCreation = async (group) => {

        const response = await axios.post('http://localhost:8000/auth/users/',
            {
                username: nickname,
                email: email,
                password: password,
                group: group
            })
            .then(response => {
                setSuccessfullyCreated(true);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleStaffDeletion = async () => {
        const authToken = localStorage.getItem('auth_token')

        const data = {
            username: staffToDelete,
            group: group
        }

        const response = await axios.delete('http://localhost:8000/users/api/v1/delete_staff', {
            headers: {
                Authorization: `Token ${localStorage.getItem('auth_token')}`
            },
            data: data
        })
            .then(response => {
                setSuccessfullyDeleted(true);
            })
            .catch(error => {
                console.log(error)
            })
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
                        setBoostersList(response.data.boosters);
                        setModeratorsList(response.data.moderators)
                        console.log(response.data.boosters, response.data.moderators)
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
                            <button
                                onClick={() => staffRegistrationModal('moderator')}
                            >Зарегистрировать модератора
                            </button>
                        </div>
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
                            {staffToDelete ?
                            <img src={'/admin-panel/garbage.png'} width={50} alt={'Корзина'}/>
                                :
                                null
                            }
                        </div>
                        <div>
                            <ul>
                                {showModerators()}
                            </ul>
                            <button onClick={handleModeratorsPrev} disabled={moderatorsPage === 1}>Предыдущие 10
                            </button>
                            <button onClick={handleModeratorsNext}
                                    disabled={moderatorsPage === Math.ceil(moderatorsList.length / itemsPerPage)}>Следующие
                                10
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Бустеры</h2>
                    <div className={'adminPanelStaffListContainer'}>
                        <div>
                            <button
                                onClick={() => staffRegistrationModal('booster')}
                            >Зарегистрировать бустера
                            </button>
                        </div>
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
                            <ul>
                                {showBoosters()}
                            </ul>
                            <button onClick={handleBoostersPrev} disabled={boostersPage === 1}>Предыдущие 10
                            </button>
                            <button onClick={handleBoostersNext}
                                    disabled={boostersPage === Math.ceil(boostersList.length / itemsPerPage)}>Следующие
                                10
                            </button>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
            </div>
            <Modal centered show={registerModal} onHide={() => handleRegisterModalClose()}>
                <h3>Регистрация нового {staffGroup === 'booster' ? 'бустера' : 'модератора'}</h3>
                <div>
                    <Form>
                        <Form.Control
                            value={nickname}
                            onChange={nicknameInput}
                            className={'signFormInput'}
                            type="text"
                            placeholder="Введите никнейм..."
                        />
                        <Form.Control
                            value={email}
                            onChange={emailInput}
                            className={'signFormInput'}
                            type="text"
                            placeholder="Введите почту..."
                        />
                        <Form.Control
                            value={password}
                            onChange={passwordInput}
                            className={'signFormInput'}
                            type={showPassword ? "text" : "password"}
                            placeholder="Введите пароль..."
                        />
                        <Form.Control
                            value={passwordRepeat}
                            onChange={passwordRepeatInput}
                            className={'signFormInput'}
                            type={showPassword ? "text" : "password"}
                            placeholder="Повторите пароль..."
                        />
                    </Form>
                    <button
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                    </button>
                </div>
                <button
                    onClick={() => handleStaffCreation(staffGroup === 'moderator' ?
                        'Moderators'
                        :
                        'Boosters'
                    )}
                >
                    Создать
                </button>
            </Modal>
            <Modal centered show={successfullyCreated} onHide={() => setSuccessfullyCreated(false)}>
                Сотрудник успешно зарегистрирован
            </Modal>
            <Modal centered show={successfullyDeleted} onHide={() => setSuccessfullyDeleted(false)}>
                Сотрудник успешно удалён
            </Modal>
        </div>
    )
}

export default AdminPanelStaff;