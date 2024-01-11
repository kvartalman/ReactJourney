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
        <div id={'sliderEditorMainContainer'}>
            <div id={'sliderEditorFormsContainer'}>
                <h2>Настрой слайдер</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Выбери макс. и мин. значения слайдера</Form.Label>
                        <Form.Control
                            value={enterMinValue}
                            onChange={enterMinValueInput}
                            placeholder="Введите минимальное значение..."
                        />
                        <Form.Control
                            value={enterMaxValue}
                            onChange={enterMaxValueInput}
                            placeholder="Введите максимальное значение..."
                        />
                        <Form.Label>Укажи стоимость шага</Form.Label>
                        <Form.Control
                            value={enterMultiplier}
                            onChange={enterMultiplierInput}
                            placeholder="Введите стоимость шага..."
                        />
                    </Form.Group>
                </Form>
            </div>
            <div id={'sliderEditorSliderPreviewMainContainer'}>
                <div className={'sliderEditorCurrentSliderPreviewContainer'}>
                    <h2>Текущий слайдер</h2>
                    {/* Slider with current settings */}
                    <div>
                        <Slider
                            value={currentSliderPrice}
                            min={
                                props.product.slider.min
                            }
                            max={
                                props.product.slider.max
                            }
                            onChange={handleCurrentSliderChange}
                        />
                    </div>
                    <div>
                        {Number(props.price) +
                            Number((
                                currentSliderPrice * props.product.slider.multiplier).toFixed(1))
                        }
                    </div>
                </div>
                <div className={'sliderEditorNewSliderPreviewContainer'}>
                    <h2>Новый слайдер</h2>
                    {/* Slider with settings which you're choosing at the moment */}
                    <div>
                        <Slider
                            value={newSliderPrice}
                            min={
                                enterMinValue ? Number(enterMinValue)
                                    : props.product.slider.min
                            }
                            max={
                                enterMaxValue ? Number(enterMaxValue)
                                    : props.product.slider.max
                            }
                            onChange={handleNewSliderChange}
                        />
                    </div>
                    <div>
                        {Number(props.price) +
                            Number((
                                newSliderPrice * (enterMultiplier || props.product.slider.multiplier)).toFixed(1))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderEditor;

