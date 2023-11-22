import React, {useState} from "react";
import './AdminPanelHomePageEditorCurrent.css';
import GamePagesEditor from "../../../../CurrentContentEditor/GamePagesEditor/GamePagesEditor";
import AdminPanelHomePageEditorCurrentSections
    from "./AdminPanelHomePageEditorCurrentSections/AdminPanelHomePageEditorCurrentSections";
import HomePageCardsEditor from "../../../../CurrentContentEditor/HomePageCardsEditor/HomePageCardsEditor";
import AdvantagesEditor from "../../../../CurrentContentEditor/AdvantagesEditor/AdvantagesEditor";
import CarouselEditor from "../../../../CurrentContentEditor/CarouselEditor/CarouselEditor";
import StepsEditor from "../../../../CurrentContentEditor/StepsEditor/StepsEditor";

const AdminPanelHomePageEditorCurrent = (props) => {

    const [section, setSection] = useState('');

    const handleSectionChoice = (sectionName) => {
        setSection(sectionName);
        props.setBackIndex(4);
    };

    const editorComponent = {
        carousel: <CarouselEditor/>,
        cards: <HomePageCardsEditor />,
        advantages: <AdvantagesEditor />,
        steps: <StepsEditor />
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
        <>
            {
                props.backIndex === 3 ?
                    <AdminPanelHomePageEditorCurrentSections
                        handleSectionChoice={handleSectionChoice}
                    />
                    :
                    section ?
                        editorComponent[section]
                        :
                        null
            }
        </>
    );
};

export default AdminPanelHomePageEditorCurrent;