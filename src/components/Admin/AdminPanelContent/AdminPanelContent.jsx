import React from "react";
import './AdminPanelContent.css';
import AdminPanelEditor from "./AdminPanelEditor/AdminPanelEditor";
import AdminPanelDashboard from "./AdminPanelDashboard/AdminPanelDashboard";
import AdminPanelMessages from "./AdminPanelMessages/AdminPanelMessages";
import AdminPanelToDoList from "./AdminPanelToDoList/AdminPanelToDoList";

const AdminPanelContent = (props) => {

    const content = {
        editor: <AdminPanelEditor />,
        dashboard: <AdminPanelDashboard />,
        messages: <AdminPanelMessages />,
        todo: <AdminPanelToDoList />
    }

    return (
        <div id={'adminPanelContentMainContainer'}>
            {content[props.contentName]}
        </div>
    );
};

export default AdminPanelContent;