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

                homePageOnChangeAC={this.props.homePageOnChangeAC}
                addHomePageCardButton={this.props.homePageButtonsAC}
                addHomePageCard={this.props.homePageCardsAC}
                addOfferPageCard={this.props.offerPageCardsAC}
                onChangeCardId={this.props.homePageOnChangeAC}
                onChangeCardTitle={this.props.homePageOnChangeAC}
                onChangeCardText={this.props.homePageOnChangeAC}
                onChangeButtonName={this.props.homePageOnChangeAC}
                onChangeOfferCardTitle={this.props.offerPageOnChangeAC}
                onChangeOfferCardText={this.props.offerPageOnChangeAC}
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
        homePageOnChangeAC,
        offerPageOnChangeAC
    }
)(adminPanelClass);

export default AdminPanelContainer