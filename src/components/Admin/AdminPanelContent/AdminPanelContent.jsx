import React from "react";
import './AdminPanelContent.css';
import AdminPanelEditor from "./AdminPanelEditor/AdminPanelEditor";
import AdminPanelDashboard from "./AdminPanelDashboard/AdminPanelDashboard";
import AdminPanelMessages from "./AdminPanelMessages/AdminPanelMessages";
import AdminPanelToDoList from "./AdminPanelToDoList/AdminPanelToDoList";
import AdminPanelStaff from "./AdminPanelStaff/AdminPanelStaff";

const AdminPanelContent = (props) => {

    const content = {
        editor: <AdminPanelEditor
            setBackIndex={props.setBackIndex}
            backIndex={props.backIndex}
        />,
        dashboard: <AdminPanelDashboard
            setBackIndex={props.setBackIndex}
            backIndex={props.backIndex}
        />,
        messages: <AdminPanelMessages
            setBackIndex={props.setBackIndex}
            backIndex={props.backIndex}
        />,
        todo: <AdminPanelToDoList
            setBackIndex={props.setBackIndex}
            backIndex={props.backIndex}
        />,
        staff: <AdminPanelStaff
            setBackIndex={props.setBackIndex}
            backIndex={props.backIndex}
        />
    }

    return (
        <div id={'adminPanelContentMainContainer'}>
            {content[props.contentName]}
        </div>
    );
};

export default AdminPanelContent;