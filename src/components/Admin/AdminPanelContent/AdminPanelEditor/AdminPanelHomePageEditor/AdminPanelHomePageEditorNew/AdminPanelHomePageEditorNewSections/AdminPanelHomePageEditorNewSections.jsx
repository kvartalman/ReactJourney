import React from "react";
import './AdminPanelHomePageEditorNewSections.css';

const AdminPanelHomePageEditorNewSections = (props) => {

    return (
        <>
            <h1>Editor of <span id={'adminPanelHomePageNewWord'}>new</span> content</h1>
            <div id={'adminPanelHomePageEditorNewSectionsContainer'}>
                <div className={'adminPanelHomePageEditorNewSection'}>
                    <button
                        onClick={() => props.handleSectionChoice('carousel')}
                    >
                        Carousel
                    </button>
                </div>
                <div className={'adminPanelHomePageEditorNewSection'}>
                    <button
                        onClick={() => props.handleSectionChoice('cards')}
                    >
                        Best offers cards
                    </button>
                </div>
                <div className={'adminPanelHomePageEditorNewSection'}>
                    <button
                        onClick={() => props.handleSectionChoice('advantages')}
                    >
                        Advantages
                    </button>
                </div>
            </div>
        </>
    );
};

export default AdminPanelHomePageEditorNewSections;