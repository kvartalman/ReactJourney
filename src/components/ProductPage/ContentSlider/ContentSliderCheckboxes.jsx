import {useSelector} from "react-redux";
import React, {useState} from "react";
import Form from "react-bootstrap/Form";

const ContentSliderCheckboxes = (props) => {

    const productPage = useSelector(
        state => state.productPage.productData[props.game][props.product].checkboxes
    )

    const [checkboxesState, setCheckboxesState] = useState(new Array(productPage.length).fill(false));

    // Function that change total price when checkbox checked/not checked

    const handleCheckboxChange = (index) => {
        const checkboxStateCopy = [...checkboxesState];
        checkboxStateCopy[index] = !checkboxStateCopy[index];
        const priceChange = productPage[index].price * (checkboxStateCopy[index] ? 1 : -1);
        setCheckboxesState(checkboxStateCopy);
        props.setPrice((prevPrice) => priceChange + prevPrice);
    }

    const checkBoxes = productPage.map((checkbox, index) => {
        return (
            <label key={index}>
                <Form.Check
                    type="checkbox"
                    onChange={() => {handleCheckboxChange(index)}}

                />
                <div>
                    <div>
                        <p>{checkbox.label}</p>
                    </div>
                    <div>
                        <p>{checkbox.price}&#8364;</p>
                    </div>
                </div>
            </label>
        )
    })

    return (
        <div>
            {checkBoxes}
        </div>
    );
}

export default ContentSliderCheckboxes;