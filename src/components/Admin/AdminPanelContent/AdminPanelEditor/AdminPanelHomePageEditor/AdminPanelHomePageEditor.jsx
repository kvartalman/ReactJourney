import React, {useEffect, useState} from "react";
import './AdminPanelHomePageEditor.css';
import CarouselEditor from "../../../CurrentContentEditor/CarouselEditor/CarouselEditor";
import HomePageCardsEditor from "../../../CurrentContentEditor/HomePageCardsEditor/HomePageCardsEditor";
import AdvantagesEditor from "../../../CurrentContentEditor/AdvantagesEditor/AdvantagesEditor";
import StepsEditor from "../../../CurrentContentEditor/StepsEditor/StepsEditor";
import AdminPanelHomePageEditorSections
    from "./AdminPanelHomePageEditorCurrentSections/AdminPanelHomePageEditorSections";
import axios from "axios";
import {
    fillCarouselEditorData, fillCarouselEditorNewData,
    fillHomePageOfferCards
} from "../../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import {addHomePageOfferCardsData} from "../../../../../store/slices/adminPanelSlices/adminPanelNewContentSlice";
import {useDispatch} from "react-redux";


const AdminPanelHomePageEditor = (props) => {

    const dispatch = useDispatch();

    const authToken = localStorage.getItem('auth_token');

    const [sectionName, setSectionName] = useState('');
    const handleSectionChoice = (section) => {
        setSectionName(section)
        props.setBackIndex(3);
    }

    useEffect(() => {

        axios.get('http://localhost:8000/shop-content/api/v1/get_offerPage_cards',
            {
                headers: {
                    'Authorization': `Token ${authToken}`,
                }
            }).then(response => {
                console.log(response.data)
            dispatch(fillHomePageOfferCards(response.data['cards_data']));
            dispatch(addHomePageOfferCardsData(response.data['cards_data']));
        });

    }, [])

    useEffect(() => {
        axios.get('http://localhost:8000/shop-content/api/v1/get_carousel_data',
            {
                headers: {
                    'Authorization': `Token ${authToken}`,
                }
            }).then(response => {
            console.log(response.data)
            dispatch(fillCarouselEditorData(response.data['carousel_data']));
        });
    }, [])

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