import React from "react";
import OfferCard from "../../../../Homepage/Cards/OfferCard";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import CardsButton from "../../../../Homepage/Cards/Buttons/CardsButton";
import {useSelector} from "react-redux";
import './HomePageCardsEditorFinalPreview.css';
import Button from "react-bootstrap/Button";
import axios from "axios";

const HomePageCardsEditorFinalPreview = (props) => {

    const cardsData = useSelector(state => state.adminPanel.homePageOfferCards);

    const handleChangesConfirmation = () => {

        const deepCopyOfCardsSelector = JSON.parse(JSON.stringify(cardsData));

        const authToken = localStorage.getItem('auth_token');
        const formData = new FormData();

        const requests = []


        for (let i = 0; i < deepCopyOfCardsSelector.length; i++) {

            let image = null;
            let prevImgName = '';

            for (let j = 0; j < props.cardsImages.length; j++) {

                if (props.cardsImages[j][0].name === deepCopyOfCardsSelector[i].imgName) {
                    image = props.cardsImages[j][0]
                    prevImgName = props.cardsImages[j][1]
                    break;
                }
            }

            const request = () => {
                formData.append(`title-${i}`, deepCopyOfCardsSelector[i].title)
                formData.append(`text-${i}`, deepCopyOfCardsSelector[i].text)
                formData.append(`button-${i}`, JSON.stringify(deepCopyOfCardsSelector[i].button))
                formData.append(`tagId-${i}`, deepCopyOfCardsSelector[i].tagId)
                formData.append(`imgName-${i}`, deepCopyOfCardsSelector[i].imgName)
                formData.append(`img-${i}`, image)
                formData.append(`prevImgName-${i}`, prevImgName)
            }

            requests.push(request)

        }

        Promise.all(requests.map(req => req()))
            .then(results => {

                    axios.post('http://localhost:8000/shop-content/api/v1/edit_content_offerPage_cards', formData, {
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
        if (cardsData) {
            return cardsData.map(card =>
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

    return (
        <>
            <img src={'/backgrounds/bestoffers.png'} alt={'BEST OFFERS'} className={'img-fluid imgTab'}/>
            <div id={'homePageCardsEditorFinalPreviewCardsListContainer'}>
                {
                    getCardsArray()
                }
            </div>
            <Button
                onClick={() => handleChangesConfirmation()}
                className={'nextPageButton'}
                id={'homePageCardsEditorFinalPreviewAcceptButton'}>
                Подтвердить
            </Button>
        </>
    );
};

export default HomePageCardsEditorFinalPreview;