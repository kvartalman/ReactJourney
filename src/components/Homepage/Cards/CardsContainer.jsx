import {connect} from "react-redux";
import {addCardsData, setIsFetchingAC} from "../../../redux/homePageReducer";
import React from "react";
import axios from "axios";
import OfferCard from "./OfferCard";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import CardsButton from "./Buttons/CardsButton";
import Cards from "./Cards";

class CardsClassContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetchingAC(true);
        axios.get('https://mocki.io/v1/8cb0f160-92f7-4cf8-a6c1-f63690df514e').then(response => {
            this.props.setIsFetchingAC(false);
            this.props.addCardsData(response.data);
        });
    }

    getCardsArray() {
        return ((Object.keys(this.props.cardsData)).map(card =>
            (
                <OfferCard
                    key={card.id}
                    bg={this.props.cardsData[card].bg}
                    id={this.props.cardsData[card].tagId}
                    title={this.props.cardsData[card].title}
                    text={this.props.cardsData[card].text}
                    button={
                        <Container fluid><Row className={'row-cols-auto'}>
                            {
                                this.props.cardsData[card].button.map(button => (
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
            )))
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={'./preloader.gif'} alt={'loading...'}/> : null}
            <Cards getCardsArray={this.getCardsArray()}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        cardsData: state.homePage.cardsData,
        isFetching: state.homePage.isFetching
    }
}

const CardsContainer = connect(mapStateToProps,
    {addCardsData, setIsFetchingAC})(CardsClassContainer);

export default CardsContainer