import React from "react";
import './AdminPanelProductsEditorSections.css';

const AdminPanelProductsEditorSections = (props) => {
    return (
        <>
            <h1>What will we do with the data?</h1>
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

export default AdminPanelProductsEditorSections;