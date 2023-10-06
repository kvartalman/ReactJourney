import React, {useState} from "react";
import {useSelector} from "react-redux";
import Form from "react-bootstrap/Form";

const CheckboxesPreview = (props) => {

    const checkboxesEditor = useSelector(
        state => (state.adminPanel.checkboxesEditor)
    )

    // Here we get an array of checkboxes in 'false' state. It means they are not checked

    const [checkboxesState, setCheckboxesState] = useState(new Array(checkboxesEditor.length).fill(false));

    // Function that change total price when checkbox checked/not checked

    const handleCheckboxChange = (index) => {
        const checkboxStateCopy = [...checkboxesState];
        checkboxStateCopy[index] = !checkboxStateCopy[index];
        const priceChange = checkboxesEditor[index].price * (checkboxStateCopy[index] ? 1 : -1);
        setCheckboxesState(checkboxStateCopy);
        props.setPrice((prevPrice) => priceChange + prevPrice);
    }

    const checkBoxes = checkboxesEditor.map((checkbox, index) => {
        return (
            <label className={'productCheckboxLabel'} key={index}>
                <Form.Check
                    type="checkbox"
                    onChange={() => {handleCheckboxChange(index)}}

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
        )
    })

    return (
        <div className={'checkBoxes'}>
            {checkBoxes}
        </div>
    );
}

export default CheckboxesPreview;