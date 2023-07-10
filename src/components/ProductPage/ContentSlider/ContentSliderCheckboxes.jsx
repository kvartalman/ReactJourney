import {useSelector} from "react-redux";
import React, {useState} from "react";
import Form from "react-bootstrap/Form";

const ContentSliderCheckboxes = (props) => {

    const productPage = useSelector(
        state => state.productPage.productData[props.game][props.product].checkboxes
    )

    // Here we get an array of checkboxes in 'false' state. It means they are not checked

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
            <label key={index} className={'contentSliderCheckboxContainer'}>
                <Form.Check
                    type="checkbox"
                    onChange={() => {
                        handleCheckboxChange(index)
                    }}

                />
                <div className={'contentSliderCheckboxesInfo'}>
                    <p>{checkbox.label} - {checkbox.price}&#8364;</p>
                </div>
            </label>
        )
    })

    return (
            <div className={'contentSliderCheckboxesContainer'}>
                {checkBoxes}
            </div>
    );
}

export default ContentSliderCheckboxes;