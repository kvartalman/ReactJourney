import React from "react";
import {connect} from "react-redux";
import NotFound from "./NotFound";


const mapStateToProps = (state) => {
    return {
        links: state.notFound.links
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NotFoundContainer = connect(mapStateToProps, mapDispatchToProps)(NotFound);

export default NotFoundContainer