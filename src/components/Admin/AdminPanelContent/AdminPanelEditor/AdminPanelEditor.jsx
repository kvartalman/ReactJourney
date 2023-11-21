import React from "react";
import './AdminPanelEditor.css';

const AdminPanelEditor = () => {

    const handleEditorSection = (index) => {

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
        <div id={'adminPanelEditorMainContainer'}>
            <h1>What do you like to edit?</h1>
            <div id={'adminPanelEditorSectionsContainer'}>
                <div
                    className={'adminPanelEditorSectionContainer'}
                >
                    <button>
                        Homepage
                    </button>
                </div>
                <div
                    className={'adminPanelEditorSectionContainer'}
                >
                    <button>
                        Games
                    </button>
                </div>
                <div
                    className={'adminPanelEditorSectionContainer'}
                >
                    <button>
                        Subcategories
                    </button>
                </div>
                <div
                    className={'adminPanelEditorSectionContainer'}
                >
                    <button>
                        Products
                    </button>
                </div>
                <div
                    className={'adminPanelEditorSectionContainer'}
                >
                    <button>
                        Prices
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPanelEditor;