import React, {useRef, useState} from "react";
import '../../AdminPanel.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {offerPageAddCard} from "../../../../store/slices/offerPageSlice";
import Container from "react-bootstrap/Container";
import GameOfferCard from "../../../GameOffer/OfferContent/GameOfferCard";
import './OfferPageCardsSettings.css';

const OfferPageCardsSettings = () => {

    const gamesSelector = useSelector(state => state.gameOfferPages.pagesData)
    const dispatch = useDispatch();

    const [offerCardTitle, setOfferCardTitle] = useState('');
    const [offerCardText, setOfferCardText] = useState('');
    const [activeGameButton, setActiveGameButton] = useState(0);
    const [activeGame, setActiveGame] = useState(Object.keys(gamesSelector)[0]);

    const offerCardTitleInput = (e) => {
        setOfferCardTitle(e.target.value)
    };
    const offerCardTextInput = (e) => {
        setOfferCardText(e.target.value)
    };

    const handleGameSelect = (game, index) => {
        setActiveGameButton(index);
        setActiveGame(game);
    };

    const addOfferPageCard = () => {
        dispatch(offerPageAddCard({
            game: activeGame,
            title: offerCardTitle,
            text: offerCardText
        }));
        setOfferCardTitle('');
        setOfferCardText('');
    }

    const handleChangesAccept = () => {
    }

    const offerPagesList = Object.keys(gamesSelector).map((game, index) => (
        <Button
            onClick={() => handleGameSelect(game, index)}
            className={activeGameButton === index ? 'activeButton' : 'defaultButton'}
        >{gamesSelector[game].fullName}</Button>
    ))

    let offerCardsArr = gamesSelector[activeGame].offerCardsData.map(card => (
        <GameOfferCard title={card.title} key={card.id} text={card.text}/>
    ))

    return (
        <Container fluid>
            {offerPagesList}
            <Form>
                <Form.Group>
                    <Form.Label>
                        New card title
                    </Form.Label>
                    <Form.Control
                        value={offerCardTitle}
                        onChange={offerCardTitleInput}
                        placeholder={'Enter card title...'}
                    >

                    </Form.Control>
                    <Form.Label>
                        New card text
                    </Form.Label>
                    <Form.Control
                        value={offerCardText}
                        onChange={offerCardTextInput}
                        placeholder={'Enter card text...'}
                    >

                    </Form.Control>
                </Form.Group>
            </Form>
            <Button
                onClick={() => addOfferPageCard()}
                className={'nextPageButton'}
            >Add card</Button>
            <h1>Cards preview</h1>
            <div className={'opcSettingsCardsArrayContainer'}>
                {offerCardsArr}
            </div>
            <Button
                onClick={() => handleChangesAccept()}
                className={'nextPageButton'}
            >Accept changes</Button>
        </Container>
    );
}

export default OfferPageCardsSettings;