import React from "react";
import './AdminPanelHomePageEditorSections.css';

const AdminPanelHomePageEditorSections = (props) => {
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
            <div id={'adminPanelHomePageEditorSectionsNoticeContainer'}>
                <p>
                    Notice 1: Homepage editor doesn't include a block with game category cards. If u want to edit
                    game category cards, choose section "Game" in Editor menu.
                </p>
                <p>
                    Notice 2: "Edit current" section includes 2 functions: deleting and editing current content only.
                    For example, you can change images in Carousel block but you can't add more images. If you want to
                    add more content (more cards, more images, etc.), choose "Create new" section.
                </p>
            </div>
        </>
    );
};

export default AdminPanelHomePageEditorSections;