import React, {useEffect, useRef, useState} from "react";
import '../../../AdminPanel.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import Container from "react-bootstrap/Container";
import './HomePageCardsButtonSettings.css';
import {Row} from "react-bootstrap";
import CardsButton from "../../../../Homepage/Cards/Buttons/CardsButton";
import OfferCard from "../../../../Homepage/Cards/OfferCard";
import {
    addHomePageOfferCardsButton,
    cancelHomePageOfferCardsButtonAdding
} from "../../../../../store/slices/adminPanelSlices/adminPanelNewContentSlice";

const HomePageCardsButtonsSettings = (props) => {

    const dispatch = useDispatch();

    const [btnName, setBtnName] = useState('');
    const [mainBtnName, setMainBtnName] = useState('');
    const [activeGame, setActiveGame] = useState(Object.keys(props.gamesSelector)[0]);

    const subCategoriesSelector = useSelector(state => state.productPage.productData[activeGame].subCategories);
    const subCategoriesLinksSelector = useSelector(state => state.gameOfferPages.pagesData[activeGame].panelButton);
    const addedMainButtonsSelector = useSelector(state => state.adminPanelNewContent.homePageOfferCardsAddedMainButtons);
    const addedOrderButtonsSelector = useSelector(state => state.adminPanelNewContent.homePageOfferCardsAddedOrderButtons);

    const [activeGameButton, setActiveGameButton] = useState(0);
    const [activeSubCategory, setActiveSubCategory] = useState(Object.keys(subCategoriesSelector)[0]);
    const [activeSubCategoryIndex, setActiveSubCategoryIndex] = useState(0);
    const [activeCardChosen, setActiveCardChosen] = useState('');
    const [activeCardChosenIndex, setActiveCardChosenIndex] = useState(0);

    const selectedMainButton = useRef(null);
    const selectedOrderButton = useRef(null);

    const handleCardChoice = (card, index) => {
        setActiveCardChosen(card);
        setActiveCardChosenIndex(index);
    }

    const handleGameSelect = (game, index) => {
        setActiveGame(game);
        setActiveGameButton(index);
    }

    const handleSubCategorySelect = (subCategory, index) => {
        setActiveSubCategory(subCategory);
        setActiveSubCategoryIndex(index);
    }

    const mainBtnNameInput = (e) => {
        setMainBtnName(e.target.value);
    }

    const btnNameInput = (e) => {
        setBtnName(e.target.value)
    };

    const addHomePageCardButton = (type) => {

        for (let i = 0; i < subCategoriesLinksSelector.length; i++) {

            const btnLink = require('change-case').camelCase(subCategoriesLinksSelector[i].link.split('/').pop())

            if (btnLink === activeSubCategory) {
                dispatch(addHomePageOfferCardsButton({
                    activeCard: activeCardChosen.tagId,
                    link: btnLink,
                    type: type,
                    class: type === 'mainButton' ? 'card-main-button' : 'order-button',
                    name: type === 'mainButton' ? mainBtnName : btnName
                }))
            }
        }
        type === 'mainButton' ? setMainBtnName('') : setBtnName('');
    }

    const cancelButtonAdding = (buttonName, buttonType) => {
        dispatch(cancelHomePageOfferCardsButtonAdding({
            activeCard: activeCardChosen.tagId,
            name: buttonName,
            type: buttonType
        }))
    }

    const subCategoriesButtons = Object.keys(subCategoriesSelector).map((subCategory, index) => (
        <Button
            className={activeSubCategoryIndex === index ? 'activeButton' : 'defaultButton'}
            onClick={() => handleSubCategorySelect(subCategory, index)}
        >
            {subCategoriesSelector[subCategory].header}
        </Button>
    ))

    const gamesButtons = Object.keys(props.gamesSelector).map((game, index) => (
        <Button
            className={activeGameButton === index ? 'activeButton' : 'defaultButton'}
            onClick={() => handleGameSelect(game, index)}
        >
            {props.gamesSelector[game].fullName}
        </Button>
    ));

    const cardsButtons = props.cardsData.map((card, index) => (
        <Button
            className={activeCardChosenIndex === index ? 'activeButton' : 'defaultButton'}
            onClick={() => handleCardChoice(card, index)}
        >
            {require('change-case').sentenceCase(card.tagId)}
        </Button>
    ))

    const addedMainButtonsList = addedMainButtonsSelector.map(button => (
        <option>{button.name}</option>
    ))

    const addedRegularButtonsList = addedOrderButtonsSelector.map(button => (
        <option>{button.name}</option>
    ))

    useEffect(() => {
        setActiveCardChosen(props.cardsData[activeCardChosenIndex])
    }, [props.cardsData])

    return (
        <Container fluid>
            <h2>HomePage Card Buttons Editor</h2>
            <div id={'homePageCardsButtonsSettingsChooseMenuContainer'}>
                <div>
                    <div className={'homePageCardsButtonsSettingsChooseMenuSubContainer'}>
                        <h3>Choose card</h3>
                        <div>
                            {cardsButtons}
                        </div>
                    </div>
                    <div className={'homePageCardsButtonsSettingsChooseMenuSubContainer'}>
                        <h3>Choose game</h3>
                        <p>Main button will automatically get link to chosen game.</p>
                        <p>You need to choose links (subcategories of chosen game) for other buttons by your own.</p>
                        <div>
                            {gamesButtons}
                        </div>
                    </div>
                </div>
                <div id={'homePageCardsButtonsSettingsCardButtonsPreview'}>
                    <h3>Card preview</h3>
                    {activeCardChosen ?
                        <OfferCard
                            key={activeCardChosen.id}
                            bg={activeCardChosen.bg}
                            id={activeCardChosen.tagId}
                            title={activeCardChosen.title}
                            text={activeCardChosen.text}
                            button={
                                <Container fluid><Row className={'row-cols-auto'}>
                                    {
                                        activeCardChosen.button.map(button => (
                                            <CardsButton
                                                key={button.id}
                                                link={button.link}
                                                type={button.type}
                                                class={button.class}
                                                name={button.name}
                                            />))
                                    }
                                </Row></Container>}
                        />
                        :
                        null
                    }
                </div>
            </div>
            <div className={'homePageCardsButtonsSettingsDividerLine'}></div>
            <Form>
                <div id={'homePageCardsButtonsSettingsCreateContainer'}>
                    <div id={'homePageCardsButtonsSettingsMainButtonContainer'}>
                        <Form.Label>Button name</Form.Label>
                        <Form.Control
                            onChange={mainBtnNameInput}
                            placeholder={'Enter button name...'}
                            value={mainBtnName}
                        />
                        <Button
                            className={'nextPageButton'}
                            onClick={() => addHomePageCardButton('mainButton')}
                        >
                            Create main button
                        </Button>
                        <Form.Label>Added main buttons list</Form.Label>
                        <Form.Select
                            ref={selectedMainButton}
                        >
                            {addedMainButtonsList}
                        </Form.Select>
                        <Button
                            variant="primary"
                            onClick={() => cancelButtonAdding(selectedMainButton.current.value, 'mainButton')}
                            className={'nextPageButton'}
                        >
                            Cancel
                        </Button>
                    </div>
                    <div className={'homePageCardsButtonsSettingsDividerLine'}></div>
                    <div id={'homePageCardsButtonsSettingsDefaultButtonContainer'}>
                        <div>
                            {subCategoriesButtons}
                        </div>
                        <Form.Label>Button name</Form.Label>
                        <Form.Control
                            onChange={btnNameInput}
                            placeholder={'Enter button name...'}
                            value={btnName}
                        />
                        <div id={'homePageCardsButtonsSettingsAddingRegButtonsContainer'}>
                            <Button
                                variant="primary"
                                onClick={() => addHomePageCardButton('button')}
                                className={'nextPageButton'}
                            >
                                Add Button
                            </Button>
                            <div>
                                <Form.Label>Added regular buttons list </Form.Label>
                                <Form.Select
                                    ref={selectedOrderButton}
                                >
                                    {addedRegularButtonsList}
                                </Form.Select>
                            </div>
                            <div>
                                <Button
                                    variant="primary"
                                    onClick={() => cancelButtonAdding(selectedOrderButton.current.value, 'button')}
                                    className={'nextPageButton'}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </Container>
    );
}

export default HomePageCardsButtonsSettings;