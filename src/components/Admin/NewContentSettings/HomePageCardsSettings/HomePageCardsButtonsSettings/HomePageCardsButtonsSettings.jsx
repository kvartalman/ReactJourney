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

    const subCategoriesSelector = useSelector(state => state.gameProducts[activeGame].subCategories);
    const subCategoriesLinksSelector = useSelector(state => state.gameOfferPages.pagesData[activeGame].panelButton);
    const addedMainButtonsSelector = useSelector(state => state.adminPanelNewContent.homePageOfferCardsAddedMainButtons);
    const addedOrderButtonsSelector = useSelector(state => state.adminPanelNewContent.homePageOfferCardsAddedOrderButtons);
    const productPagesSelector = useSelector(state => state.productPage.productData);

    const [activeGameButton, setActiveGameButton] = useState(0);
    const [activeSubCategory, setActiveSubCategory] = useState(subCategoriesSelector[0]);
    const [activeSubCategoryIndex, setActiveSubCategoryIndex] = useState(0);
    const [activeCardChosen, setActiveCardChosen] = useState('');
    const [activeCardChosenIndex, setActiveCardChosenIndex] = useState(0);


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

        if (type === 'mainButton') {
            dispatch(addHomePageOfferCardsButton({
                    activeCard: activeCardChosen,
                    game: activeGame,
                    link: `/categories/${activeGame}`,
                    type: type,
                    class: 'card-main-button',
                    name: mainBtnName
            })
            )
        }

        else if (type === 'button') {
            for (let i = 0; i < subCategoriesLinksSelector.length; i++) {

                if (subCategoriesLinksSelector[i].name === activeSubCategory.name) {

                    dispatch(addHomePageOfferCardsButton({
                        activeCard: activeCardChosen,
                        game: activeGame,
                        link: subCategoriesLinksSelector[i].link,
                        type: type,
                        class: 'order-button',
                        name: btnName
                    }))
                    break;
                }
            }
        }
        type === 'mainButton' ? setMainBtnName('') : setBtnName('');
    }

    const cancelButtonAdding = (buttonName, buttonType) => {
        dispatch(cancelHomePageOfferCardsButtonAdding({
            activeCard: activeCardChosen,
            name: buttonName,
            type: buttonType
        }))
    }

    const subCategoriesButtons = subCategoriesSelector.map((subCategory, index) => (
        <Button
            key={index}
            className={activeSubCategoryIndex === index ? 'homePageCardsButtonsSettingsCardActive' : null}
            onClick={() => handleSubCategorySelect(subCategory, index)}
        >
            {subCategory.name}
        </Button>
    ))

    const gamesButtons = Object.keys(props.gamesSelector).map((game, index) => (
        <Button
            key={index}
            className={activeGameButton === index ? 'homePageCardsButtonsSettingsCardActive' : null}
            onClick={() => handleGameSelect(game, index)}
        >
            {props.gamesSelector[game].fullName}
        </Button>
    ));

    const cardsButtons = props.cardsData.map((card, index) => (
        <Button
            key={index}
            className={activeCardChosenIndex === index ? 'homePageCardsButtonsSettingsCardActive' : null}
            onClick={() => handleCardChoice(card, index)}
        >
            {require('change-case').sentenceCase(card.tagId)}
        </Button>
    ))


    const addedRegularButtonsList = addedOrderButtonsSelector.map(button => (
        <option>{button.name}</option>
    ))

    useEffect(() => {
        setActiveCardChosen(props.cardsData[activeCardChosenIndex])
    }, [props.cardsData])

    return (
        <div id={'homePageCardsButtonsSettingsMainContainer'}>
            <div id={'homePageCardsButtonsSettingsAllSettingsContainer'}>
                <div id={'homePageCardsButtonsSettingsChooseMenuContainer'}>
                    <div className={'homePageCardsButtonsSettingsChooseMenuSubContainer'}>
                        <h2>Выбери карточку</h2>
                        <div className={'homePageCardsButtonsSettingsCardsListContainer'}>
                            {cardsButtons}
                        </div>
                    </div>
                </div>
                <div id={'homePageCardsButtonsSettingsMainButtonSettingsContainer'}>
                    <div className={'homePageCardsButtonsSettingsChooseMenuSubContainer'}>
                        <h2>Добавь главную кнопку</h2>
                        <h3>Выбери игру</h3>
                        <p>Главная кнопка карточки (выделенная отдельным цветом) получит ссылку на страницу выбранной
                            игры.</p>
                        <p>Ссылки для остальных кнопок указываются отдельно ниже.</p>
                        <p>Карточка может иметь только одну главную кнопку. Если создаётся новая главная кнопка,
                            а карточка уже имеет такую, новая кнопка заменит текущую.
                        </p>
                        <div className={'homePageCardsButtonsSettingsCardsListContainer'}>
                            {gamesButtons}
                        </div>
                    </div>
                    <Form>
                        <Form.Label>Введи название кнопки</Form.Label>
                        <Form.Control
                            onChange={mainBtnNameInput}
                            placeholder={'Enter button name...'}
                            value={mainBtnName}
                        />
                    </Form>
                    <div id={'homePageCardsButtonsSettingsMainButtonAcceptDeclineContainer'}>
                        <Button
                            className={'nextPageButton'}
                            onClick={() => addHomePageCardButton('mainButton')}
                        >
                            Добавить
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => cancelButtonAdding(null, 'mainButton')}
                            className={'nextPageButton'}
                        >
                            Удалить
                        </Button>
                    </div>
                </div>
                <div id={'homePageCardsButtonsSettingsDefaultButtonContainer'}>
                    <h2>Добавь обычные кнопки</h2>
                    <Form>
                        <Form.Label>Выбери подкатегорию, на которую будет ссылаться кнопка</Form.Label>
                        <div id={'homePageCardsButtonsSettingsSubCategoriesContainer'}>
                            {subCategoriesButtons}
                        </div>
                        <Form.Label>Введи название кнопки</Form.Label>
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
                        Создать
                    </Button>
                    <Form>
                        <Form.Label>Список добавленных кнопок</Form.Label>
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
                        Удалить
                    </Button>
                </div>
            </div>
            <div id={'homePageCardsButtonsSettingsCardButtonsPreview'}>
                <div>
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
                                    <div id={'homepageCardsButtonsSettingsOfferCardButtonsPreviewContainer'}>
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
                                    </div>}
                            />
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default HomePageCardsButtonsSettings;