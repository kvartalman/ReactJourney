import React, {useState} from "react";
import './NewProductBasedSlider.css';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Slider from "rc-slider";

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
        <Container fluid>
            <div id={'basedSliderSettingsMainContainer'}>
                <div id={'basedSliderSettingsFormsContainer'}>
                    <Form>
                        <Form.Label>
                            Min value
                        </Form.Label>
                        <Form.Control
                            value={min}
                            onChange={minInput}
                            placeholder={'Enter min value...'}
                        />
                        <Form.Label>
                            Max value
                        </Form.Label>
                        <Form.Control
                            value={max}
                            onChange={maxInput}
                            placeholder={'Enter max value...'}
                        />
                        <Form.Label>
                            Multiplier (value per step)
                        </Form.Label>
                        <Form.Control
                            value={multiplier}
                            onChange={multInput}
                            placeholder={'Enter multiplier...'}
                        />
                    </Form>
                </div>
                <div id={'basedSliderSettingsPreviewContainer'}>
                    <h2>Slider preview</h2>
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
        </Container>
    );
};

export default NewProductBasedSlider;