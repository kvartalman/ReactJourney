import Categories from "./Categories";

const CategoriesContainer = (props) => {

    const state = props.store.getState();

    return (
        <Categories
        categoriesLinks={state.categories.categoriesLinks}
        />
    )
}

export default CategoriesContainer