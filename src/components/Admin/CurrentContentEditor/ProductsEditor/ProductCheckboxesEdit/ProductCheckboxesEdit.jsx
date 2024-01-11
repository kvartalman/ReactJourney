import React, {useEffect, useRef, useState} from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import './ProductCheckboxesEdit.css';
import '../../../../ProductPage/ContentSlider/ContentSlider.css';
import '../../../../ProductPage/CheckBoxes/CheckBox.css';
import {useDispatch, useSelector} from "react-redux";
import {
    cancelCheckboxContentDeletion,
    deleteCheckboxContent,
    editCheckboxesContent, editTooltip,
    fillCheckboxesEditor
} from "../../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";

const ProductCheckboxesEdit = (props) => {

    const dispatch = useDispatch();

    const checkboxesSliceSelector = useSelector(state => state.adminPanel.checkboxesEditor);
    const deletedCheckboxesSliceSelector = useSelector(state => state.adminPanel.checkboxesEditorDeletedCheckboxes);

    const [checkboxEdit, setCheckboxEdit] = useState('');
    const [checkboxLabel, setCheckboxLabel] = useState('');
    const [checkboxValue, setCheckboxValue] = useState('');
    const [tooltipText, setTooltipText] = useState('');


    // We use selectedCheckbox function inside jsx to find if checkbox with name === current value of checkboxSelector
    // has own property 'tooltip'. If checkbox object has this property - then we render 'delete' button. Else - 'add'.

    const selectedCheckbox = (selectedName) => {
        if (selectedName) {

            for (let i = 0; i < checkboxesSliceSelector.length; i++) {
                if (checkboxesSliceSelector[i].name === selectedName && checkboxesSliceSelector[i].hasOwnProperty('tooltip')) {
                    return <Button
                        className={'nextPageButton'}
                        onClick={() => deleteTooltip()}
                    >
                        Удалить подсказку
                    </Button>
                } else if (checkboxesSliceSelector[i].name === selectedName && !checkboxesSliceSelector[i].hasOwnProperty('tooltip')) {
                    return <Button
                        className={'nextPageButton'}
                        onClick={() => addTooltip()}
                    >
                        Добавить подсказку
                    </Button>
                }
            }
        }
    }

    const checkboxLabelInput = (e) => {
        setCheckboxLabel(e.target.value);
        dispatch(editCheckboxesContent(
            {
                label: e.target.value,
                name: checkboxEdit
            }
        ))
    }

    const checkboxValueInput = (e) => {
        setCheckboxValue(e.target.value);
        dispatch(editCheckboxesContent(
            {
                value: e.target.value,
                name: checkboxEdit
            }
        ))
    }
    const handleCheckboxSelect = (e) => {
        debugger;
        setCheckboxEdit(e.target.value);
        setCheckboxValue('');
        setCheckboxLabel('');
    }

    const tooltipTextInput = (e) => {
        setTooltipText(e.target.value)
        dispatch(editTooltip(
            {
                tooltipText: e.target.value,
                actionType: 'edit',
                name: checkboxEdit
            }
        ))
    }

    const deleteCheckbox = () => {
        dispatch(deleteCheckboxContent(
            {
                name: checkboxEdit
            }
        ))
    }

    const cancelCheckboxDeletion = () => {
        dispatch(cancelCheckboxContentDeletion())
    }

    const addTooltip = () => {
        dispatch(editTooltip(
            {
                name: checkboxEdit,
                actionType: 'add',
                tooltipText: tooltipText
            }
        ))
        setTooltipText('');
    }

    const deleteTooltip = () => {
        dispatch(editTooltip(
            {
                name: checkboxEdit,
                actionType: 'delete'
            }
        ))
        setTooltipText('');
    }

    const checkboxesList = () => {
        if (checkboxesSliceSelector.length > 0) {
            return checkboxesSliceSelector.map(checkbox => (
                <option>{checkbox.name}</option>
            ))
        }
    }

    const checkboxesCurrent =
        props.product.checkboxes.map((checkbox, index) => {
            return (
                <label key={index} className={'labelSliderCheckboxesContainer'}>
                    <div className={'productCheckboxesEditCheckboxTooltipContainer'}>
                        <Form.Check
                            type="checkbox"
                        />
                        <p>{checkbox.name} - {checkbox.price}&#8364;
                        </p>
                        <div className={'productCheckboxesEditTooltipContainer'}>
                            {checkbox.tooltip ?
                                <OverlayTrigger
                                    key={'top'}
                                    placement={'top'}
                                    overlay={
                                        <Tooltip id={`tooltip-${'top'}`}>
                                            {checkbox.tooltipText}
                                        </Tooltip>
                                    }
                                >
                                    <span className={'tooltipButton'}>?</span>
                                </OverlayTrigger>
                                :
                                null
                            }
                        </div>
                    </div>
                    <div className={'contentSliderCheckboxesInfo'}>
                    </div>

                </label>
            )
        })

    const checkboxesEdit =
        checkboxesSliceSelector.map((checkbox, index) => {
            return (
                <label key={index} className={'labelSliderCheckboxesContainer'}>
                    <div className={'productCheckboxesEditCheckboxTooltipContainer'}>
                        <Form.Check
                            type="checkbox"
                        />
                        <p>
                            {checkbox.name} - {checkbox.price}&#8364;
                        </p>
                        <div className={'productCheckboxesEditTooltipContainer'}>
                            {checkbox.tooltip ?
                                <OverlayTrigger
                                    key={'top'}
                                    placement={'top'}
                                    overlay={
                                        <Tooltip id={`tooltip-${'top'}`}>
                                            {checkbox.tooltipText}
                                        </Tooltip>
                                    }
                                >
                                    <span className={'tooltipButton'}>?</span>
                                </OverlayTrigger>
                                :
                                null
                            }
                        </div>
                    </div>
                </label>
            )
        })

    useEffect(() => {
        dispatch(fillCheckboxesEditor(props.product.checkboxes))
        setCheckboxEdit(props.product.checkboxes[0].name)
    }, [])

    useEffect(() => {
        if (checkboxesSliceSelector.length > 0) {
            setCheckboxEdit(checkboxesSliceSelector[0].name)
        }
    }, [checkboxesSliceSelector])

    return (
        <div id={'productCheckboxesEditMainContainer'}>
            <div id={'productEditNewCheckboxesContainer'}>
                <div>
                    <h2>Настрой чекбоксы</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Выбери чекбокс</Form.Label>
                            <Form.Select
                                onChange={handleCheckboxSelect}
                            >
                                {checkboxesList()}
                            </Form.Select>
                            <Form.Label>Введи название чекбокса</Form.Label>
                            <Form.Control
                                onChange={checkboxLabelInput}
                                value={checkboxLabel}
                                placeholder={'Введите название...'}
                            />
                            <Form.Label>Укажи стоимость чекбоса</Form.Label>
                            <Form.Control
                                onChange={checkboxValueInput}
                                value={checkboxValue}
                                placeholder={'Введите стоимость...'}
                            />
                        </Form.Group>
                        <div id={'productCheckboxesEditDeleteCancelButtonsContainer'}>
                            <Button
                                className={'nextPageButton'}
                                onClick={() => deleteCheckbox()}
                            >
                                Удалить чекбокс
                            </Button>
                            {deletedCheckboxesSliceSelector.length > 0 ?
                                <Button
                                    className={'nextPageButton'}
                                    onClick={() => cancelCheckboxDeletion()}
                                >
                                    Отменить
                                </Button>
                                :
                                null
                            }
                        </div>
                        <Form.Group>
                            <Form.Label>Добавь подсказку</Form.Label>
                            <Form.Control
                                onChange={tooltipTextInput}
                                value={tooltipText}
                                placeholder={'Введите текст...'}
                            />
                        </Form.Group>
                        {
                            selectedCheckbox(checkboxEdit)
                        }
                    </Form>
                </div>
            </div>
            <div id={'productCheckboxesEditPreviewMainContainer'}>
                <div id={'productEditCurrentPreviewContainer'}>
                    <h2>Текущий вид чекбоксов</h2>
                    <div id={'productCheckboxesEditCurrentCheckboxesContainer'}>
                        {checkboxesCurrent}
                    </div>
                </div>
                <div id={'productCheckboxesEditNewPreviewContainer'}>
                    <h2>Новые чекбоксы</h2>
                    <div id={'productCheckboxesEditNewCheckboxesContainer'}>
                        {checkboxesEdit}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCheckboxesEdit;