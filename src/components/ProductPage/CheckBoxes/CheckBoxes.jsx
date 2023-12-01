import {useSelector} from "react-redux";
import React, {useState} from "react";
import './CheckBox.css'
import Form from "react-bootstrap/Form";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const CheckBoxes = (props) => {

    // Here we get an array of checkboxes in 'false' state. It means they are not checked

    const [checkboxesState, setCheckboxesState] = useState(new Array(props.checkboxesData.length).fill(false));

    // Function that change total price when checkbox checked/not checked

    const handleCheckboxChange = (index) => {
        const checkboxStateCopy = [...checkboxesState];
        checkboxStateCopy[index] = !checkboxStateCopy[index];
        const priceChange = props.checkboxesData[index].price * (checkboxStateCopy[index] ? 1 : -1);
        setCheckboxesState(checkboxStateCopy);
        props.setPrice((prevPrice) => priceChange + prevPrice);
    }

    const checkBoxes = props.checkboxesData.map((checkbox, index) => {
        return (
            <label className={'productCheckboxLabel'} key={index}>
                <Form.Check
                    type="checkbox"
                    onChange={() => {handleCheckboxChange(index)}}

                />
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
                <div className={'productCheckboxText'}>
                    <div className={'productCheckboxName'}>
                        <p>{checkbox.label}</p>
                    </div>
                    <div className={'productCheckboxPrice'}>
                        <p>{checkbox.price}&#8364;</p>
                    </div>
                </div>
            </label>
        )
    })

    return (
        <div className={'checkBoxes'}>
            {checkBoxes}
        </div>
    );
}

export default CheckBoxes;