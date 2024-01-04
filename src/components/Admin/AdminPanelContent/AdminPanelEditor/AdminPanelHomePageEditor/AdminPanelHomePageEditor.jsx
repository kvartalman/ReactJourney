import React, {useState} from "react";
import './AdminPanelHomePageEditor.css';
import CarouselEditor from "../../../CurrentContentEditor/CarouselEditor/CarouselEditor";
import HomePageCardsEditor from "../../../CurrentContentEditor/HomePageCardsEditor/HomePageCardsEditor";
import AdvantagesEditor from "../../../CurrentContentEditor/AdvantagesEditor/AdvantagesEditor";
import StepsEditor from "../../../CurrentContentEditor/StepsEditor/StepsEditor";
import AdminPanelHomePageEditorSections
    from "./AdminPanelHomePageEditorCurrentSections/AdminPanelHomePageEditorSections";


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

    const editorComponent = {
        carousel: <CarouselEditor/>,
        cards: <HomePageCardsEditor />,
        advantages: <AdvantagesEditor />,
        steps: <StepsEditor />
    }

    // <AdminPanelHomePageEditorNew
    //                                 backIndex={props.backIndex}
    //                                 setBackIndex={props.setBackIndex}
    //                             />

    return (
        <div id={'adminPanelHomePageEditorMainContainer'}>
            {
                props.backIndex === 2 ?
                    <AdminPanelHomePageEditorSections
                        handleSectionChoice={handleSectionChoice}
                    />
                    :
                    editorComponent[sectionName]
            }

        </div>
    );
};

export default AdminPanelHomePageEditor;