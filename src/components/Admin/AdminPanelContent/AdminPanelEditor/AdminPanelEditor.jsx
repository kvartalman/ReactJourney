import React, {useState} from "react";
import './AdminPanelEditor.css';
import AdminPanelPricesEditor from "./AdminPanelPricesEditor/AdminPanelPricesEditor";
import AdminPanelHomePageEditor from "./AdminPanelHomePageEditor/AdminPanelHomePageEditor";
import AdminPanelGamesEditor from "./AdminPanelGamesEditor/AdminPanelGamesEditor";
import AdminPanelSubCategoriesEditor from "./AdminPanelSubCategoriesEditor/AdminPanelSubCategoriesEditor";
import AdminPanelProductsEditor from "./AdminPanelProductsEditor/AdminPanelProductsEditor";

const AdminPanelEditor = (props) => {

    const [contentIndexSection, setContentIndexSection] = useState(0);

    const handleEditorSection = (index) => {
        setContentIndexSection(index);
        props.setBackIndex(2);
    }

    const editorSectionsList = [
        <AdminPanelHomePageEditor />, <AdminPanelGamesEditor />, <AdminPanelSubCategoriesEditor />,
        <AdminPanelProductsEditor />, <AdminPanelPricesEditor />
    ].map((elem, index) => (
        contentIndexSection === index ?
            elem
            :
            null
    ))

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
        <div id={'adminPanelEditorMainContainer'}>
            {
                contentIndexSection === 0 && props.backIndex === 1 ?
                    <>
                        <h1>What do you like to edit?</h1>
                        <div id={'adminPanelEditorSectionsContainer'}>
                            <div
                                className={'adminPanelEditorSectionContainer'}
                            >
                                <button onClick={() => handleEditorSection(1)}>
                                    Homepage
                                </button>
                            </div>
                            <div
                                className={'adminPanelEditorSectionContainer'}
                            >
                                <button onClick={() => handleEditorSection(2)}>
                                    Games
                                </button>
                            </div>
                            <div
                                className={'adminPanelEditorSectionContainer'}
                            >
                                <button onClick={() => handleEditorSection(3)}>
                                    Subcategories
                                </button>
                            </div>
                            <div
                                className={'adminPanelEditorSectionContainer'}
                            >
                                <button onClick={() => handleEditorSection(4)}>
                                    Products
                                </button>
                            </div>
                            <div
                                className={'adminPanelEditorSectionContainer'}
                            >
                                <button onClick={() => handleEditorSection(5)}>
                                    Prices
                                </button>
                            </div>
                        </div>
                    </>
                    :
                    props.backIndex === 2 ?
                    editorSectionsList
                        :
                        null
            }
        </div>
    );
};

export default AdminPanelEditor;