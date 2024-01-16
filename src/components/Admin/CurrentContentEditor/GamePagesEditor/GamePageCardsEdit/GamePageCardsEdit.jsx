import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import GameOfferCard from "../../../../GameOffer/OfferContent/GameOfferCard";
import {useDispatch, useSelector} from "react-redux";
import './GamePageCardsEdit.css';
import {
    editGamePageCards,
    fillGamePageCardsEditorData
} from "../../../../../store/slices/adminPanelSlices/adminPanelGamesEditor/adminPanelGamePageCardsEditorSlice";
import {NavLink} from "react-router-dom";
import Card from "react-bootstrap/Card";

const GamePageCardsEdit = (props) => {

    const dispatch = useDispatch();

    const cardsSelector = useSelector(state => state.gamePageCardsEditor.gamePageCardsEditorData);
    const deletedCardsSelector = useSelector(state => state.gamePageCardsEditor.deletedGamePageCards);
    const addedCardsSelector = useSelector(state => state.gamePageCardsEditor.addedGamePageCards);

    const [enterCardName, setEnterCardName] = useState('');
    const [enterCardPrice, setEnterCardPrice] = useState('');
    const [enterCardsTitle, setEnterCardsTitle] = useState('');
    const [newCardName, setNewCardName] = useState('');
    const [newCardPrice, setNewCardPrice] = useState('');
    const [activeCard, setActiveCard] = useState('');
    const [activeCardIndex, setActiveCardIndex] = useState(null);

    const enterCardsTitleInput = (e) => {
        setEnterCardsTitle(e.target.value);
        props.setCardsTitle(e.target.value);
    };

    const enterCardNameInput = (e) => {
        setEnterCardName(e.target.value);
        if (activeCard) {
            dispatch(editGamePageCards(
                {
                    id: activeCard.old.id,
                    title: e.target.value,
                    type: 'edit'
                }
            ))
        }
    };

    const enterCardPriceInput = (e) => {
        setEnterCardPrice(e.target.value);
        if (activeCard) {
            dispatch(editGamePageCards(
                {
                    id: activeCard.old.id,
                    price: e.target.value,
                    type: 'edit'
                }
            ))
        }
    };

    const newCardNameInput = (e) => {
        setNewCardName(e.target.value);
    }

    const newCardPriceInput = (e) => {
        setNewCardPrice(e.target.value);
    }

    const handleCardChoice = (card, index) => {
        setActiveCardIndex(index);
        setActiveCard(card);
        setEnterCardName('');
        setEnterCardPrice('');
    }

    const handleCardDeletion = () => {
        if (activeCard) {
            dispatch(editGamePageCards(
                {
                    id: activeCard.old.id,
                    title: activeCard.old.title,
                    type: 'delete'
                }
            ))
        }
    }

    const handleCardDeletionCancelling = () => {
        if (activeCard) {
            dispatch(editGamePageCards(
                {
                    type: 'cancel'
                }
            ))
        }
    }

    const handleCardAdding = () => {
        dispatch(editGamePageCards(
            {
                title: newCardName,
                price: newCardPrice,
                type: 'add'
            }
        ))
    }

    const handleAddedCardDeleting = () => {
        dispatch(editGamePageCards(
            {
                type: 'deleteAdded'
            }
        ))
    }

    const currentCardsList = () => {
        if (cardsSelector.length > 0) {
            return (
                cardsSelector.map((card, index) => (
                    card.old &&
                    <div className={'offerCardContainer'}>
                        <NavLink href={'/'} className={'offerLink'}>
                            <Card
                                onClick={() => handleCardChoice(card, index)}
                                className={activeCardIndex === index ? 'offerCard offerCardActive' : 'offerCard'}
                            >
                                <Card.Body>
                                    <Card.Title>{card.old.title}</Card.Title>
                                    <Card.Text>
                                        {card.old.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    </div>
                ))
            )
        }
    }

    const newCardsList = () => {
        if (cardsSelector.length > 0) {
            return (
                cardsSelector.map(card => (
                    card.new && <GameOfferCard
                        title={card.new.title}
                        price={card.new.price}
                    />
                ))
            )
        }
    }

    useEffect(() => {
        dispatch(fillGamePageCardsEditorData(props.gamePagesSelector.offerCardsData));
    }, [])

    return (
        <div id={'gamePageCardsEditMainContainer'}>
            <div id={'gamePageCardsEditSettingsMainContainer'}>
                <div id={'gamePageCardsEditHeaderSettingsContainer'}>
                    <h2>Измени заголовок блока карточек</h2>
                    <Form.Label>Заголовок</Form.Label>
                    <Form.Control
                        value={enterCardsTitle}
                        onChange={enterCardsTitleInput}
                        placeholder='Введите заголовок для карточек...'
                    />
                </div>
                <div id={'gamePageCardsEditCardsSettingsContainer'}>
                    <h2>Настрой карточки</h2>
                    <div id={'gamePageCardsEditorChosenCardContainer'}>
                        <h3>Выбранная карточка</h3>
                        <GameOfferCard
                            title={activeCard ? activeCard.old.title : 'Не назначено'}
                            price={activeCard ? activeCard.old.price : ''}
                        />
                        <div id={'gamePageCardsEditDeleteCancelButtonsContainer'}>
                            {activeCard ?
                                <button
                                    onClick={() => handleCardDeletion()}
                                    className={'nextPageButton'}
                                >
                                    Удалить
                                </button>
                                :
                                null
                            }
                            {deletedCardsSelector.length > 0 ?
                                <button
                                    onClick={() => handleCardDeletionCancelling()}
                                    className={'nextPageButton'}
                                >
                                    Отменить
                                </button>
                                :
                                null
                            }
                        </div>
                    </div>
                    <h3>Измени имя и стоимость карточки</h3>
                    <Form>
                        <Form.Group>
                            <Form.Label>Имя карточки</Form.Label>
                            <Form.Control
                                value={enterCardName}
                                onChange={enterCardNameInput}
                                placeholder="Введите имя карточки..."
                            />
                            <Form.Label>Стоимость карточки</Form.Label>
                            <Form.Control
                                value={enterCardPrice}
                                onChange={enterCardPriceInput}
                                placeholder='Введите стоимость карточки...'
                            />
                        </Form.Group>
                    </Form>
                </div>
                <div id={'gamePageCardsEditorAddNewCardContainer'}>
                    <h2>Добавь новые карточки</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Имя карточки</Form.Label>
                            <Form.Control
                                value={newCardName}
                                onChange={newCardNameInput}
                                placeholder="Введите имя карточки..."
                            />
                            <Form.Label>Стоимость карточки</Form.Label>
                            <Form.Control
                                value={newCardPrice}
                                onChange={newCardPriceInput}
                                placeholder="Введите стоимость карточки..."
                            />
                        </Form.Group>
                    </Form>
                    <div id={'gamePageCardsEditAddDeleteNewCardContainer'}>
                        <button
                            onClick={() => handleCardAdding()}
                            className={'nextPageButton'}
                        >
                            Добавить
                        </button>
                        {addedCardsSelector.length > 0 ?
                            <button
                                onClick={() => handleAddedCardDeleting()}
                                className={'nextPageButton'}
                            >

                            </button>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
            <div id={'gamePageCardsEditPreviewMainContainer'}>
                <div id={'gamePageCardsEditHeaderPreviewContainer'}>
                    <h2>Текущий заголовок</h2>
                    <div id={'gamePageCardsEditCurrentHeaderPreviewContainer'}>
                        <h3>{props.gamePagesSelector.cardsTitle}</h3>
                    </div>
                    <h2>Новый заголовок</h2>
                    <div id={'gamePageCardsEditNewHeaderPreviewContainer'}>
                        <h3 style={{overflowWrap: 'break-word'}}>{enterCardsTitle ? enterCardsTitle : 'Новый заголовок блока карточек'}</h3>
                    </div>
                </div>
                <div id={'gamePageCardsEditCardsPreviewContainer'}>
                    <div id={'gamePageCardsEditCurrentCardsPreviewContainer'}>
                        <h2>Текущие карточки</h2>
                        <div>
                            <div>
                                {currentCardsList()}
                            </div>
                        </div>
                    </div>
                    <div id={'gamePageCardsEditNewCardsPreviewContainer'}>
                        <h2>Новые карточки</h2>
                        <div>
                            <div>
                                {newCardsList()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GamePageCardsEdit;