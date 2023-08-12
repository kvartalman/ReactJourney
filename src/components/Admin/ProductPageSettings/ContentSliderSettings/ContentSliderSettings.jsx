import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import MultiRangeSlider from "multi-range-slider-react";
import '../../../ProductPage/ContentSlider/ContentSlider.css';
import './ContentSliderSettings.css'
import {useDispatch, useSelector} from "react-redux";
import {addContentSliderRange, deleteContentSliderRange} from "../../../../store/slices/adminPanelSlice";
import Table from 'react-bootstrap/Table';

const ContentSliderSettings = () => {

    const sliderRangesData = useSelector(state => state.adminPanel.contentSliderEditorRanges)
    const dispatch = useDispatch();

    const [enterMinValue, setEnterMinValue] = useState('');
    const [enterMaxValue, setEnterMaxValue] = useState('');
    const [enterLeftThumbValue, setEnterLeftThumbValue] = useState('');
    const [enterRightThumbValue, setEnterRightThumbValue] = useState('');
    const [enterStep, setEnterStep] = useState('');
    const [enterStartOfRange, setEnterStartOfRange] = useState('');
    const [enterEndOfRange, setEnterEndOfRange] = useState('');
    const [enterValuePerStep, setEnterValuePerStep] = useState('');

    const [finalPrice, setFinalPrice] = useState(0);
    const [minValue, setMinValue] = useState(25);
    const [maxValue, setMaxValue] = useState(75);
    const rangeAdditions = [
        {range: [0, 10], addition: 0.2},
        {range: [10, 20], addition: 0.4},
        {range: [20, 30], addition: 0.6},
        {range: [30, 40], addition: 0.8},
        {range: [40, 100], addition: 1}
    ]

    const enterMinValueInput = (e) => {
        setEnterMinValue(e.target.value)
    }
    const enterMaxValueInput = (e) => {
        setEnterMaxValue(e.target.value)
    }
    const enterLeftThumbValueInput = (e) => {
        setEnterLeftThumbValue(e.target.value)
    }
    const enterRightThumbValueInput = (e) => {
        setEnterRightThumbValue(e.target.value)
    }
    const enterStepInput = (e) => {
        setEnterStep(e.target.value)
    }
    const enterStartOfRangeInput = (e) => {
        setEnterStartOfRange(e.target.value)
    }
    const enterEndOfRangeInput = (e) => {
        setEnterEndOfRange(e.target.value)
    }
    const enterValuePerStepInput = (e) => {
        setEnterValuePerStep(e.target.value)
    }

    const addRangeHandler = () => {
        dispatch(addContentSliderRange({
                enterStartOfRange: Number(enterStartOfRange),
                enterEndOfRange: Number(enterEndOfRange),
                enterValuePerStep: Number(enterValuePerStep)
            })
        )
        setEnterStartOfRange('');
        setEnterEndOfRange('');
        setEnterValuePerStep('');
        debugger;
    }

    const deleteRangeHandler = index => {
        dispatch(deleteContentSliderRange(index))
    }

    const handleChange = (e) => {

        setMinValue(e.minValue)
        setMaxValue(e.maxValue)

        let calculatedPrice = 0;

        for (let level = minValue; level < maxValue; level++) {
            const matchingRange = sliderRangesData.find(
                rangeEntry =>
                    level >= rangeEntry.range[0] && level < rangeEntry.range[1]
            );
            if (matchingRange) {
                calculatedPrice += matchingRange.addition;
            }
        }

        setFinalPrice(calculatedPrice);
    };


    return (
        <Container fluid>
            <Row id={'contentSliderSettingsRow'}>
                <Col>
                    <Form>
                        <Row className="mb-3 formsRow">
                            <h2>ProductPage ContentSlider Editor</h2>
                            <Form.Group as={Col}>
                                <Form.Label>Choose min and max values of slider</Form.Label>
                                <Form.Control
                                    value={enterMinValue}
                                    onChange={enterMinValueInput}
                                    placeholder="Enter min value"
                                />
                                <Form.Control
                                    value={enterMaxValue}
                                    onChange={enterMaxValueInput}
                                    placeholder="Enter max value"
                                />
                                <Form.Label>Choose start position of slider</Form.Label>
                                <Form.Control
                                    value={enterLeftThumbValue}
                                    onChange={enterLeftThumbValueInput}
                                    placeholder="Enter left thumb value"
                                />
                                <Form.Control
                                    value={enterRightThumbValue}
                                    onChange={enterRightThumbValueInput}
                                    placeholder="Enter right thumb value"
                                />
                                <Form.Label>Choose step (default is 1)</Form.Label>
                                <Form.Control
                                    value={enterStep}
                                    onChange={enterStepInput}
                                    placeholder="Enter step"
                                />
                                <Form.Label>Choose value per step and range</Form.Label>
                                <Form.Control
                                    value={enterStartOfRange}
                                    onChange={enterStartOfRangeInput}
                                    placeholder="Enter start of range"
                                />
                                <Form.Control
                                    value={enterEndOfRange}
                                    onChange={enterEndOfRangeInput}
                                    placeholder="Enter end of range"
                                />
                                <Form.Control
                                    value={enterValuePerStep}
                                    onChange={enterValuePerStepInput}
                                    placeholder="Enter value per step"
                                />
                                <Button onClick={addRangeHandler} variant="primary">
                                    Add range
                                </Button>
                                <Table striped bordered hover id={'contentSliderSettingsTable'}>
                                    <thead>
                                    <tr>
                                        <th>Min Value</th>
                                        <th>Max Value</th>
                                        <th>Increase per Step</th>
                                        <th>Delete Button</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {sliderRangesData.map((range, index) => (
                                        <tr key={index}>
                                            <td>{range.range[0]}</td>
                                            <td>{range.range[1]}</td>
                                            <td>{range.addition}</td>
                                            <td><button onClick={() => deleteRangeHandler(index)}>Delete!</button></td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </Form.Group>

                            <div className={'addCardButtons'}>
                                <Button variant="primary">
                                    Create slider
                                </Button>
                            </div>
                        </Row>
                    </Form>
                </Col>
                <Col>
                    <div className={'sliderValuesContainer'}>
                        <div className={'sliderMinValueContainer'}>
                            {minValue}
                        </div>
                        <div className={'sliderMaxValueContainer'}>
                            {maxValue}
                        </div>
                    </div>
                    <MultiRangeSlider
                        min={enterMinValue ? enterMinValue : 0}
                        max={enterMaxValue ? enterMaxValue : 100}
                        step={enterStep ? enterStep : 1}
                        minValue={
                        enterLeftThumbValue && enterLeftThumbValue < maxValue ?
                            enterLeftThumbValue : 0
                    }
                        maxValue={
                        enterRightThumbValue && enterRightThumbValue > minValue
                            ?
                            enterRightThumbValue : 100
                    }
                        ruler={false}
                        onInput={(e) => {
                            handleChange(e)
                        }}
                    />
                    {finalPrice}
                </Col>
            </Row>
        </Container>
    );
}

export default ContentSliderSettings

