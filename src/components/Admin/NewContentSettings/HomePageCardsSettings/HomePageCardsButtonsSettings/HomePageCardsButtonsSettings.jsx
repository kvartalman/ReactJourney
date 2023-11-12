import React, {useRef, useState} from "react";
import '../../../AdminPanel.css';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {addButton} from "../../../../../store/slices/homePageSlice";
import {useDispatch, useSelector} from "react-redux";

const HomePageCardsButtonsSettings = (props) => {

    const dispatch = useDispatch();

    const [btnName, setBtnName] = useState('');
    const [mainBtnName, setMainBtnName] = useState('');
    const [activeGame, setActiveGame] = useState(Object.keys(props.gamesSelector)[0]);

    const subCategoriesSelector = useSelector(state => state.productPage.productData[activeGame].subCategories)

    const [activeGameButton, setActiveGameButton] = useState(0);
    const [newButtonType, setNewButtonType] = useState('mainButton');
    const [activeSubCategory, setActiveSubCategory] = useState(Object.keys(subCategoriesSelector)[0]);
    const [activeSubCategoryIndex, setActiveSubCategoryIndex] = useState(0);

    const handleGameSelect = (game, index) => {
        setActiveGame(game);
        setActiveGameButton(index);
    }

    const handleSubCategorySelect = (subCategory, index) => {
        setActiveSubCategory(subCategory);
        setActiveSubCategoryIndex(index);
    }

    let cardKey = useRef(null);
    let newLink = useRef(null);

    const mainBtnNameInput = (e) => {
        setMainBtnName(e.target.value);
    }

    const btnNameInput = (e) => {
        setBtnName(e.target.value)
    };

    const addHomePageCardButton = () => {
        dispatch(addButton({
            cardKey: cardKey.current.value,
            link: newLink.current.value,
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

    return (
        <Form>
            <h2>HomePage Card Buttons Editor</h2>
            <Form.Group as={Col}>
                <h3>Choose game</h3>
                <p>Main button will automatically get link to chosen game</p>
                <div>
                    {gamesButtons}
                </div>
                <Form.Label>Button name</Form.Label>
                <Form.Control
                    onChange={mainBtnNameInput}
                    placeholder={'Enter button name...'}
                    value={mainBtnName}
                />
                <Button
                    className={'nextPageButton'}
                >
                    Create main button
                </Button>
                <div>
                    {subCategoriesButtons}
                </div>
                <Form.Label>Button name</Form.Label>
                <Form.Control
                    onChange={btnNameInput}
                    placeholder={'Enter button name...'}
                    value={btnName}
                />
            </Form.Group>
            <div className={'addCardButtons'}>
                <Button
                    variant="primary"
                    onClick={addHomePageCardButton}
                    className={'nextPageButton'}
                >
                    Add Button
                </Button>
            </div>
        </Form>
    );
}

export default HomePageCardsButtonsSettings;