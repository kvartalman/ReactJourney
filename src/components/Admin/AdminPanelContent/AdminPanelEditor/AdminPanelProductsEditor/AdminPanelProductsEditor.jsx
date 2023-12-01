import React, {useState} from "react";
import './AdminPanelProductsEditor.css';
import AdminPanelProductsEditorSections from "./AdminPanelProductsEditorSections/AdminPanelProductsEditorSections";
import AdminPanelProductsCurrent from "./AdminPanelProductsCurrent/AdminPanelProductsCurrent";
import AdminPanelProductsNew from "./AdminPanelProductsNew/AdminPanelProductsNew";

const AdminPanelProductsEditor = (props) => {

    const [sectionName, setSectionName] = useState('');

    const handleSectionChoice = (section) => {
        setSectionName(section);
        props.setBackIndex(3);
    }

    return (
        <div id={'productsEditorMainContainer'}>
            {
             props.backIndex === 2 ?
             <AdminPanelProductsEditorSections
                 handleSectionChoice={handleSectionChoice}
             />
             :
             sectionName === 'current' ?
                 <AdminPanelProductsCurrent
                     backIndex={props.backIndex}
                     setBackIndex={props.setBackIndex}
                 />
                 :
                 sectionName === 'new' ?
                     <AdminPanelProductsNew
                         backIndex={props.backIndex}
                         setBackIndex={props.setBackIndex}
                     />
                     :
                     null
            }
        </div>
    );
};

export default AdminPanelProductsEditor;