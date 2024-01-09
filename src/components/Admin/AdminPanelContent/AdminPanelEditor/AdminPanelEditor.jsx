import React, {useState} from "react";
import './AdminPanelEditor.css';
import AdminPanelPricesEditor from "./AdminPanelPricesEditor/AdminPanelPricesEditor";
import AdminPanelHomePageEditor from "./AdminPanelHomePageEditor/AdminPanelHomePageEditor";
import AdminPanelGamesEditor from "./AdminPanelGamesEditor/AdminPanelGamesEditor";
import AdminPanelProductsEditor from "./AdminPanelProductsEditor/AdminPanelProductsEditor";
import AdminPanelEditorSections from "./AdminPanelEditorSections/AdminPanelEditorSections";

const AdminPanelEditor = (props) => {

    const [contentIndexSection, setContentIndexSection] = useState(0);

    const handleEditorSection = (index) => {
        setContentIndexSection(index);
        props.setBackIndex(2);
    }

    const editorSectionsList = [
        <AdminPanelHomePageEditor
            setBackIndex={props.setBackIndex}
            backIndex={props.backIndex}
        />, <AdminPanelGamesEditor
            setBackIndex={props.setBackIndex}
            backIndex={props.backIndex}
        />,
        <AdminPanelProductsEditor
            setBackIndex={props.setBackIndex}
            backIndex={props.backIndex}
        />, <AdminPanelPricesEditor
            setBackIndex={props.setBackIndex}
            backIndex={props.backIndex}
        />
    ].map((elem, index) => (
        contentIndexSection === index ?
            elem
            :
            null
    ))



    return (
        <div id={'adminPanelEditorMainContainer'}>
            {props.backIndex === 1 ?
                <AdminPanelEditorSections
                    handleEditorSection={handleEditorSection}
                />
                :
                editorSectionsList
            }
        </div>
    );
};

export default AdminPanelEditor;