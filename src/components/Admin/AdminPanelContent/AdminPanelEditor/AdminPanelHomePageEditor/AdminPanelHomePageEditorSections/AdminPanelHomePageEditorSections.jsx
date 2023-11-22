import React from "react";
import './AdminPanelHomePageEditorSections.css';

const AdminPanelHomePageEditorSections = (props) => {
    return (
        <>
            <h1>Choose</h1>
            <div id={'adminPanelHomePageEditorSectionsContainer'}>
                <div className={'adminPanelHomePageEditorSectionContainer'}>
                    <button
                        onClick={() => props.handleSectionChoice('current')}
                    >Edit current
                    </button>

                </div>
                <div className={'adminPanelHomePageEditorSectionContainer'}>
                    <button
                        onClick={() => props.handleSectionChoice('new')}
                    >Create new
                    </button>
                </div>
            </div>
        </>
    );
};

export default AdminPanelHomePageEditorSections;