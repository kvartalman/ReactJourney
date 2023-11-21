import React, {useEffect} from "react";
import './AdminPanelMainMenu.css';

const AdminPanelMainMenu = (props) => {

    const handleMenuListChoice = (section) => {
        props.setMenuIndex(1);
        props.setContentName(section);
        props.setBackIndex(1);
    };

    useEffect(() => {
        console.log(props.backIndex)
    }, [props.backIndex]);

    return (
        <div id={'adminPanelMainMenuContainer'}>
            <h1>What are you going to do today?</h1>
            <div id={'adminPanelMainMenuDirectoriesContainer'}>
                    <div id={'adminPanelMainMenuEditorContainer'}>
                        <button onClick={() => handleMenuListChoice('editor')}>Editor</button>
                    </div>
                    <div id={'adminPanelMainMenuDashboardContainer'}>
                        <button onClick={() => handleMenuListChoice('dashboard')}>Dashboard</button>
                    </div>
                    <div id={'adminPanelMainMenuMessagesContainer'}>
                        <button onClick={() => handleMenuListChoice('messages')}>Messages</button>
                    </div>
                    <div id={'adminPanelMainMenuToDoContainer'}>
                        <button onClick={() => handleMenuListChoice('todo')}>'To Do' list</button>
                    </div>
            </div>
        </div>
    );
};

export default AdminPanelMainMenu;