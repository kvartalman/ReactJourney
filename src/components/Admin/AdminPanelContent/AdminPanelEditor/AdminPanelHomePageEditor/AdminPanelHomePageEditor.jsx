import React, {useState} from "react";
import './AdminPanelHomePageEditor.css';
import AdminPanelHomePageEditorSections from "./AdminPanelHomePageEditorSections/AdminPanelHomePageEditorSections";
import AdminPanelHomePageEditorCurrent from "./AdminPanelHomePageEditorCurrent/AdminPanelHomePageEditorCurrent";
import AdminPanelHomePageEditorNew from "./AdminPanelHomePageEditorNew/AdminPanelHomePageEditorNew";

const AdminPanelHomePageEditor = (props) => {

    const [sectionName, setSectionName] = useState('');
    const handleSectionChoice = (section) => {
        setSectionName(section)
        props.setBackIndex(3);
    }

    // [
    //                         <AdminPanelDashboard/>, 1, 2, <NewProductSettings/>, <HomePageCardsSettings/>,
    //                         <OfferPageCardsSettings/>,
    //                         <GamePagesEditor/>, <SubCategoriesEditor/>, <ProductsEditor/>, <HomePageCardsEditor/>,
    //                         <CarouselEditor/>, <AdvantagesEditor/>, <StepsEditor/>
    //                     ].map(
    //                         (elem, index) => (
    //                             contentCol === index ?
    //                                 elem
    //                                 :
    //                                 null

    return (
        <div id={'adminPanelHomePageEditorMainContainer'}>
            {
                props.backIndex === 2 ?
                    <AdminPanelHomePageEditorSections
                        handleSectionChoice={handleSectionChoice}
                    />
                    :
                    sectionName === 'current' ?
                        <AdminPanelHomePageEditorCurrent
                            setBackIndex={props.setBackIndex}
                            backIndex={props.backIndex}
                        />
                        :
                        sectionName === 'new' ?
                            <AdminPanelHomePageEditorNew
                                backIndex={props.backIndex}
                                setBackIndex={props.setBackIndex}
                            />
                            :
                            null
            }

        </div>
    );
};

export default AdminPanelHomePageEditor;