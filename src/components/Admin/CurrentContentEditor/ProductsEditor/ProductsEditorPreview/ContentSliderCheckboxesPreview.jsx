import {useSelector} from "react-redux";
import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import '../../../../ProductPage/ContentSlider/ContentSlider.css';
import Container from "react-bootstrap/Container";

const ContentSliderCheckboxesPreview = (props) => {

    const checkboxesSelector = useSelector(
        state => state.adminPanel.checkboxesEditor
    )

    // Here we get an array of checkboxes in 'false' state. It means they are not checked

    const [checkboxesState, setCheckboxesState] = useState(new Array(checkboxesSelector.length).fill(false));

    // Function that change total price when checkbox checked/not checked

    const handleCheckboxChange = (index) => {
        const checkboxStateCopy = [...checkboxesState];
        checkboxStateCopy[index] = !checkboxStateCopy[index];
        const priceChange = checkboxesSelector[index].price * (checkboxStateCopy[index] ? 1 : -1);
        setCheckboxesState(checkboxStateCopy);
        props.setPrice((prevPrice) => priceChange + prevPrice);
    }

    const checkBoxes = checkboxesSelector.map((checkbox, index) => {
        return (
            <label key={index} className={'labelSliderCheckboxesContainer'}>
                <div className={'checkboxTooltipContainer'}>
                    <Form.Check
                        type="checkbox"
                        onChange={() => {
                            handleCheckboxChange(index)
                        }}

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

    return (
        <Container fluid id={'contentSliderCheckboxesContainer'}>
            <Row xs={2} md={3} lg={5} id={'contentSliderCheckboxesRow'}>
                {checkBoxes}
            </Row>
        </Container>
    );
}

export default ContentSliderCheckboxesPreview;