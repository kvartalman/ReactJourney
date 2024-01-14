import React, {useEffect, useState} from "react";
import './GamePageSubCtgEditor.css';
import {useDispatch, useSelector} from "react-redux";
import {
    editSubCtgEditorData,
    editSubCtgEditorDataNames,
    fillSubCtgEditorData
} from "../../../../../store/slices/adminPanelSlices/adminPanelSubCtgEditorSlice";
import Form from "react-bootstrap/Form";

const GamePageSubCtgEditor = (props) => {

    const dispatch = useDispatch();

    const currentSubCtgSelector = useSelector(state => state.gameProducts[props.game].subCategories);
    const newSubCtgSelector = useSelector(state => state.adminPanelSubCtgEditor.subCtgEditorData);
    const addedSubCtgSelector = useSelector(state => state.adminPanelSubCtgEditor.subCtgEditorAddedSubCtgData);

    const [subCtg, setSubCtg] = useState('');
    const [subCtgIndex, setSubCtgIndex] = useState(null);
    const [subCtgTitle, setSubCtgTitle] = useState('');
    const [newSubCtgTitle, setNewSubCtgTitle] = useState('');

    const handleSubCtgChoice = (subCtg, index) => {
        setSubCtg(subCtg);
        setSubCtgIndex(index);
    }

    const enterSubCtgTitleInput = (e) => {
        setSubCtgTitle(e.target.value);
        dispatch(editSubCtgEditorData({
            name: subCtg,
            text: e.target.value,
            type: 'edit'
        }))
    }

    const enterNewSubCtgTitleInput = (e) => {
        setNewSubCtgTitle(e.target.value);
    }

    const handleSubCtgAdding = () => {
        dispatch(editSubCtgEditorData(
            {
                name: newSubCtgTitle,
                type: 'add'
            }
        ))
    }

    const handleSubCtgDeleting = () => {
        dispatch(editSubCtgEditorData(
            {
                name: subCtg,
                type: 'delete'
            }
        ))
    }

    const handleAddedSubCtgDeleting = () => {
        dispatch(editSubCtgEditorData(
            {
                type: 'deleteAdded'
            }
        ))
    }

    const currentSubCtgList = () => {
        if (currentSubCtgSelector.length > 0) {
            return (
                currentSubCtgSelector.map((subCtg, index) => (
                    <div
                        onClick={() => handleSubCtgChoice(subCtg.name, index)}
                        className={index === subCtgIndex ?
                            'subCtgEditorSubCtgActiveContainer'
                            : 'subCtgEditorSubCtgContainer'}
                    >
                        <p>{subCtg.name}</p>
                    </div>
                ))
            );
        }
    };

    const newSubCtgList = () => {
        if (newSubCtgSelector.length > 0) {
            return (
                newSubCtgSelector.map(subCtg => (
                    <div className={'subCtgEditorSubCtgContainer'}>
                        <p
                            style={{
                                overflowWrap: "break-word",
                                wordWrap: "break-word"
                            }}
                        >{subCtg.new ? subCtg.new : subCtg.old}</p>
                    </div>
                ))
            );
        }
    };

    useEffect(() => {
        dispatch(fillSubCtgEditorData(currentSubCtgSelector));

    }, []);

    return (
        <div id={'subCtgEditorMainContainer'}>
            <div id={'subCtgEditorSettingsContainer'}>
                <div>
                    <h2>Измени текущие подкатегории</h2>
                    <p>Кликни на подкатегорию из блока "Текущие подкатегории", чтобы выбрать её</p>
                    <div id={'subCtgEditorChosenSubCtgContainer'}>
                        <h3>Выбранная подкатегория</h3>
                        <div className={'subCtgEditorSubCtgContainer'}>
                            {subCtg ? subCtg : 'Не назначено'}
                        </div>
                        <button
                            onClick={() => handleSubCtgDeleting()}
                            className={'nextPageButton'}
                        >
                            Удалить
                        </button>
                    </div>
                    <h3>Измени название подкатегории</h3>
                    <Form>
                        <Form.Label>Название подкатегории</Form.Label>
                        <Form.Control
                            value={subCtgTitle}
                            onChange={enterSubCtgTitleInput}
                            placeholder="Введите новое название для подкатегории..."
                        />
                    </Form>
                </div>
                <div>
                    <h2>Добавь новые подкатегории</h2>
                    <Form>
                        <Form.Label>Название подкатегории</Form.Label>
                        <Form.Control
                            value={newSubCtgTitle}
                            onChange={enterNewSubCtgTitleInput}
                            placeholder="Введите название новой подкатегории..."
                        />
                    </Form>
                    <div id={'gamePageSubCtgEditorAddCancelContainer'}>
                        <button
                            onClick={() => handleSubCtgAdding()}
                            className={'nextPageButton'}
                        >
                            Добавить
                        </button>
                        {addedSubCtgSelector.length > 0 ?
                        <button
                            onClick={() => handleAddedSubCtgDeleting()}
                            className={'nextPageButton'}
                        >
                            Отменить
                        </button>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
            <div id={'subCtgEditorPreviewMainContainer'}>
                <h2>Текущие подкатегории</h2>
                <div id={'subCtgEditorCurrentPreviewContainer'}>
                    {currentSubCtgList()}
                </div>
                <h2>Новые подкатегории</h2>
                <div id={'subCtgEditorNewPreviewContainer'}>
                    {newSubCtgList()}
                </div>
            </div>
        </div>
    )
}

export default GamePageSubCtgEditor;