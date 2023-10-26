import React from "react";
import OfferCard from "../../../../Homepage/Cards/OfferCard";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import CardsButton from "../../../../Homepage/Cards/Buttons/CardsButton";

const HomePageCardsEditorCardPreview = (props) => {
    return (
        <Row xs={1} md={3} id={'cards-row'} className={'homePageCardEditorPreviewRow'}>
            {props.card ?
                <OfferCard
                    key={props.card.id}
                    bg={props.card.bg}
                    id={props.card.tagId}
                    title={props.card.title}
                    text={props.card.text}
                    button={
                        <Container fluid><Row className={'row-cols-auto'}>
                            {
                                props.card.button.map(button => (
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

export default HomePageCardsEditorCardPreview;