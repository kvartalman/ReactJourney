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
import HomePageCardsEditorCardPreview from "./HomePageCardsEditorCardPreview/HomePageCardsEditorCardPreview";
import './HomePageCardsEditor.css';
import HomePageCardButtonsEditor from "./HomePageCardButtonsEditor/HomePageCardButtonsEditor";
import HomePageCardEditorCurrentCardPreview
    from "./HomePageCardEditorCurrentCardPreview/HomePageCardEditorCurrentCardPreview";
import HomePageCardsEditorFinalPreview from "./HomePageCardsEditorFinalPreview/HomePageCardsEditorFinalPreview";
import Button from "react-bootstrap/Button";
import {Tab, Tabs} from "react-bootstrap";
import HomePageCardsSettings from "../../NewContentSettings/HomePageCardsSettings/HomePageCardsSettings";
import {addHomePageOfferCardsData} from "../../../../store/slices/adminPanelSlices/adminPanelNewContentSlice";
import HomePageCardImageEdit from "./HomePageCardImageEdit/HomePageCardImageEdit";

const HomePageCardsEditor = () => {

    const dispatch = useDispatch();

    const cardsSelector = useSelector(state => state.adminPanel.homePageOfferCards);
    const deletedCardsSelector = useSelector(state => state.adminPanel.deletedHomePageOfferCards);


    const [counter, setCounter] = useState(0);
    const [card, setCard] = useState(null);
    const [button, setButton] = useState(null);
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [key, setKey] = useState('current');
    const [cardsImages, setCardsImages] = useState([]);
    const [loading, setLoading] = useState(true);

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
        if (cardsSelector.length > 0) {
            setCard(cardsSelector[0]);
            setButton(cardsSelector[0].button[0]);
        }
    }, []);

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
                            <div id={'homePageCardsEditorCurrentChooseEditContainer'}>
                                <div id={'homePageCardsEditorCurrentChooseContainer'}>
                                    <h2>Выбери карточку</h2>
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
                                        <h2>Отредактируй заголовок и текст</h2>
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
                                    <div id={'homePageCardsEditorImageEditorContainer'}>
                                        <HomePageCardImageEdit
                                            card={card}
                                            setCardsImages={setCardsImages}
                                        />

                                    </div>
                                </div>
                            </div>
                            <div id={'homePageCardsEditorPreviewContainer'}>
                                <div>
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
                        </div>
                        <div id={'homePageCardsEditorFinalPreviewContainer'}>
                            <h2>Посмотри итоговое превью</h2>
                            <HomePageCardsEditorFinalPreview
                                cardsImages={cardsImages}
                            />
                        </div>
                    </div>
                </Tab>
                <Tab
                    eventKey={'new'}
                    title={'Добавить новое'}
                >
                    <HomePageCardsSettings
                        loading={loading}
                    />
                </Tab>
            </Tabs>
        </div>
    );
};

export default HomePageCardsEditor;