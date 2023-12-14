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
    deleteCheckboxContent,
    editCheckboxesContent, editTooltip,
    fillCheckboxesEditor
} from "../../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";

const ProductCheckboxesEdit = (props) => {

    const checkboxesSliceSelector = useSelector(state => state.adminPanel.checkboxesEditor);
    const dispatch = useDispatch();

    const checkboxSelector = useRef(null);
    const [checkboxEdit, setCheckboxEdit] = useState('');
    const [checkboxLabel, setCheckboxLabel] = useState('');
    const [checkboxValue, setCheckboxValue] = useState('');
    const [tooltipText, setTooltipText] = useState('');

    // We use selectedCheckbox function inside jsx to find if checkbox with name === current value of checkboxSelector
    // has own property 'tooltip'. If checkbox object has this property - then we render 'delete' button. Else - 'add'.

    const selectedCheckbox = (selectedName) => {
        if (selectedName && selectedName.current && selectedName.current.value) {
            for (let i = 0; i < checkboxesSliceSelector.length; i++) {
                if (checkboxesSliceSelector[i].name === selectedName.current.value && checkboxesSliceSelector[i].hasOwnProperty('tooltip')) {
                    return <Button onClick={() => deleteTooltip()}>Delete tooltip</Button>
                } else if (checkboxesSliceSelector[i].name === selectedName.current.value && !checkboxesSliceSelector[i].hasOwnProperty('tooltip')) {
                    return <Button onClick={() => addTooltip()}>Add tooltip</Button>
                }
            }
        }
    }

    const checkboxLabelInput = (e) => {
        setCheckboxLabel(e.target.value);
        dispatch(editCheckboxesContent(
            {
                label: e.target.value,
                name: checkboxSelector.current.value
            }
        ))
    }

    const checkboxValueInput = (e) => {
        setCheckboxValue(e.target.value);
        dispatch(editCheckboxesContent(
            {
                value: e.target.value,
                name: checkboxSelector.current.value
            }
        ))
    }
    const handleCheckboxSelect = (e) => {
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
                name: checkboxSelector.current.value
            }
        ))
    }

    const checkboxesList = props.product.checkboxes.map(checkbox => (
        <option>{checkbox.label}</option>
    ))

    const checkboxesCurrent =
        props.product.checkboxes.map((checkbox, index) => {
            return (
                <label key={index} className={'labelSliderCheckboxesContainer'}>
                    <div className={'checkboxTooltipContainer'}>
                        <Form.Check
                            type="checkbox"
                        />
                        <div className={'tooltipContainer'}>
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
                        <p>{checkbox.label} - {checkbox.price}&#8364;
                        </p>
                    </div>

                </label>
            )
        })

    const checkboxesEdit =
        checkboxesSliceSelector.map((checkbox, index) => {
            return (
                <label key={index} className={'labelSliderCheckboxesContainer'}>
                    <div className={'checkboxTooltipContainer'}>
                        <Form.Check
                            type="checkbox"
                        />
                        <div className={'tooltipContainer'}>
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
                        <p>
                            {checkbox.label} - {checkbox.price}&#8364;
                        </p>
                    </div>

                </label>
            )
        })

    const deleteCheckbox = () => {
        dispatch(deleteCheckboxContent(
            {
                name: checkboxSelector.current.value
            }
        ))
    }

    const addTooltip = () => {
        dispatch(editTooltip(
            {
                name: checkboxSelector.current.value,
                actionType: 'add',
                tooltipText: tooltipText
            }
        ))
    }

    const deleteTooltip = () => {
        dispatch(editTooltip(
            {
                name: checkboxSelector.current.value,
                actionType: 'delete'
            }
        ))
    }

    useEffect(() => {
        dispatch(fillCheckboxesEditor(props.product.checkboxes))
    }, [dispatch, props.product])

    return (
        <Container fluid>
            <div id={'productEditCurrentCheckboxesContainer'}>
                <h2>Current checkboxes</h2>
                <div id={'contentSliderCheckboxesContainer'}>
                    {checkboxesCurrent}
                </div>
            </div>
            <div id={'productEditNewCheckboxesContainer'}>
                <Form>
                    <Form.Group>
                        <Form.Label>Choose checkbox</Form.Label>
                        <Form.Select
                            ref={checkboxSelector}
                            onChange={handleCheckboxSelect}
                        >
                            {checkboxesList}
                        </Form.Select>
                        <Form.Label>Enter checkbox label</Form.Label>
                        <Form.Control
                            onChange={checkboxLabelInput}
                            value={checkboxLabel}
                            placeholder={'Enter label...'}
                        />
                        <Form.Label>Enter checkbox value</Form.Label>
                        <Form.Control
                            onChange={checkboxValueInput}
                            value={checkboxValue}
                            placeholder={'Enter value...'}
                        />
                    </Form.Group>
                </Form>
                <Button onClick={() => deleteCheckbox()}>Delete checkbox</Button>
            </div>
            <div id={'tooltipEditContainer'}>
                <Form>
                    <Form.Group>
                        <Form.Label>Input tooltip text</Form.Label>
                        <Form.Control
                            onChange={tooltipTextInput}
                            value={tooltipText}
                            placeholder={'Enter text...'}
                        />
                    </Form.Group>
                </Form>
                {
                    selectedCheckbox(checkboxSelector)
                }
            </div>
            <div id={'contentSliderCheckboxesContainer'}>
                {checkboxesEdit}
            </div>
            <div>
                <Button className={'nextPageButton'} onClick={() => props.setKey('slider')}>Next</Button>
            </div>
        </Container>
    );
}

export default ProductCheckboxesEdit;