import React, {useEffect, useState} from "react";
import '../../AdminPanel.css';
import {useDispatch, useSelector} from "react-redux";
import HomePageCardsButtonsSettings from "./HomePageCardsButtonsSettings/HomePageCardsButtonsSettings";
import HomePageCardsSettingsFinalPreview from "./HomePageCardsSettingsFinalPreview/HomePageCardsSettingsFinalPreview";
import axios from "axios";
import {addHomePageOfferCardsData} from "../../../../store/slices/adminPanelSlices/adminPanelNewContentSlice";
import HomePageCardsSetNewCard from "./HomePageCardsSetNewCard/HomePageCardsSetNewCard";
import {Tab, Tabs} from "react-bootstrap";
import './HomePageCardsSettings.css';

const HomePageCardsSettings = (props) => {



    const cardsData = useSelector(state => state.adminPanelNewContent.homePageOfferCards);
    const gamesSelector = useSelector(state => state.gameOfferPages.pagesData);
    const [imagesData, setImagesData] = useState([]);
    const [key, setKey] = useState('card');

    return (
        <div id={'homePageCardsSettingsMainContainer'}>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab
                    eventKey={'card'}
                    title={'Создать новую карточку'}
                >
                    <HomePageCardsSetNewCard
                        imagesData={imagesData}
                        setKey={setKey}
                        setImagesData={setImagesData}
                    />
                </Tab>
                <Tab
                    eventKey={'button'}
                    title={'Создать новые кнопки'}
                >
                    <HomePageCardsButtonsSettings
                        cardsData={cardsData}
                        gamesSelector={gamesSelector}
                        setKey={setKey}
                        imagesData={imagesData}
                        setImagesData={setImagesData}
                    />
                </Tab>
                <Tab
                    eventKey={'preview'}
                    title={'Превью'}
                >
                    <HomePageCardsSettingsFinalPreview
                        cardsData={cardsData}
                        imagesData={imagesData}
                        setImagesData={setImagesData}
                        loading={props.loading}
                    />
                </Tab>
            </Tabs>
        </div>
    );
}

export default HomePageCardsSettings;