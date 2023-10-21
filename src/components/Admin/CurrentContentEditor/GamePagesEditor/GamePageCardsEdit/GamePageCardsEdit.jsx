import React, {useCallback, useEffect, useRef, useState} from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import GameOfferCard from "../../../../GameOffer/OfferContent/GameOfferCard";
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fillGamePageCardsEditor, handleGamePageCardsChanges} from "../../../../../store/slices/adminPanelSlice";
import Button from "react-bootstrap/Button";

const GamePageCardsEdit = (props) => {

    const adminPanelGamePagesSelector = useSelector(state => state.adminPanel.gamePageCardsEditor)

    const [enterCardName, setEnterCardName] = useState('');
    const [enterCardPrice, setEnterCardPrice] = useState('');
    const cardSelect = useRef(null);
    const [currentCardTitle, setCurrentCardTitle] = useState(null);
    const [currentCardPrice, setCurrentCardPrice] = useState(null);
    const dispatch = useDispatch();
    const [firstRender, setFirstRender] = useState(true);

    // We use useCallback here because this function makes the dependencies in useEffect Hook.
    // To make this component work more effectively, handleCardSelect has useCallback wrap.

    const handleCardSelect = useCallback(() => {
        for (let i = 0; i < props.gamePagesSelector[props.game].offerCardsData.length; i++) {
            if (props.gamePagesSelector[props.game].offerCardsData[i].title === cardSelect.current.value) {
                setCurrentCardTitle(props.gamePagesSelector[props.game].offerCardsData[i].title)
                setCurrentCardPrice(props.gamePagesSelector[props.game].offerCardsData[i].text)
            }
        }
    })

    const enterCardNameInput = (e) => {
        setEnterCardName(e.target.value);
        dispatch(handleGamePageCardsChanges(
            {
                name: cardSelect.current.value,
                actionType: 'editName',
                text: e.target.value
            }
        ))
    };

    const enterCardPriceInput = (e) => {
        setEnterCardPrice(e.target.value);
        dispatch(handleGamePageCardsChanges(
            {
                name: cardSelect.current.value,
                actionType: 'editPrice',
                text: e.target.value
            }
        ))
    };

    const cardsList = adminPanelGamePagesSelector.map((card, index) => (
        <option key={card.id}>{card.title}</option>
    ))

    // We need to use fillGamePageCardsEditor only on first render because, without this, on each change, this reducer
    // will work again and again and we will not see any changes in cards list.

    useEffect(() => {
        handleCardSelect();
        if (firstRender) {
            dispatch(fillGamePageCardsEditor(props.gamePagesSelector[props.game].offerCardsData));
            setFirstRender(false);
        }
    }, [dispatch, handleCardSelect, props.game, props.gamePagesSelector])

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
                </Col>
            </Row>
        </Container>
    );
}

export default GamePageCardsEdit;