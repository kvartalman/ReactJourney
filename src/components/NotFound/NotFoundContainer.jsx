import React from "react";
import {connect} from "react-redux";
import NotFound from "./NotFound";

class NotFoundClass extends React.Component {
    render() {
        return (
            <NotFound links={this.props.links} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        links: state.notFound.links
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NotFoundContainer = connect(mapStateToProps, mapDispatchToProps)(NotFoundClass);

export default NotFoundContainer