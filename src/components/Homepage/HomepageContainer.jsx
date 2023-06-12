import Homepage from "./Homepage";
import {connect} from "react-redux";
import React from 'react';

class HomepageClass extends React.Component {
    render() {
        return (
            <Homepage />
        )
    }
}

let mapStateToProps = (state) => {
    return {}
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

const HomepageContainer = connect(mapStateToProps, mapDispatchToProps)(HomepageClass);

export default HomepageContainer