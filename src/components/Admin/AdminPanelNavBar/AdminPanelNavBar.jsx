import React, {useEffect} from "react";
import './AdminPanelNavBar.css';
import {NavLink} from "react-router-dom";

const AdminPanelNavBar = (props) => {

    const handleMenuChoice = () => {
        props.setMenuIndex(0);
        props.setBackIndex(0);
    };

    const handleContentChoice = (name) => {
        props.setBackIndex(1);
        props.setContentName(name);
    }

    const handleTurningBack = () => {
        if (props.backIndex > 0) {
            if (props.backIndex === 1 && props.menuIndex === 1) {
                props.setMenuIndex(0);
                props.setBackIndex(0);
            } else {
                props.setBackIndex(prev => prev - 1)
            }
        }
    }

    return (
        <div id={'adminPanelNavBarMainContainer'}>
            <div id={'adminPanelNavBarFirstContainer'}>
                <div id={'adminPanelNavBarShopAndMainMenuContainer'}>
                    <div id={'adminPanelNavBarBackToShopContainer'}>
                        <NavLink to={'/'} id={'adminPanelNavBarBackToShop'}>Back to shop</NavLink>
                    </div>
                </div>
                <div id={'adminPanelNavBarCategoriesContainer'}>
                    <div className={'adminPanelNavBarCtg'}>
                        <button onClick={() => {
                            handleMenuChoice()
                        }}>Главное меню
                        </button>
                    </div>
                    <div className={'adminPanelNavBarCtg'}>
                        <button
                            onClick={() => handleContentChoice('editor')}
                        >
                            Редактор
                        </button>
                    </div>
                    <div className={'adminPanelNavBarCtg'}>
                        <button
                            onClick={() => handleContentChoice('messages')}
                        >
                            Сообщения
                        </button>
                    </div>
                    <div className={'adminPanelNavBarCtg'}>
                        <button
                            onClick={() => handleContentChoice('todo')}
                        >
                            Список задач
                        </button>
                    </div>
                    <div className={'adminPanelNavBarCtg'}>
                        <button
                            onClick={() => handleContentChoice('staff')}
                        >
                            Персонал
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => handleContentChoice('users')}
                        >
                            Пользователи
                        </button>
                    </div>
                </div>
            </div>
            <div id={'adminPanelNavBarSecondContainer'}>
                <button onClick={() => handleTurningBack()}>
                    Back
                </button>
            </div>
        </div>
    );
};

export default AdminPanelNavBar;