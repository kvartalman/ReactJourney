import React from "react";
import './AdminPanel.css'
import {offerPageCardsActionCreator, offerPageOnChangeActionCreator} from "../../redux/offerPagesCardsReducer";
import {
    homePageButtonsActionCreator,
    homePageCardsActionCreator,
    homePageOnChangeActionCreator
} from "../../redux/homePageReducer";
import AdminPanel from "./AdminPanel";

const AdminPanelContainer = (props) => {

    let state = props.store.getState();

    let addHomePageCardButton = (cardTitle, newLink, newButtonType) => {
        props.store.dispatch(homePageButtonsActionCreator(
            cardTitle, newLink, newButtonType
        ))
    }
    let addHomePageCard = () => {
        props.store.dispatch(homePageCardsActionCreator())
    }

    let addOfferPageCard = (gameOfferSelector) => {
            props.store.dispatch(offerPageCardsActionCreator(gameOfferSelector))
    }

    let onChangeCardId = (text) => {
        props.store.dispatch(homePageOnChangeActionCreator(text, 'cardId'))
    }
    let onChangeCardTitle = (text) => {
        props.store.dispatch(homePageOnChangeActionCreator(text, 'cardTitle'))
    }
    let onChangeCardText = (text) => {
        props.store.dispatch(homePageOnChangeActionCreator(text, 'cardText'))
    }
    let onChangeButtonName = (text) => {
        props.store.dispatch(homePageOnChangeActionCreator(text, 'buttonName'))
    }

    let onChangeOfferCardTitle = (text) => {
        props.store.dispatch(offerPageOnChangeActionCreator(text, 'offerPageCardTitle'))
    }
    let onChangeOfferCardText = (text) => {
        props.store.dispatch(offerPageOnChangeActionCreator(text, 'offerPageCardText'))
    }

    return (
        <AdminPanel
            cardsData={state.homePage.cardsData}
            gameOfferPages={Object.keys(state.gameOfferPages.pagesData)}
            linksList={state.adminPanel.linksList}

            homePageForms={state.homePage.homePageCardsForms}
            offerPageForms={state.gameOfferPages.offerPageCardsForms}

            addHomePageCardButton={addHomePageCardButton}
            addHomePageCard={addHomePageCard}
            addOfferPageCard={addOfferPageCard}
            onChangeCardId={onChangeCardId}
            onChangeCardTitle={onChangeCardTitle}
            onChangeCardText={onChangeCardText}
            onChangeButtonName={onChangeButtonName}
            onChangeOfferCardTitle={onChangeOfferCardTitle}
            onChangeOfferCardText={onChangeOfferCardText}
        />
    );
}

export default AdminPanelContainer