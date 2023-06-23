import {useSelector} from "react-redux";
import React from "react";
import './CheckBox.css'
import Form from "react-bootstrap/Form";

const CheckBoxes = (props) => {

    const productPage = useSelector(
        state => state.productPage.productData[props.game][props.product].checkboxes
    )
    const checkBoxes = productPage.map((checkbox) => {
        return (
            <label className={'productCheckboxLabel'}>
                <Form.Check
                    type="checkbox"
                />
                <div className={'productCheckboxText'}>
                    <div className={'productCheckboxName'}>
                        <p>{checkbox.label}</p>
                    </div>
                    <div className={'productCheckboxPrice'}>
                        <p>Цена</p>
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