import React, {useEffect, useState} from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {useDispatch, useSelector} from "react-redux";
import '../../../../../ProductPage/ContentSlider/ContentSlider.css';
import {
    addContentSliderRange,
    deleteContentSliderRange,
    fillContentSliderEditorRanges
} from "../../../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import Container from "react-bootstrap/Container";
import MultiRangeSlider from "multi-range-slider-react";
import './ContentSliderEditor.css'
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const ContentSliderEditor = (props) => {

    const sliderRangesData = useSelector(state => state.adminPanel.contentSliderEditorRanges);
    const dispatch = useDispatch();

    const [enterMinValue, setEnterMinValue] = useState('');
    const [enterMaxValue, setEnterMaxValue] = useState('');
    const [enterLeftThumbValue, setEnterLeftThumbValue] = useState('');
    const [enterRightThumbValue, setEnterRightThumbValue] = useState('');
    const [enterStep, setEnterStep] = useState('');
    const [enterStartOfRange, setEnterStartOfRange] = useState('');
    const [enterEndOfRange, setEnterEndOfRange] = useState('');
    const [enterValuePerStep, setEnterValuePerStep] = useState('');
    const [editorFinalPrice, setEditorFinalPrice] = useState(0);
    const [adviceShow, setAdviceShow] = useState(false);

    const handleAdviceShow = () => {
        setAdviceShow(!adviceShow);
    }

    // We use 2 sliders, so we need to have 4 states (min and max per each slider)
    const [currentMinValue, setCurrentMinValue] = useState(
        props.product.sliderSettings.minValue
    );
    const [currentMaxValue, setCurrentMaxValue] = useState(
        props.product.sliderSettings.maxValue
    );
    const [editorMinValue, setEditorMinValue] = useState(
        props.product.sliderSettings.minValue
    );
    const [editorMaxValue, setEditorMaxValue] = useState(
        props.product.sliderSettings.maxValue
    );

    // We use arrow function here because we need to calculate currentFinalPrice on first render to provide better UI/UX
    const [currentFinalPrice, setCurrentFinalPrice] = useState(
        props.product.sliderRangesValues.map(elem => {
            let calculatedPrice = 0;
            for (let level = elem.range[0]; level < elem.range[1]; level++) {
                const matchingRange = elem.range.find(
                    () =>
                        level >= props.product.sliderSettings.minValue &&
                        level < props.product.sliderSettings.maxValue
                );
                if (matchingRange) {
                    calculatedPrice += elem.value;
                }
            }
            return calculatedPrice
        }).reduce((sum, elem) => sum + elem, 0)
    );

    const enterMinValueInput = (e) => {
        setEnterMinValue(e.target.value);
        props.setContentSliderMinValue(e.target.value);
    }
    const enterMaxValueInput = (e) => {
        setEnterMaxValue(e.target.value);
        props.setContentSliderMaxValue(e.target.value);
    }
    const enterLeftThumbValueInput = (e) => {
        setEnterLeftThumbValue(e.target.value);
        props.setContentSliderLeftThumb(e.target.value);
    }
    const enterRightThumbValueInput = (e) => {
        setEnterRightThumbValue(e.target.value);
        props.setContentSliderRightThumb(e.target.value);
    }
    const enterStepInput = (e) => {
        setEnterStep(e.target.value);
        props.setContentSliderStep(e.target.value);
    }
    const enterStartOfRangeInput = (e) => {
        setEnterStartOfRange(e.target.value);
    }
    const enterEndOfRangeInput = (e) => {
        setEnterEndOfRange(e.target.value);
    }
    const enterValuePerStepInput = (e) => {
        setEnterValuePerStep(e.target.value);
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

    // We check if we work with CurrentSlider or EditorSlider by using boolean isCurrent
    const handleChange = (e, isCurrent) => {
        let calculatedPrice = 0;

        if (isCurrent) {
            setCurrentMinValue(e.minValue)
            setCurrentMaxValue(e.maxValue)
        } else {
            setEditorMinValue(e.minValue)
            setEditorMaxValue(e.maxValue)
        }

        // We filter all elements (objects) of array sliderRangesValues that satisfy the condition and concatenate them
        // by using 'value' key as value per each correct element of 'range' array in each correct object
        for (let level = e.minValue; level < e.maxValue; level++) {
            const matchingRange = (isCurrent ? props.product.sliderRangesValues : sliderRangesData).filter(
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
    }

    const handleContentSliderEditorRangesFilling = () => {
        dispatch(fillContentSliderEditorRanges(props.product.sliderRangesValues))
    }

    const sliderRangesList = () => {
        if (sliderRangesData.length > 0) {
            return (
                sliderRangesData.map((range, index) => (
                    <tr key={index}>
                        <td>{range.range[0]}</td>
                        <td>{range.range[1]}</td>
                        <td>{range.value}</td>
                        <td>
                            <button onClick={() => deleteRangeHandler(index)}>Delete!</button>
                        </td>
                    </tr>
                ))
            )
        }
    }


    useEffect(() => {
        handleContentSliderEditorRangesFilling();
    }, []);

    // currentFinalPrice will re-render when user change name of product in list
    useEffect(() => {
        handleChange(
            {
                minValue: props.product.sliderSettings.minValue,
                maxValue: props.product.sliderSettings.maxValue
            },
            true
        )
    }, [dispatch, props.product, props.game])

    return (
        <div id={'contentSliderEditorMainContainer'}>
            <div id={'contentSliderEditorSettingsMainContainer'}>
                <div id={'contentSliderEditorFormsContainer'}>
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
                        </Form.Group>
                    </Form>
                </div>
                <div id={'contentSliderEditorTableAdviceMainContainer'}>
                    <button
                        onClick={() => handleAdviceShow()}
                        id={'contentSliderEditorAdviceButton'}
                    >
                        {adviceShow ? 'Спрятать' : 'Советы по заполнению таблицы'}
                    </button>
                    <div id={'contentSliderEditorTableAdviceContainer'}
                         className={adviceShow ? 'showAdvice' : ''}
                    >
                        <h3>
                            Как добавлять диапазоны значений?
                        </h3>
                        <p>
                            Чтобы сделать нормально работающий слайдер со значениями нужно соблюдать несколько правил:
                        </p>
                        <p>1) Диапазоны значений не должны накладываться друг на друга (Например, не делать два
                            диапазона
                            со значениями 0-10 и 5-15.
                        </p>
                        <p>
                            2) Знать, как идет расчет значений в диапазонах: возьмем пример из двух диапазонов, где
                            0-10 будет прибавляться 2, а от 10-20 будет прибавляться 4. В шаге с 9 до 10 прибавится 2,
                            а уже в шаге с 10 до 11 уже прибавится 4. Таким образом, если ты хочешь, чтобы, например с
                            20
                            шага и до 40 начиналось прибавляться 4.5 за шаг, то ставь стартовое значение 20, конечное
                            40,
                            а шаг 4.5 и всё будет работать корректно.
                        </p>
                        <p>
                            3) Убедись, что всё работает, ОБЯЗАТЕЛЬНО подвигав слайдер и оценив итоговую сумму под
                            слайдером!
                        </p>
                    </div>
                </div>
                <div id={'contentSliderEditorTableContainer'}>
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
                        {sliderRangesList()}
                        </tbody>
                    </Table>
                </div>
            </div>
            <div id={'contentSliderEditorSlidersContainer'}>
                <div id={'contentSliderEditorCurrentSliderContainer'}>
                    <h2>Current Slider</h2>
                    <div className={'sliderValuesContainer'}>
                        <div className={'sliderMinValueContainer'}>
                            {currentMinValue}
                        </div>
                        <div className={'sliderMaxValueContainer'}>
                            {currentMaxValue}
                        </div>
                    </div>
                    <div>
                        <MultiRangeSlider
                            min={props.product.sliderSettings.min}
                            max={props.product.sliderSettings.max}
                            step={props.product.sliderSettings.step}
                            minValue={props.product.sliderSettings.minValue}
                            maxValue={props.product.sliderSettings.maxValue}
                            ruler={false}
                            onInput={(e) => {
                                handleChange(e, true)
                            }}
                        />
                        {currentFinalPrice}
                    </div>
                </div>
                <div id={'contentSliderEditorNewSliderContainer'}>
                    <h2>New Slider</h2>
                    <div className={'sliderValuesContainer'}>
                        <div className={'sliderMinValueContainer'}>
                            {editorMinValue}
                        </div>
                        <div className={'sliderMaxValueContainer'}>
                            {editorMaxValue}
                        </div>
                    </div>
                    <div>
                        <MultiRangeSlider
                            min={enterMinValue ? enterMinValue
                                :
                                props.product.sliderSettings.min}
                            max={enterMaxValue ? enterMaxValue
                                :
                                props.product.sliderSettings.max}
                            step={enterStep ? enterStep
                                :
                                props.product.sliderSettings.step}
                            minValue={
                                enterLeftThumbValue && (
                                    enterRightThumbValue ?
                                        enterRightThumbValue > enterLeftThumbValue
                                        : enterLeftThumbValue < editorMaxValue
                                )
                                    ?
                                    enterLeftThumbValue :
                                    enterMinValue || props.product.sliderSettings.min
                            }
                            maxValue={
                                enterRightThumbValue && (enterRightThumbValue > editorMinValue && enterRightThumbValue > enterLeftThumbValue)
                                    ?
                                    enterRightThumbValue :
                                    enterMaxValue || props.product.sliderSettings.max
                            }
                            ruler={false}
                            onInput={(e) => {
                                handleChange(e, false)
                            }}
                        />
                        {editorFinalPrice}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentSliderEditor;