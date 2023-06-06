import Steps from "./Steps";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        stepsElemsData: state.homePage.stepsElemsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const StepsContainer = connect(mapStateToProps, mapDispatchToProps)(Steps);

export default StepsContainer