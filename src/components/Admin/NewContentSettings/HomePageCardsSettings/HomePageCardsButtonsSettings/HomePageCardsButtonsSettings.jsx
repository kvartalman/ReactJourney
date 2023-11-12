import React, {useEffect, useRef, useState} from "react";
import '../../../AdminPanel.css';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {addButton} from "../../../../../store/slices/homePageSlice";
import {useDispatch, useSelector} from "react-redux";

const HomePageCardsButtonsSettings = (props) => {

    const dispatch = useDispatch();

    const [btnName, setBtnName] = useState('');
    const [activeGame, setActiveGame] = useState(Object.keys(props.gamesSelector)[0]);
    const [activeGameButton, setActiveGameButton] = useState(0);
    const [newButtonType, setNewButtonType] = useState('mainButton');
    const [activeNewButtonType, setActiveNewButtonType] = useState(0);
    const [activeSubCategory, setActiveSubCategory] = useState(0);

    const subCategoriesSelector = useSelector(state => state.productPage.productData[activeGame].subCategories)

    let buttonType = useRef(null);
    const handleGameSelect = (game, index) => {
        setActiveGame(game);
        setActiveGameButton(index);
    }

    const handleNewButtonTypeSelect = (type, number) => {
        setNewButtonType(type);
        setActiveNewButtonType(number);
    }

    const handleSubCategorySelect = (subCategory, index) => {
        
    }

    let cardKey = useRef(null);
    let newLink = useRef(null);

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

    const subCategories = Object.keys(subCategoriesSelector).map((subCategory, index) => (
        <Button
            className={activeSubCategory === index ? 'activeButton' : 'defaultButton'}
            onClick={() => handleSubCategorySelect(subCategory, index)}
        >subCategory</Button>
    ))

    const gamesButtons = Object.keys(props.gamesSelector).map((game, index) => (
        <Button
            className={activeGameButton === index ? 'activeButton' : 'defaultButton'}
            onClick={() => handleGameSelect(game, index)}
        >{props.gamesSelector[game].fullName}</Button>
    ));

    return (
        <Form>
            <h2>HomePage Card Buttons Editor</h2>
            <Form.Group as={Col}>
                <Button
                    className={activeNewButtonType === 0 ? 'activeButton' : 'defaultButton'}
                    onClick={() => handleNewButtonTypeSelect('mainButton', 0)}
                >
                    Main button
                </Button>
                <Button
                    className={activeNewButtonType === 1 ? 'activeButton' : 'defaultButton'}
                    onClick={() => handleNewButtonTypeSelect('button', 1)}
                >
                    Subcategory button
                </Button>
                {newButtonType === 'mainButton' ?
                    <div>
                        {gamesButtons}
                    </div>
                    :
                    null
                }
                {newButtonType === 'button' ?
                    <div>
                        {subCategories}
                    </div>
                    :
                    null
                }
                <Form.Label>Button Name</Form.Label>
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