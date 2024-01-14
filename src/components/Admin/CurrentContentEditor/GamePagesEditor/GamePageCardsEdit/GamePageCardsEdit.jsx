import React, {useCallback, useEffect, useRef, useState} from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import GameOfferCard from "../../../../GameOffer/OfferContent/GameOfferCard";
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {
    cancelGamePageCardDeletion,
    deleteGamePageCards,
    fillGamePageCardsEditor,
    handleGamePageCardsChanges
} from "../../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import Button from "react-bootstrap/Button";
import './GamePageCardsEdit.css';

const GamePageCardsEdit = (props) => {

    const adminPanelGamePagesSelector = useSelector(state => state.adminPanel.gamePageCardsEditor)
    const deletedGamePageCardsSelector = useSelector(state => state.adminPanel.deletedGamePageCards)
    const dispatch = useDispatch();

    const [enterCardName, setEnterCardName] = useState('');
    const [enterCardPrice, setEnterCardPrice] = useState('');
    const [currentCardTitle, setCurrentCardTitle] = useState(null);
    const [currentCardPrice, setCurrentCardPrice] = useState(null);
    const [firstRender, setFirstRender] = useState(true);
    const [enterCardsTitle, setEnterCardsTitle] = useState('');

    const cardSelect = useRef(null);
    // We use useCallback here because this function makes the dependencies in useEffect Hook.
    // To make this component work more effectively, handleCardSelect has useCallback wrap.

    const handleCardSelect = useCallback(() => {
        for (let i = 0; i < props.gamePagesSelector.offerCardsData.length; i++) {
            if (props.gamePagesSelector.offerCardsData[i].title === cardSelect.current.value) {
                setCurrentCardTitle(props.gamePagesSelector.offerCardsData[i].title)
                setCurrentCardPrice(props.gamePagesSelector.offerCardsData[i].text)
            }
        }
    })

    const enterCardsTitleInput = (e) => {
        setEnterCardsTitle(e.target.value);
        props.setCardsTitle(e.target.value);
    };


    const enterCardNameInput = (e) => {
        setEnterCardName(e.target.value);
    };

    const enterCardPriceInput = (e) => {
        setEnterCardPrice(e.target.value);
    };

    const handleCardDeletion = () => {
        dispatch(deleteGamePageCards({
            name: cardSelect.current.value
        }))
    };

    const cancelCardDeletion = () => {
        dispatch(cancelGamePageCardDeletion())
    };

    const handleAcceptChanges = () => {
        dispatch(handleGamePageCardsChanges(
            {
                name: cardSelect.current.value,
                title: enterCardName,
                text: enterCardPrice
            }
        ))
    }

    const cardsList = adminPanelGamePagesSelector.map((card, index) => (
        <option key={card.id}>{card.title}</option>
    ))

    // We need to use fillGamePageCardsEditor only on first render because, without this, on each change, this reducer
    // will work again and again and we will not see any changes in cards list.

    useEffect(() => {
        handleCardSelect();
        if (firstRender) {
            dispatch(fillGamePageCardsEditor(props.gamePagesSelector.offerCardsData));
            setFirstRender(false);
        }
    }, [dispatch, firstRender, handleCardSelect, props.game, props.gamePagesSelector])

    return (
        <Container fluid>
            <Form>
                <Form.Group>
                    <Form.Label>Choose card</Form.Label>
                    <Form.Select
                        ref={cardSelect}
                        onChange={handleCardSelect}
                    >
                        {cardsList}
                    </Form.Select>
                    <Form.Label>Card name form</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={8}
                        value={enterCardName}
                        onChange={enterCardNameInput}
                        placeholder="Enter new card name..."
                    />
                    <Form.Label>Card price</Form.Label>
                    <Form.Control
                        value={enterCardPrice}
                        onChange={enterCardPriceInput}
                        placeholder='Enter new card price...'
                    />
                </Form.Group>
            </Form>
            <div id={'gamePageCardsEditorDeleteCancelButtons'}>
                { adminPanelGamePagesSelector.length > 0 ?
                <Button
                    className={'nextPageButton'}
                    onClick={() => handleCardDeletion()}
                >
                    Delete card
                </Button>
                    :
                    null
                }
                {deletedGamePageCardsSelector.length > 0 ?
                <Button
                    className={'nextPageButton'}
                    onClick={() => cancelCardDeletion()}
                >
                    Cancel
                </Button>
                    :
                    null
                }
            </div>
            <Row>
                <Col>
                    <h2>Current card view</h2>
                    <GameOfferCard
                        title={currentCardTitle}
                        text={currentCardPrice}
                    />
                </Col>
                <Col>
                    <h2>New card preview</h2>
                    <GameOfferCard
                        title={enterCardName}
                        text={enterCardPrice}
                    />
                    <Button
                        onClick={() => handleAcceptChanges()}
                        className={'nextPageButton'}
                    >
                        Accept changes
                    </Button>
                </Col>
            </Row>
            <Button
                onClick={() => props.setKey('category')}
                className={'nextPageButton'}
            >
                Next
            </Button>
            <div>
                <h3>Измени заголовок для блока с карточками</h3>
                <Form.Label>Cards title form</Form.Label>
                <Form.Control
                    value={enterCardsTitle}
                    onChange={enterCardsTitleInput}
                    placeholder='Введите заголовок для карточек...'
                />
            </div>
            <div>
                <h2>{props.gamePagesSelector.cardsTitle}</h2>
                <h3 style={{overflowWrap: 'break-word'}}>{enterCardsTitle ? enterCardsTitle : 'Новый заголовок блока карточек'}</h3>
            </div>
        </Container>
    );
}

export default GamePageCardsEdit;