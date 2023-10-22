import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const ChooseGameName = (props) => {

    const [activeGameButton, setActiveGameButton] = useState(0);

    const handleGameSelect = (game, index) => {
        setActiveGameButton(index);
        props.setGame(game);
    }

    const gamePagesNames = Object.keys(props.gamePagesSelector).map((game, index) => (
        <Button
            className={activeGameButton === index ? 'activeButton' : 'defaultButton'}
            onClick={() => handleGameSelect(game, index)}
        >
            {props.gamePagesSelector[game].fullName}
        </Button>
    ))

    const nextPageHandler = (key) => {
        props.setKey(key)
    }

    return (
        <Container fluid>
            <div>
                {gamePagesNames}
            </div>
            <div>
                <Button className={'nextPageButton'} onClick={() => nextPageHandler('text')}>Next</Button>
            </div>
        </Container>
    );
}

export default ChooseGameName;
