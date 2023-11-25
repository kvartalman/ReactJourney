import React, {useState} from "react";
import './AdminPanelHomePageEditorNew.css';
import CarouselEditor from "../../../../CurrentContentEditor/CarouselEditor/CarouselEditor";
import HomePageCardsEditor from "../../../../CurrentContentEditor/HomePageCardsEditor/HomePageCardsEditor";
import AdvantagesEditor from "../../../../CurrentContentEditor/AdvantagesEditor/AdvantagesEditor";
import StepsEditor from "../../../../CurrentContentEditor/StepsEditor/StepsEditor";
import AdminPanelHomePageEditorNewSections
    from "./AdminPanelHomePageEditorNewSections/AdminPanelHomePageEditorNewSections";
import HomePageCardsSettings from "../../../../NewContentSettings/HomePageCardsSettings/HomePageCardsSettings";
import CarouselNew from "../../../../NewContentSettings/CarouselNew/CarouselNew";
import AdvantagesNew from "../../../../NewContentSettings/AdvantagesNew/AdvantagesNew";

const AdminPanelHomePageEditorNew = (props) => {

    const [section, setSection] = useState('');

    const handleSectionChoice = (sectionName) => {
        setSection(sectionName);
        props.setBackIndex(4);
    };

    const editorComponent = {
        cards: <HomePageCardsSettings/>,
        carousel: <CarouselNew />,
        advantages: <AdvantagesNew />
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
                    <AdminPanelHomePageEditorNewSections
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

export default AdminPanelHomePageEditorNew;