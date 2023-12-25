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
    const productPagesSelector = useSelector(state => state.productPage.productData);

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
        setActiveSubCategory(Object.keys(productPagesSelector[game].subCategories)[0]);
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
            debugger;
            if (btnLink === activeSubCategory) {

                dispatch(addHomePageOfferCardsButton({
                    activeCard: activeCardChosen.tagId,
                    game: activeGame,
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
        <div id={'homePageCardsButtonsSettingsMainContainer'}>
            <div id={'homePageCardsButtonsSettingsChooseMenuContainer'}>
                <div>
                    <div className={'homePageCardsButtonsSettingsChooseMenuSubContainer'}>
                        <h3>Выбери карточку</h3>
                        <div>
                            {cardsButtons}
                        </div>
                    </div>
                    <div className={'homePageCardsButtonsSettingsChooseMenuSubContainer'}>
                        <h3>Выбери игру</h3>
                        <p>Главная кнопка карточки (выделенная отдельным цветом) получит ссылку на страницу выбранной
                            игры.</p>
                        <p>Ссылки для остальных кнопок указываются отдельно ниже.</p>
                        <div>
                            {gamesButtons}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Form>
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
                </Form>

                <Button
                    variant="primary"
                    onClick={() => cancelButtonAdding(selectedMainButton.current.value, 'mainButton')}
                    className={'nextPageButton'}
                >
                    Cancel
                </Button>
            </div>
            <div id={'homePageCardsButtonsSettingsDefaultButtonContainer'}>
                <Form>
                    <Form.Label>Choose subcategory link</Form.Label>
                    <div>
                        {subCategoriesButtons}
                    </div>
                    <Form.Label>Button name</Form.Label>
                    <Form.Control
                        onChange={btnNameInput}
                        placeholder={'Enter button name...'}
                        value={btnName}
                    />
                </Form>
                <Button
                    variant="primary"
                    onClick={() => addHomePageCardButton('button')}
                    className={'nextPageButton'}
                >
                    Create regular button
                </Button>
                <Form>
                    <Form.Label>Added regular buttons list </Form.Label>
                    <Form.Select
                        ref={selectedOrderButton}
                    >
                        {addedRegularButtonsList}
                    </Form.Select>
                </Form>
                <Button
                    variant="primary"
                    onClick={() => cancelButtonAdding(selectedOrderButton.current.value, 'button')}
                    className={'nextPageButton'}
                >
                    Cancel
                </Button>
            </div>
            <div id={'homePageCardsButtonsSettingsCardButtonsPreview'}>
                <div>
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
        </div>
    )
        ;
}

export default HomePageCardsButtonsSettings;