import Cards from "./Cards";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        cardsData: state.homePage.cardsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const CardsContainer = connect(mapStateToProps, mapDispatchToProps)(Cards);

export default CardsContainer