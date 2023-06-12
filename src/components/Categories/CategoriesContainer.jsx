import Categories from "./Categories";
import {connect} from "react-redux";
import React from 'react';

class CategoriesClass extends React.Component {
    render() {
        return (
            <Categories categoriesLinks={this.props.categoriesLinks} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categoriesLinks: state.categories.categoriesLinks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(CategoriesClass);


export default CategoriesContainer