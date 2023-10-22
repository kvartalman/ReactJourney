import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const ChooseGameSubCategoryEditor = (props) => {

    const [activeGameButton, setActiveGameButton] = useState(0);
    const [activeSubCategoryButton, setActiveSubCategoryButton] = useState(Object.keys(props.subCategorySelector[props.game].products).length - 1);

    const handleGameSelect = (game, index) => {
        setActiveGameButton(index);
        setActiveSubCategoryButton(Object.keys(props.subCategorySelector[game].products).length - 1);
        props.setGame(game);
    }

    const handleSubCategorySelect = (subCtg, index) => {
        setActiveSubCategoryButton(index);
        props.setSubCategory(subCtg);
    }

    const nextPageHandler = () => {
        props.setKey('cards')
    }

    const gamePagesNames = Object.keys(props.subCategorySelector).map((game, index) => (
        <Button
            className={activeGameButton === index ? 'activeButton' : 'defaultButton'}
            onClick={() => handleGameSelect(game, index)}
        >
            {props.subCategorySelector[game].fullName}
        </Button>
    ))

    const subCategoriesNames = Object.keys(props.subCategorySelector[props.game].products).map((subCategory, index) => (
        props.subCategorySelector[props.game].products[subCategory].subCategory ?
            <Button
            className={activeSubCategoryButton === index ? 'activeButton': 'defaultButton'}
            onClick={() => handleSubCategorySelect(subCategory, index)}
            >
                {props.subCategorySelector[props.game].products[subCategory].header}
            </Button>
            :
            null
    ))

    return (
        <Container fluid>
            <div>
                {gamePagesNames}
            </div>
            <div>
                {subCategoriesNames}
            </div>
            <Button
                className={'nextPageButton'}
                onClick={() => nextPageHandler()}
            >
                Next
            </Button>
        </Container>
    );
};

export default ChooseGameSubCategoryEditor;
