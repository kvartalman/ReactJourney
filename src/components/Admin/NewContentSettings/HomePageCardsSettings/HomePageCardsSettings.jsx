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

const HomePageCardsSettings = () => {

    const dispatch = useDispatch();

    const cardsData = useSelector(state => state.adminPanelNewContent.homePageOfferCards)
    const gamesSelector = useSelector(state => state.gameOfferPages.pagesData)

    const [loading, setLoading] = useState(true);
    const [key, setKey] = useState('card');

    useEffect(() => {
        axios.get('https://mocki.io/v1/bbcef0d5-c8a0-44a0-bedf-6e3ca13ff643').then(response => {
            dispatch(addHomePageOfferCardsData(response.data));
            setLoading(false);

        });
    }, [])

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
                    title={'New cards'}
                >
                    <HomePageCardsSetNewCard
                        setKey={setKey}
                    />
                </Tab>
                <Tab
                    eventKey={'button'}
                    title={'New buttons'}
                >
                    <HomePageCardsButtonsSettings
                        cardsData={cardsData}
                        gamesSelector={gamesSelector}
                        setKey={setKey}
                    />
                </Tab>
                <Tab
                    eventKey={'preview'}
                    title={'Preview'}
                >
                    <HomePageCardsSettingsFinalPreview
                        cardsData={cardsData}
                        loading={loading}
                    />
                </Tab>
            </Tabs>
        </div>
    );
}

export default HomePageCardsSettings;