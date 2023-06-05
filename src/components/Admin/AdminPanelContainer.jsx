import {offerPageCardsActionCreator, offerPageOnChangeActionCreator} from "../../redux/offerPagesReducer";
import {
    homePageButtonsActionCreator,
    homePageCardsActionCreator,
    homePageOnChangeActionCreator
} from "../../redux/homePageReducer";
import AdminPanel from "./AdminPanel";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        cardsData: state.homePage.cardsData,
        gameOfferPages: Object.keys(state.gameOfferPages.pagesData),
        linksList: state.adminPanel.linksList,
        homePageForms: state.homePage.homePageCardsForms,
        offerPageForms: state.gameOfferPages.offerPageCardsForms
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addHomePageCardButton: (cardTitle, newLink, newButtonType) => {
            dispatch(homePageButtonsActionCreator(
            cardTitle, newLink, newButtonType
        ))
        },
        addHomePageCard: () => {dispatch(homePageCardsActionCreator())},
        addOfferPageCard: (gameOfferSelector) => {
            dispatch(offerPageCardsActionCreator(gameOfferSelector))
        },
        onChangeCardId: (text) => {
            dispatch(homePageOnChangeActionCreator(text, 'cardId'))
        },
        onChangeCardTitle: (text) => {
            dispatch(homePageOnChangeActionCreator(text, 'cardTitle'))
        },
        onChangeCardText: (text) => {
            dispatch(homePageOnChangeActionCreator(text, 'cardText'))
        },
        onChangeButtonName: (text) => {
            dispatch(homePageOnChangeActionCreator(text, 'buttonName'))
        },
        onChangeOfferCardTitle: (text) => {
            dispatch(offerPageOnChangeActionCreator(text, 'offerPageCardTitle'))
        },
        onChangeOfferCardText: (text) => {
            dispatch(offerPageOnChangeActionCreator(text, 'offerPageCardText'))
        }
    }
}

const AdminPanelContainer = connect(mapStateToProps, mapDispatchToProps)(AdminPanel);

export default AdminPanelContainer