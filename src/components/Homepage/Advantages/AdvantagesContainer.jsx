import Advantages from "./Advantages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        advData: state.homePage.advData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const AdvantagesContainer = connect(mapStateToProps, mapDispatchToProps)(Advantages);

export default AdvantagesContainer