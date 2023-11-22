import React from "react";
import './AdminPanelHomePageEditorNewSections.css';

const AdminPanelHomePageEditorNewSections = (props) => {

    return (
        <>
            <h1>Editor of new content</h1>
            <div id={'adminPanelHomePageEditorNewSectionsContainer'}>
                <div className={'adminPanelHomePageEditorNewSection'}>
                    <button
                        onClick={() => props.handleSectionChoice('cards')}
                    >
                        Best offers cards
                    </button>
                </div>
            </div>
        </>
    );
};

export default AdminPanelHomePageEditorNewSections;