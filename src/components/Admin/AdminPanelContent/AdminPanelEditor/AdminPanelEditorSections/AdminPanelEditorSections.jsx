import React from "react";
import './AdminPanelEditorSections.css';

const AdminPanelEditorSections = (props) => {
    return (
        <div id={'adminPanelEditorSectionsMainContainer'}>
            <h1>What do you like to edit?</h1>
            <div id={'adminPanelEditorSectionsContainer'}>
                <div
                    className={'adminPanelEditorSectionContainer'}
                >
                    <button onClick={() => props.handleEditorSection(0)}>
                        Homepage
                    </button>
                </div>
                <div
                    className={'adminPanelEditorSectionContainer'}
                >
                    <button onClick={() => props.handleEditorSection(1)}>
                        Games
                    </button>
                </div>
                <div
                    className={'adminPanelEditorSectionContainer'}
                >
                    <button onClick={() => props.handleEditorSection(2)}>
                        Subcategories
                    </button>
                </div>
                <div
                    className={'adminPanelEditorSectionContainer'}
                >
                    <button onClick={() => props.handleEditorSection(3)}>
                        Products
                    </button>
                </div>
                <div
                    className={'adminPanelEditorSectionContainer'}
                >
                    <button onClick={() => props.handleEditorSection(4)}>
                        Prices
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPanelEditorSections;