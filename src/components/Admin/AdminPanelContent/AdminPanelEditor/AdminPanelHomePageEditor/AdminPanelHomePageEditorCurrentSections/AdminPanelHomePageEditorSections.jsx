import React from "react";
import './AdminPanelHomePageEditorSections.css';

const AdminPanelHomePageEditorSections = (props) => {

    return (
        <>
            <h1>Выбери блок для редактирования</h1>
            <div id={'adminPanelHomePageEditorCurrentSectionsContainer'}>
                <div className={'adminPanelHomePageEditorCurrentSection'}>
                    <button
                        onClick={() => props.handleSectionChoice('carousel')}
                    >
                        Карусель
                    </button>
                </div>
                <div className={'adminPanelHomePageEditorCurrentSection'}>
                    <button
                        onClick={() => props.handleSectionChoice('cards')}
                    >
                        Карточки офферов
                    </button>
                </div>
                <div className={'adminPanelHomePageEditorCurrentSection'}>
                    <button
                        onClick={() => props.handleSectionChoice('advantages')}
                    >
                        Преимущества
                    </button>
                </div>
                <div className={'adminPanelHomePageEditorCurrentSection'}>
                    <button
                        onClick={() => props.handleSectionChoice('steps')}
                    >
                        Шаги
                    </button>
                </div>
            </div>
        </>
    );
};

export default AdminPanelHomePageEditorSections;