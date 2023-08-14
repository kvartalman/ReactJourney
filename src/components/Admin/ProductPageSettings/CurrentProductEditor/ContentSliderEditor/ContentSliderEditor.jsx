import React, {useEffect, useState} from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {useDispatch, useSelector} from "react-redux";
import {
    addContentSliderRange,
    deleteContentSliderRange,
    fillContentSliderEditorRanges
} from "../../../../../store/slices/adminPanelSlice";
import Container from "react-bootstrap/Container";
import MultiRangeSlider from "multi-range-slider-react";

const ContentSliderEditor = () => {


    const gameSelector = useSelector(state => state.productPage.productData)
    const sliderRangesData = useSelector(state => state.adminPanel.contentSliderEditorRanges)
    const dispatch = useDispatch();

    const [selectedGame, setSelectedGame] = useState(Object.keys(gameSelector)[0]);

    const [enterMinValue, setEnterMinValue] = useState('');
    const [enterMaxValue, setEnterMaxValue] = useState('');
    const [enterLeftThumbValue, setEnterLeftThumbValue] = useState('');
    const [enterRightThumbValue, setEnterRightThumbValue] = useState('');
    const [enterStep, setEnterStep] = useState('');
    const [enterStartOfRange, setEnterStartOfRange] = useState('');
    const [enterEndOfRange, setEnterEndOfRange] = useState('');
    const [enterValuePerStep, setEnterValuePerStep] = useState('');

    const [editorFinalPrice, setEditorFinalPrice] = useState(0);

    // We choose first product which have Content Slider
    const [product, setProduct] = useState(Object.keys(gameSelector[selectedGame]).filter
    (key => gameSelector[selectedGame][key].viewSettings === false)[0]);

    // We use arrow function here because we need to calculate currentFinalPrice on first render to provide better UI/UX
    const [currentFinalPrice, setCurrentFinalPrice] = useState(
        gameSelector[selectedGame][product].sliderRangesValues.map(elem => {
            let calculatedPrice = 0;
            for (let level = elem.range[0]; level < elem.range[1]; level++) {
                const matchingRange = elem.range.find(
                    rangeEntry =>
                        level >= gameSelector[selectedGame][product].sliderSettings.minValue &&
                        level < gameSelector[selectedGame][product].sliderSettings.maxValue
                );
                if (matchingRange) {
                    calculatedPrice += elem.value;
                }
            }
            return calculatedPrice
        }).reduce((sum, elem) => sum + elem, 0)
    );

    const handleProductSelect = (e) => {
        setProduct(e.target.value);
        
    }

    const handleGameSelect = (e) => {
        setSelectedGame(e.target.value)
    }

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

    // Adding new range with value per step to slider
    const addRangeHandler = () => {
        dispatch(addContentSliderRange({
                enterStartOfRange: Number(enterStartOfRange),
                enterEndOfRange: Number(enterEndOfRange),
                enterValuePerStep: Number(enterValuePerStep),
                type: 'editor'
            })
        )
        setEnterStartOfRange('');
        setEnterEndOfRange('');
        setEnterValuePerStep('');
    }

    const deleteRangeHandler = index => {
        dispatch(deleteContentSliderRange({
            index,
            type: 'editor'
        }))
    }

    const handleChange = (e, isCurrent) => {
        let calculatedPrice = 0;

        for (let level = e.minValue; level < e.maxValue; level++) {
            const matchingRange = (isCurrent ? gameSelector[selectedGame][product].sliderRangesValues : sliderRangesData).filter(
                rangeEntry =>
                    level >= rangeEntry.range[0] && level < rangeEntry.range[1]
            );
            if (matchingRange.length > 0) {
                calculatedPrice += matchingRange.reduce((sum, rangeEntry) => sum + rangeEntry.value, 0);
            }
        }

        isCurrent ?
            setCurrentFinalPrice(calculatedPrice)
            :
            setEditorFinalPrice(calculatedPrice)
        debugger;
    }


    const gamesList = Object.keys(gameSelector).map(game => (
        <option>{game}</option>
    ))

    const productsList = Object.keys(gameSelector[selectedGame]).map(product => (
        !gameSelector[selectedGame][product].viewSettings ?
            <option>{product}</option>
            :
            null
    ))

    useEffect(() => {
        dispatch(fillContentSliderEditorRanges(gameSelector[selectedGame][product].sliderRangesValues))
    }, [dispatch, gameSelector, product, selectedGame])
    
    useEffect(() => {
        handleChange(
            {
                minValue: gameSelector[selectedGame][product].sliderSettings.minValue,
                maxValue: gameSelector[selectedGame][product].sliderSettings.maxValue
            },
            true
        )
    }, [product])
    
    return (
        <Container fluid>
            <Row id={'contentSliderSettingsRow'}>
                <Col>
                    <Form>
                        <Row className="mb-3 formsRow">
                            <h2>ProductPage ContentSlider Editor</h2>
                            <Form.Group as={Col}>
                                <Form.Label>Choose game</Form.Label>
                                <Form.Select onChange={handleGameSelect}>
                                    {gamesList}
                                </Form.Select>
                                <Form.Label>Choose product which contains "Content Slider"</Form.Label>
                                <Form.Select onChange={handleProductSelect}>
                                    {selectedGame ? productsList : null}
                                </Form.Select>
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
                                            <td>{range.value}</td>
                                            <td>
                                                <button onClick={() => deleteRangeHandler(index)}>Delete!</button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </Form.Group>
                            <div className={'addCardButtons'}>
                                <Button variant="primary">
                                    Accept Changes
                                </Button>
                            </div>
                        </Row>
                    </Form>
                </Col>
                <Col>
                    <div>
                        <h2>Current Slider</h2>
                        <MultiRangeSlider
                            min={gameSelector[selectedGame][product].sliderSettings.min}
                            max={gameSelector[selectedGame][product].sliderSettings.max}
                            step={gameSelector[selectedGame][product].sliderSettings.step}
                            minValue={gameSelector[selectedGame][product].sliderSettings.minValue}
                            maxValue={gameSelector[selectedGame][product].sliderSettings.maxValue}
                            ruler={false}
                            onInput={(e) => {
                                handleChange(e, true)
                            }}
                        />
                        {currentFinalPrice}
                    </div>
                    <div>
                        <h2>New Slider</h2>
                        <MultiRangeSlider
                            min={gameSelector[selectedGame][product].sliderSettings.min}
                            max={gameSelector[selectedGame][product].sliderSettings.max}
                            step={gameSelector[selectedGame][product].sliderSettings.step}
                            minValue={gameSelector[selectedGame][product].sliderSettings.minValue}
                            maxValue={gameSelector[selectedGame][product].sliderSettings.maxValue}
                            ruler={false}
                            onInput={(e) => {
                                handleChange(e, false)
                            }}
                        />
                        {editorFinalPrice}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ContentSliderEditor;