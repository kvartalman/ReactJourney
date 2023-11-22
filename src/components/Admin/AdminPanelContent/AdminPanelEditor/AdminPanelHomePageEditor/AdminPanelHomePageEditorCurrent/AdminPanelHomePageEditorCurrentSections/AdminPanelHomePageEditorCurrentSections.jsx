import React from "react";
import './AdminPanelHomePageEditorCurrentSections.css';

const AdminPanelHomePageEditorCurrentSections = (props) => {

    return (
        <>
            <h1>Editor of current content</h1>
            <div id={'adminPanelHomePageEditorCurrentSectionsContainer'}>
                <div className={'adminPanelHomePageEditorCurrentSection'}>
                    <button
                        onClick={() => props.handleSectionChoice('carousel')}
                    >
                        Carousel
                    </button>
                </div>
                <div className={'adminPanelHomePageEditorCurrentSection'}>
                    <button
                        onClick={() => props.handleSectionChoice('cards')}
                    >
                        Best offers cards
                    </button>
                </div>
                <div className={'adminPanelHomePageEditorCurrentSection'}>
                    <button
                        onClick={() => props.handleSectionChoice('advantages')}
                    >
                        Advantages block
                    </button>
                </div>
                <div className={'adminPanelHomePageEditorCurrentSection'}>
                    <button
                        onClick={() => props.handleSectionChoice('steps')}
                    >
                        Steps block
                    </button>
                </div>
            </div>
        </>
    );
};

export default AdminPanelHomePageEditorCurrentSections;