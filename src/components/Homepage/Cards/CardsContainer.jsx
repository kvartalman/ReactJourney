import Cards from "./Cards";
import {connect} from "react-redux";
import {addCardsData} from "../../../redux/homePageReducer";

const mapStateToProps = (state) => {
    return {
        cardsData: state.homePage.cardsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCardData: (data) => {
            dispatch(addCardsData(data))
        }
    }
}

const CardsContainer = connect(mapStateToProps, mapDispatchToProps)(Cards);

export default CardsContainer