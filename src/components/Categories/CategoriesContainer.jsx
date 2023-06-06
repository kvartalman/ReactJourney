import Categories from "./Categories";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        categoriesLinks: state.categories.categoriesLinks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories);


export default CategoriesContainer