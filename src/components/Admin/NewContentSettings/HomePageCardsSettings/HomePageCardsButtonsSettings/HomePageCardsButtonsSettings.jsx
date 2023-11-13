import React, {useRef, useState} from "react";
import '../../../AdminPanel.css';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {addButton} from "../../../../../store/slices/homePageSlice";
import {useDispatch, useSelector} from "react-redux";
import Container from "react-bootstrap/Container";
import './HomePageCardsButtonSettings.css';
import {Row} from "react-bootstrap";
import CardsButton from "../../../../Homepage/Cards/Buttons/CardsButton";
import OfferCard from "../../../../Homepage/Cards/OfferCard";

const HomePageCardsButtonsSettings = (props) => {

    const dispatch = useDispatch();

    const [btnName, setBtnName] = useState('');
    const [mainBtnName, setMainBtnName] = useState('');
    const [activeGame, setActiveGame] = useState(Object.keys(props.gamesSelector)[0]);

    const subCategoriesSelector = useSelector(state => state.productPage.productData[activeGame].subCategories);
    const subCategoriesLinksSelector = useSelector(state => state.gameOfferPages.pagesData[activeGame].panelButton);

    const [activeGameButton, setActiveGameButton] = useState(0);
    const [activeSubCategory, setActiveSubCategory] = useState(Object.keys(subCategoriesSelector)[0]);
    const [activeSubCategoryIndex, setActiveSubCategoryIndex] = useState(0);
    const [activeCardChosen, setActiveCardChosen] = useState(props.cardsData[0]);
    const [activeCardChosenIndex, setActiveCardChosenIndex] = useState(0);

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

        let subCategoryLink = '';

        for (let i = 0; i < subCategoriesLinksSelector.length; i++) {
            if (subCategoriesLinksSelector[i])
        }

        dispatch(addButton({
            cardKey: cardKey.current.value,
            link: `/categories/${activeGame}/${activeSubCategory}'`,
            btnType: newButtonType.current.value,
            btnName
        }))
        setBtnName('');
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
                <div>
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
                        <div className={'addCardButtons'}>
                            <Button
                                variant="primary"
                                onClick={() => addHomePageCardButton('defaultButton')}
                                className={'nextPageButton'}
                            >
                                Add Button
                            </Button>
                        </div>
                    </div>
                </div>
            </Form>
        </Container>
    );
}

export default HomePageCardsButtonsSettings;