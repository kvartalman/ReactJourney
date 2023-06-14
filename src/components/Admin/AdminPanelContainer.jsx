import {offerPageCardsAC, offerPageOnChangeAC} from "../../redux/offerPagesReducer";
import {
    homePageButtonsAC,
    homePageCardsAC,
    homePageOnChangeAC
} from "../../redux/homePageReducer";
import AdminPanel from "./AdminPanel";
import {connect} from "react-redux";
import React from 'react';

class adminPanelClass extends React.Component {
    render() {
        return (
            <AdminPanel
                cardsData={this.props.cardsData}
                gameOfferPages={this.props.gameOfferPages}
                linksList={this.props.linksList}
                homePageForms={this.props.homePageForms}
                offerPageForms={this.props.offerPageForms}
                addHomePageCardButton={this.props.homePageButtonsAC}
                addHomePageCard={this.props.homePageCardsAC}
                addOfferPageCard={this.props.offerPageCardsAC}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        cardsData: state.homePage.cardsData,
        gameOfferPages: Object.keys(state.gameOfferPages.pagesData),
        linksList: state.adminPanel.linksList,
        homePageForms: state.homePage.homePageCardsForms,
        offerPageForms: state.gameOfferPages.offerPageCardsForms
    }
}


const AdminPanelContainer = connect(mapStateToProps,
    {
        homePageButtonsAC,
        homePageCardsAC,
        offerPageCardsAC,
    }
)(adminPanelClass);

export default AdminPanelContainer