import Homepage from "./Homepage";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        carouselData: state.homePage.carouselData,
        advData: state.homePage.advData,
        cardsData: state.homePage.cardsData,
        stepsElemsData: state.homePage.stepsElemsData
    }
}
let mapDispatchToProps = () => {
    return {

    }
}

const HomepageContainer = connect(mapStateToProps, mapDispatchToProps)(Homepage);

export default HomepageContainer