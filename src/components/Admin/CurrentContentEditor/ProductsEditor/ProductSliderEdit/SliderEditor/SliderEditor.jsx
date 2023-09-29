import React, {useState} from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import Slider from "rc-slider";
import './SliderEditor.css';

const SliderEditor = (props) => {

    const [enterMinValue, setEnterMinValue] = useState('');
    const [enterMaxValue, setEnterMaxValue] = useState('');
    const [enterMultiplier, setEnterMultiplier] = useState('');
    const [currentSliderPrice, setCurrentSliderPrice] = useState(0);
    const [newSliderPrice, setNewSliderPrice] = useState(0);

    const enterMinValueInput = (e) => {
        setEnterMinValue(e.target.value);
        props.setSliderMin(e.target.value);
    }

    const enterMaxValueInput = (e) => {
        setEnterMaxValue(e.target.value);
        props.setSliderMax(e.target.value);
    }

    const enterMultiplierInput = (e) => {
        setEnterMultiplier(e.target.value);
        props.setSliderMultiplier(e.target.value)
    }

    const handleCurrentSliderChange = (value) => {
        setCurrentSliderPrice(value)
    }

    const handleNewSliderChange = (value) => {
        setNewSliderPrice(value)
    }

    return (
        <Container fluid>
            <Row id={'sliderSettingsRow'}>
                <Col>
                    <Form>
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
                            <Form.Label>Choose value per step</Form.Label>
                            <Form.Control
                                value={enterMultiplier}
                                onChange={enterMultiplierInput}
                                placeholder="Enter value per step"
                            />
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <div className={'sliderContainer'}>
                        <h2>Current slider</h2>
                        {/* Slider with current settings */}
                        <Slider
                            value={currentSliderPrice}
                            min={
                                props.gameSelector[props.game].products[props.product].slider.min
                            }
                            max={
                                props.gameSelector[props.game].products[props.product].slider.max
                            }
                            onChange={handleCurrentSliderChange}
                        />
                    </div>
                    <div>
                        {Number(props.price) +
                            Number((
                                currentSliderPrice * props.gameSelector[props.game].products
                                    [props.product].slider.multiplier).toFixed(1))
                        }
                    </div>
                    <div className={'sliderContainer'}>
                        <h2>New slider</h2>
                        {/* Slider with settings which you're choosing at the moment */}
                        <Slider
                            value={newSliderPrice}
                            min={
                                enterMinValue ? Number(enterMinValue)
                                    : props.gameSelector[props.game].products[props.product].slider.min
                            }
                            max={
                                enterMaxValue ? Number(enterMaxValue)
                                    : props.gameSelector[props.game].products[props.product].slider.max
                            }
                            onChange={handleNewSliderChange}
                        />
                    </div>
                    <div>
                        {Number(props.price) +
                            Number((
                                newSliderPrice * (enterMultiplier || props.gameSelector[props.game].products
                                    [props.product].slider.multiplier)).toFixed(1))
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SliderEditor;

