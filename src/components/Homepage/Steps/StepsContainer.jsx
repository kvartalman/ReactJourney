import Steps from "./Steps";
import {connect} from "react-redux";
import React from 'react';
class StepsClass extends React.Component {
    render() {
        return (
            <Steps stepsElemsData={this.props.stepsElemsData} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stepsElemsData: state.homePage.stepsElemsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const StepsContainer = connect(mapStateToProps, mapDispatchToProps)(StepsClass);

export default StepsContainer