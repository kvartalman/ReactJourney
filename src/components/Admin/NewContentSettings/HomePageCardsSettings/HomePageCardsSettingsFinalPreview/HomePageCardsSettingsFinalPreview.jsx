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
import axios from "axios";

const HomePageCardsSettingsFinalPreview = (props) => {



    const addedCardsSelector = useSelector(state => state.adminPanelNewContent.homePageAddedOfferCards);
    const cardsSelector = useSelector(state => state.adminPanelNewContent.homePageOfferCards)

    const dispatch = useDispatch();

    const selectedCard = useRef(null);
    const handleAddedCardDeletion = () => {
        dispatch(cancelHomePageOfferCardAdding(selectedCard.current.value))
    }

    const handleChangesConfirmation = () => {

        const deepCopyOfCardsSelector = JSON.parse(JSON.stringify(cardsSelector));

        const authToken = localStorage.getItem('auth_token');
        const formData = new FormData();

        const requests = []

        for (let i = 0; i < deepCopyOfCardsSelector.length; i++) {

            let image = null;

            for (let j = 0; j < props.imagesData.length; j++) {
                if (props.imagesData[j].name === deepCopyOfCardsSelector[i].imgName) {
                    image = props.imagesData[j]
                    break;
                }
            }

            if (image === null) {
                image = deepCopyOfCardsSelector[i].bg
            }
            const request = () => {

                formData.append(`title-${i}`, deepCopyOfCardsSelector[i].title)
                formData.append(`text-${i}`, deepCopyOfCardsSelector[i].text)
                formData.append(`button-${i}`, JSON.stringify(deepCopyOfCardsSelector[i].button))
                formData.append(`tagId-${i}`, deepCopyOfCardsSelector[i].tagId)
                formData.append(`imgName-${i}`, deepCopyOfCardsSelector[i].imgName)
                formData.append(`img-${i}`, image)
            }

            requests.push(request)
        }

        Promise.all(requests.map(req => req()))
            .then(results => {

                    axios.post('http://localhost:8000/shop-content/api/v1/update_offerPage_cards', formData, {
                            headers: {
                                'Authorization': `Token ${authToken}`,
                            }
                        }
                    )
                        .then(response => {
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            )
            .catch(error => console.log(error))
    }

    const getCardsArray = () => {

        if (cardsSelector.length > 0) {

            return cardsSelector.map(card =>
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
                                    (card.button).map(button => (
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
                        Удалить
                    </Button>
                </div>
            </div>
            <div id={'homePageCardsSettingsFinalPreviewCardsMainContainer'}>
                <img src={'/backgrounds/bestoffers.png'} alt={'BEST OFFERS'} className={'img-fluid imgTab'}/>
                <div id={'homePageCardsSettingsFinalPreviewCardsContainer'}>
                    {/*row-cols-* - set the cards width by setting amount of cards in row*/}
                    {getCardsArray()}
                </div>
            </div>
            <div id={'homePageCardsSettingsFinalPreviewAcceptButtonContainer'}>
                <Button
                    className={'nextPageButton'}
                    onClick={() => handleChangesConfirmation()}
                >
                    Подтвердить изменения
                </Button>
            </div>
        </div>
    )
}

export default HomePageCardsSettingsFinalPreview;