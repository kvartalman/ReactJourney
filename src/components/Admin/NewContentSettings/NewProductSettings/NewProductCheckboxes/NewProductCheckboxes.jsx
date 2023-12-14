import React, {useState} from "react";
import './NewProductCheckboxes.css';
import Form from "react-bootstrap/Form";
import {useSelector} from "react-redux";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const NewProductCheckboxes = () => {

    const newCheckboxesArraySelector = useSelector(state => state.adminPanelNewProduct.newCheckboxesArray);

    const [checkboxPrice, setCheckboxPrice] = useState(0);
    const [checkboxLabel, setCheckboxLabel] = useState('');
    const [checkboxTooltipText, setCheckboxTooltipText] = useState('');
    const [tooltip, setTooltip] = useState(false);

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
                                <Form.Check
                                    type="checkbox"
                                />
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
                            </div>
                            <div className={'contentSliderCheckboxesInfo'}>
                                <p>{checkboxLabel} - {checkboxPrice}&#8364;
                                </p>
                            </div>

                        </label>
                    </div>
                </div>
            </div>
            <div id={'newProductCheckboxesFinalPreviewContainer'}>

            </div>
        </div>
    )
};

export default NewProductCheckboxes;