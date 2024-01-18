import React, {useState} from "react";
import './NewGameSubCategories.css';
import Form from "react-bootstrap/Form";
import {useDispatch, useSelector} from "react-redux";
import {editNewSubCategories} from "../../../../../store/slices/adminPanelSlices/adminPanelNewGameSlice";

const NewGameSubCategories = (props) => {

    const dispatch = useDispatch();

    const newSubCategoriesSelector = useSelector(state => state.adminPanelNewGame.newGameSubCategories);

    const [subName, setSubName] = useState('');

    const subNameInput = (e) => {
        setSubName(e.target.value);
    }

    const editSubCategories = (type) => {
        dispatch(editNewSubCategories(
            {
                type,
                name: subName
            }
        ))
    }

    const newSubCtgList = () => {
        if (newSubCategoriesSelector.length > 0) {
            return (
                newSubCategoriesSelector.map(sub => (
                    <div id={'newGameNewSubCategoryContainer'}>
                        {sub.name}
                    </div>
                ))
            )
        }
    }

    return (
        <div id={'newGameSubCategoriesMainContainer'}>
            <div id={'newGameSubCategoriesSettingsContainer'}>
                <h2>Добавь подкатегории</h2>
                <Form>
                    <Form.Label>Название подкатегории</Form.Label>
                    <Form.Control
                        value={subName}
                        onChange={subNameInput}
                        placeholder={'Введите название подкатегории...'}
                    />
                </Form>
                <div id={'newGameSubCategoriesSettingsAddCancelButtonsContainer'}>
                    <button
                        onClick={() => editSubCategories('add')}
                        className={'nextPageButton'}
                    >
                        Добавить
                    </button>
                    {newSubCategoriesSelector.length > 0 ?
                        <button
                            onClick={() => editSubCategories('delete')}
                            className={'nextPageButton'}
                        >
                            Отменить
                        </button>
                        :
                        null
                    }
                </div>
            </div>
            <div id={'newGameSubCategoriesPreviewContainer'}>
                <h2>Превью</h2>
                <div>
                    {newSubCategoriesSelector.length > 0 ?
                        newSubCtgList()
                        :
                        <h2>Здесь будет список подкатегорий</h2>
                    }

                </div>
            </div>
        </div>
    )
}

export default NewGameSubCategories;