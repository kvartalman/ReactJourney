import React from "react";
import './AdminPanelMainMenu.css';

const AdminPanelMainMenu = (props) => {

    const handleMenuListChoice = (index, section) => {
        props.setMenuIndex(index)
        props.setContentName(section)
    }

    return (
        <div id={'adminPanelMainMenuContainer'}>
            <h1>What are you going to do today?</h1>
            <div id={'adminPanelMainMenuDirectoriesContainer'}>
                    <div id={'adminPanelMainMenuEditorContainer'}>
                        <button onClick={() => {handleMenuListChoice(1, 'editor')}}>Editor</button>
                    </div>
                    <div id={'adminPanelMainMenuDashboardContainer'}>
                        <button onClick={() => {handleMenuListChoice(1, 'dashboard')}}>Dashboard</button>
                    </div>
                    <div id={'adminPanelMainMenuMessagesContainer'}>
                        <button onClick={() => {handleMenuListChoice(1, 'messages')}}>Messages</button>
                    </div>
                    <div id={'adminPanelMainMenuToDoContainer'}>
                        <button onClick={() => {handleMenuListChoice(1, 'todo')}}>'To Do' list</button>
                    </div>
            </div>
        </div>
    );
};

export default AdminPanelMainMenu;