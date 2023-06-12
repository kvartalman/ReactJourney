import Advantages from "./Advantages";
import {connect} from "react-redux";
import React from "react";

class AdvantagesClass extends React.Component {
    render() {
        return (
        <Advantages advData={this.props.advData}  />
    )
    }
}

const mapStateToProps = (state) => {
    return {
        advData: state.homePage.advData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const AdvantagesContainer = connect(mapStateToProps, mapDispatchToProps)(AdvantagesClass);

export default AdvantagesContainer