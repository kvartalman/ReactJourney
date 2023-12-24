import React, {useEffect, useState} from "react";
import ChooseHomePageCard from "./ChooseHomePageCard/ChooseHomePageCard";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import HomePageCardContentEdit from "./HomePageCardContentEdit/HomePageCardContentEdit";
import {
    cancelHomePageOfferCardDeletion,
    deleteHomePageOfferCard,
    fillHomePageOfferCards
} from "../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import {addCardsData} from "../../../../store/slices/homePageSlice";
import HomePageCardsEditorCardPreview from "./HomePageCardsEditorCardPreview/HomePageCardsEditorCardPreview";
import './HomePageCardsEditor.css';
import HomePageCardButtonsEditor from "./HomePageCardButtonsEditor/HomePageCardButtonsEditor";
import HomePageCardEditorCurrentCardPreview
    from "./HomePageCardEditorCurrentCardPreview/HomePageCardEditorCurrentCardPreview";
import HomePageCardsEditorFinalPreview from "./HomePageCardsEditorFinalPreview/HomePageCardsEditorFinalPreview";
import Button from "react-bootstrap/Button";
import {Tab, Tabs} from "react-bootstrap";

const HomePageCardsEditor = () => {

    const dispatch = useDispatch();

    const cardsSelector = useSelector(state => state.adminPanel.homePageOfferCards);
    const deletedCardsSelector = useSelector(state => state.adminPanel.deletedHomePageOfferCards);


    const [card, setCard] = useState(null);
    const [button, setButton] = useState(null);
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [key, setKey] = useState('current');


    const deleteCardHandler = () => {
        dispatch(deleteHomePageOfferCard(
            {
                card: card,
                activeCardIndex: activeCardIndex
            }
        ))
    }

    const cancelDeletionHandler = () => {
        dispatch(cancelHomePageOfferCardDeletion())
    }

    useEffect(() => {
        axios.get('https://mocki.io/v1/bbcef0d5-c8a0-44a0-bedf-6e3ca13ff643').then(response => {
            dispatch(fillHomePageOfferCards(response.data));
            dispatch(addCardsData(response.data));
            if (response.data) {
                setCard(response.data[0]);
                setButton(response.data[0].button[0]);
            }
        });
    }, [])

    useEffect(() => {

    },)

    return (
        <div id={'homePageCardsEditorMainContainer'}>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab
                    eventKey={'current'}
                    title={'Изменить текущее'}
                >
                    <div id={'homePageCardsEditorCurrentMainContainer'}>
                        <div id={'homePageCardsEditorCurrentAllSettingsContainer'}>
                            <div>
                                <div id={'homePageCardsEditorCurrentChooseContainer'}>
                                    <h2>Choose card</h2>
                                    <div id={'homePageCardEditorChooseButtonsContainer'}>
                                        <ChooseHomePageCard
                                            activeCardIndex={activeCardIndex}
                                            setActiveCardIndex={setActiveCardIndex}
                                            setCard={setCard}
                                            cardsSelector={cardsSelector}
                                            card={card}
                                            setButton={setButton}
                                            setActiveButtonIndex={setActiveButtonIndex}
                                        />
                                    </div>
                                    <div id={'homePageCardEditorDeleteCancelCardsContainer'}>
                                        {cardsSelector.length > 0 ?
                                            <Button
                                                className={'nextPageButton'}
                                                onClick={() => deleteCardHandler()}
                                            >Delete card
                                            </Button>
                                            :
                                            null
                                        }
                                        {deletedCardsSelector.length > 0 ?
                                            <Button
                                                className={'nextPageButton'}
                                                onClick={() => cancelDeletionHandler()}
                                            >
                                                Cancel
                                            </Button>
                                            :
                                            null
                                        }
                                    </div>
                                </div>
                                <div id={'homePageCardsEditorSettingsContainer'}>
                                    <div id={'homePageCardsEditorCardContentEditContainer'}>
                                        <h2>Edit card</h2>
                                        <HomePageCardContentEdit
                                            cardsSelector={cardsSelector}
                                            card={card}
                                            setCard={setCard}
                                            activeCardIndex={activeCardIndex}
                                            activeButtonIndex={activeButtonIndex}
                                            setButton={setButton}
                                        />
                                    </div>
                                    <div id={'homePageCardsEditorButtonsEditorContainer'}>
                                        <HomePageCardButtonsEditor
                                            cardsSelector={cardsSelector}
                                            card={card}
                                            button={button}
                                            setCard={setCard}
                                            setButton={setButton}
                                            activeCardIndex={activeCardIndex}
                                            activeButtonIndex={activeButtonIndex}
                                            setActiveButtonIndex={setActiveButtonIndex}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div id={'homePageCardsEditorPreviewContainer'}>
                                <div>
                                    <HomePageCardEditorCurrentCardPreview
                                        cardsSelector={cardsSelector}
                                        activeCardIndex={activeCardIndex}
                                        card={card}
                                    />
                                </div>
                                <div>
                                    <HomePageCardsEditorCardPreview
                                        card={card}
                                        activeCardIndex={activeCardIndex}
                                        cardsSelector={cardsSelector}
                                    />
                                </div>
                            </div>
                        </div>
                        <div id={'homePageCardsEditorFinalPreviewContainer'}>
                            <h2>Final preview</h2>
                            <HomePageCardsEditorFinalPreview/>
                        </div>
                    </div>
                </Tab>
                <Tab
                    eventKey={'new'}
                    title={'Добавить новое'}
                >

                </Tab>
            </Tabs>
        </div>
    );
};

export default HomePageCardsEditor;