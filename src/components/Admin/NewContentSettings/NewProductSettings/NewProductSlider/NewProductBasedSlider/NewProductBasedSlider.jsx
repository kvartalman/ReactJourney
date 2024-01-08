import React, {useState} from "react";
import './NewProductBasedSlider.css';
import Form from "react-bootstrap/Form";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

const NewProductBasedSlider = (props) => {

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [basedSliderPrice, setBasedSliderPrice] = useState(0);
    const [multiplier, setMultiplier] = useState(0);

    const minInput = (e) => {
        if (!isNaN(e.target.value)) {
            setMin(Number(e.target.value));
        }
    }

    const maxInput = (e) => {
        if (!isNaN(e.target.value)) {
            setMax(Number(e.target.value));
        }
    }

    const multInput = (e) => {
        setMultiplier(e.target.value);

    }

    const handleBasedSliderChange = (value) => {
        setBasedSliderPrice(value)
    }

    return (
        <div id={'newProductBasedSliderMainContainer'}>
            <div id={'basedSliderSettingsFormsContainer'}>
                <div>
                    <Form>
                        <Form.Label>
                            Минимальное значение
                        </Form.Label>
                        <Form.Control
                            value={min}
                            onChange={minInput}
                            placeholder={'Введите минимальное значение...'}
                        />
                        <Form.Label>
                            Максимальное значение
                        </Form.Label>
                        <Form.Control
                            value={max}
                            onChange={maxInput}
                            placeholder={'Введите максимальное значение...'}
                        />
                        <Form.Label>
                            Стоимость шага
                        </Form.Label>
                        <Form.Control
                            value={multiplier}
                            onChange={multInput}
                            placeholder={'Enter multiplier...'}
                        />
                    </Form>
                </div>
            </div>
            <div id={'basedSliderSettingsPreviewContainer'}>
                <h2>Превью</h2>
                <div>
                    <Slider
                        value={basedSliderPrice}
                        min={
                            min
                        }
                        max={
                            max
                        }
                        onChange={handleBasedSliderChange}
                    />
                </div>
                <div id={'basedSliderSettingsPreviewPriceContainer'}>
                    {Number(props.price) + Number((basedSliderPrice * Number(multiplier)).toFixed(1))}
                </div>
            </div>
        </div>
    );
};

export default NewProductBasedSlider;