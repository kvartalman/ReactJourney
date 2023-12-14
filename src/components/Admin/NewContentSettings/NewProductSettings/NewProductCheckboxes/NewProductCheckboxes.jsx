import React, {useEffect, useRef, useState} from "react";
import './NewProductCheckboxes.css';
import Form from "react-bootstrap/Form";
import {useDispatch, useSelector} from "react-redux";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {handleNewCheckboxesArrayChanges} from "../../../../../store/slices/adminPanelSlices/adminPanelNewProductSlice";

const NewProductCheckboxes = () => {

    const dispatch = useDispatch();

    const newCheckboxesArraySelector = useSelector(state => state.adminPanelNewProduct.newCheckboxesArray);

    const [checkboxPrice, setCheckboxPrice] = useState(0);
    const [checkboxLabel, setCheckboxLabel] = useState('');
    const [checkboxTooltipText, setCheckboxTooltipText] = useState('');
    const [tooltip, setTooltip] = useState(false);

    const checkboxRef = useRef(null);

    const checkboxPriceInput = (e) => {
        if (!isNaN(e.target.value)) {
            setCheckboxPrice(+e.target.value);
        }
    }

    const checkboxLabelInput = (e) => {
        setCheckboxLabel(e.target.value);
    }

    const checkboxTooltipInput = (e) => {
        setCheckboxTooltipText(e.target.value);
    }

    const handleTooltipChoice = () => {
        setTooltip(!tooltip);
    }

    const handleCheckboxAdding = () => {
        dispatch(handleNewCheckboxesArrayChanges(
            {
                actionType: 'add',
                price: checkboxPrice,
                label: checkboxLabel,
                tooltipText: checkboxTooltipText
            }
        ))
    }

    const handleCheckboxDeleting = () => {
        dispatch(handleNewCheckboxesArrayChanges(
            {
                actionType: 'delete',
                label: checkboxRef.current.value
            }
        ))
    }

    const checkboxesList = () => {
        if (newCheckboxesArraySelector.length > 0) {
            return (
                newCheckboxesArraySelector.map(checkbox => (
                    <option>{checkbox.label}</option>
                ))
            )
        }
    }

    const checkboxesFinalPreviewList = () => {
        if (newCheckboxesArraySelector.length > 0) {
            return (
                newCheckboxesArraySelector.map(checkbox => (
                    <label className={'labelSliderCheckboxesContainer'}>
                        <div className={'checkboxTooltipContainer'}>
                            <div className={'tooltipContainer'}>
                                {checkbox.tooltipText ?
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
                            <Form.Check
                                type="checkbox"
                            />
                        </div>
                        <div className={'contentSliderCheckboxesInfo'}>
                            <p>{checkbox.label} - {checkbox.price}&#8364;
                            </p>
                        </div>

                    </label>
                ))
            )
        }
    }

    return (
        <div id={'newProductCheckboxesMainContainer'}>
            <div id={'newProductCheckboxesFormsPreviewContainer'}>
                <div id={'newProductCheckboxesFormsContainer'}>
                    <Form>
                        <Form.Label>
                            Set price
                        </Form.Label>
                        <Form.Control
                            value={checkboxPrice}
                            onChange={checkboxPriceInput}
                            placeholder={'Enter price here...'}
                        />
                        <Form.Label>
                            Set label
                        </Form.Label>
                        <Form.Control
                            value={checkboxLabel}
                            onChange={checkboxLabelInput}
                            placeholder={'Enter label here...'}
                        />
                        {tooltip ?
                            <>
                                <Form.Label>
                                    Tooltip name
                                </Form.Label>
                                <Form.Control
                                    value={checkboxTooltipText}
                                    onChange={checkboxTooltipInput}
                                    placeholder={'Enter tooltip text here...'}
                                />
                            </>
                            :
                            null
                        }
                    </Form>
                    <Button
                        id={'newProductCheckboxesTooltipButton'}
                        className={'nextPageButton'}
                        onClick={() => handleTooltipChoice()}
                    >
                        {tooltip ? 'Hide tooltip settings' : 'Show tooltip settings'}
                    </Button>
                    <div id={'newProductCheckboxesPreviewContainer'}>
                        <label className={'labelSliderCheckboxesContainer'}>
                            <div className={'checkboxTooltipContainer'}>
                                <div className={'tooltipContainer'}>
                                    {tooltip ?
                                        <OverlayTrigger
                                            key={'top'}
                                            placement={'top'}
                                            overlay={
                                                <Tooltip id={`tooltip-${'top'}`}>
                                                    {checkboxTooltipText}
                                                </Tooltip>
                                            }
                                        >
                                            <span className={'tooltipButton'}>?</span>
                                        </OverlayTrigger>
                                        :
                                        null
                                    }
                                </div>
                                <Form.Check
                                    type="checkbox"
                                />
                            </div>
                            <div className={'contentSliderCheckboxesInfo'}>
                                <p>{checkboxLabel} - {checkboxPrice}&#8364;
                                </p>
                            </div>

                        </label>
                    </div>
                    <Button
                        className={'nextPageButton'}
                        onClick={() => handleCheckboxAdding()}
                    >
                        Add checkbox
                    </Button>
                </div>
                <div id={'newProductCheckboxesFinalPreviewContainer'}>
                    <div id={'newProductCheckboxesFinalPreviewCheckboxesListContainer'}>
                        {checkboxesFinalPreviewList()}
                    </div>
                        <div id={'newProductCheckboxesFinalPreviewSelectContainer'}>
                            <Form>
                                <Form.Select
                                    ref={checkboxRef}
                                >
                                    {checkboxesList()}
                                </Form.Select>
                            </Form>
                            <Button
                                className={'nextPageButton'}
                                onClick={() => handleCheckboxDeleting()}
                            >
                                Delete checkbox
                            </Button>
                        </div>
                </div>
            </div>
        </div>
    )
};

export default NewProductCheckboxes;