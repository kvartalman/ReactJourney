import React from "react";
import './AdminPanelEditorSections.css';

const AdminPanelEditorSections = (props) => {
    return (
        <div id={'adminPanelEditorSectionsMainContainer'}>
            <h1>Что необходимо отредактировать?</h1>
            <div id={'adminPanelEditorSectionsContainer'}>
                <div
                    className={'adminPanelEditorSectionContainer'}
                >
                    <button onClick={() => props.handleEditorSection(0)}>
                        Главная страница
                    </button>
                </div>
                <div
                    className={'adminPanelEditorSectionContainer'}
                >
                    <button onClick={() => props.handleEditorSection(1)}>
                        Игры
                    </button>
                </div>
                <div
                    className={'adminPanelEditorSectionContainer'}
                >
                    <button onClick={() => props.handleEditorSection(2)}>
                        Продукты
                    </button>
                </div>
                <div
                    className={'adminPanelEditorSectionContainer'}
                >
                    <button onClick={() => props.handleEditorSection(3)}>
                        Цены
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPanelEditorSections;