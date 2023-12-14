import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const CheckboxesPreview = (props) => {

    const handleCheckboxChange = (index) => {
        const checkboxStateCopy = [...props.checkboxesChecker];
        checkboxStateCopy[index] = !checkboxStateCopy[index];
        const priceChange = props.checkboxesState[index].price * (checkboxStateCopy[index] ? 1 : -1);
        props.setCheckboxesChecker(checkboxStateCopy);
        props.setPrice((prevPrice) => priceChange + prevPrice);
    }

    const checkBoxes = props.checkboxesState.map((checkbox, index) => {
        return (
            <>
                <div className={'productCheckboxesContainer'}>
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
                <label className={'productCheckboxLabel'} key={index}>
                    <Form.Check
                        type="checkbox"
                        onChange={() => {
                            handleCheckboxChange(index)
                        }}
                    />
                    <div className={'productCheckboxText'}>
                        <div className={'productCheckboxName'}>
                            <p>{checkbox.label}</p>
                        </div>
                        <div className={'productCheckboxPrice'}>
                            <p>{checkbox.price}&#8364;</p>
                        </div>
                    </div>
                </label>
            </>
        )
    })

    useEffect(() => {


    }, [props.checkboxesState, props.checkboxesChecker]);

    return (
        <div className={'checkBoxes'}>
            {checkBoxes}
        </div>
    );
}

export default CheckboxesPreview;