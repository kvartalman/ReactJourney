import React, {useRef} from "react";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import OfferCard from "../../../../Homepage/Cards/OfferCard";
import CardsButton from "../../../../Homepage/Cards/Buttons/CardsButton";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {cancelHomePageOfferCardAdding} from "../../../../../store/slices/adminPanelSlices/adminPanelNewContentSlice";
import './HomePageCardsSettingsFinalPreview.css';

const HomePageCardsSettingsFinalPreview = (props) => {

    const addedCardsSelector = useSelector(state => state.adminPanelNewContent.homePageAddedOfferCards);

    const dispatch = useDispatch();

    const selectedCard = useRef(null);
    const handleAddedCardDeletion = () => {
        dispatch(cancelHomePageOfferCardAdding(selectedCard.current.value))
    }

    const getCardsArray = () => {
        if (props.cardsData) {
            return props.cardsData.map(card =>
                (
                    <OfferCard
                        key={card.id}
                        bg={card.bg}
                        id={card.tagId}
                        title={card.title}
                        text={card.text}
                        button={
                            <Container fluid><Row className={'row-cols-auto'}>
                                {
                                    card.button.map(button => (
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
                ))
        }
    }

    const getAddedCardsList = addedCardsSelector.map(card => (
        <option>{card.title}</option>
    ))

    return (

        <div id={'homePageCardsSettingsFinalPreviewMainContainer'}>
            <h1>Финальное превью</h1>
            <div id={'homePageCardsSettingsFinalPreviewSettingsContainer'}>
                <h2>Удали карточки, которые передумал добавлять</h2>
                <div>
                    <Form>
                        <Form.Label>Список новых карточек</Form.Label>
                        <Form.Select
                            ref={selectedCard}
                        >
                            {getAddedCardsList}
                        </Form.Select>
                    </Form>
                    <Button
                        className={'nextPageButton'}
                        onClick={() => handleAddedCardDeletion()}
                    >
                        Delete card
                    </Button>
                </div>
            </div>
            <div id={'homePageCardsSettingsFinalPreviewCardsMainContainer'}>
                <img src={'/backgrounds/bestoffers.png'} alt={'BEST OFFERS'} className={'img-fluid imgTab'}/>
                <div id={'homePageCardsSettingsFinalPreviewCardsContainer'}>
                    {/*row-cols-* - set the cards width by setting amount of cards in row*/}
                    {props.loading ? <div id={'homePageCardsPreloader'}>
                        <img src={'/preloader.gif'} alt={'Loading...'}/>
                    </div> : getCardsArray()
                    }
                </div>
            </div>
            <div id={'homePageCardsSettingsFinalPreviewAcceptButtonContainer'}>
                <Button
                    className={'nextPageButton'}
                >
                    Accept
                </Button>
            </div>
        </div>
    )
}

export default HomePageCardsSettingsFinalPreview;