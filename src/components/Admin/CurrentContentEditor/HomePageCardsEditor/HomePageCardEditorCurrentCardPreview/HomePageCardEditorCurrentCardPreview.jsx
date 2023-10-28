import React from "react";
import OfferCard from "../../../../Homepage/Cards/OfferCard";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import CardsButton from "../../../../Homepage/Cards/Buttons/CardsButton";
import {useSelector} from "react-redux";

const HomePageCardEditorCurrentCardPreview = (props) => {

    const currentCardsSelector = useSelector(state => state.homePage.cardsData);

    return (
        <Row xs={1} md={3} id={'cards-row'} className={'homePageCardEditorPreviewRow'}>
            <h2>Current view of card</h2>
            {currentCardsSelector.length > 0 ?
                <OfferCard
                    key={currentCardsSelector[props.activeCardIndex].id}
                    bg={currentCardsSelector[props.activeCardIndex].bg}
                    id={currentCardsSelector[props.activeCardIndex].tagId}
                    title={currentCardsSelector[props.activeCardIndex].title}
                    text={currentCardsSelector[props.activeCardIndex].text}
                    button={
                        <Container fluid><Row className={'row-cols-auto'}>
                            {
                                currentCardsSelector[props.activeCardIndex].button.map(button => (
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
                :
                null
            }
        </Row>
    );
};

export default HomePageCardEditorCurrentCardPreview;