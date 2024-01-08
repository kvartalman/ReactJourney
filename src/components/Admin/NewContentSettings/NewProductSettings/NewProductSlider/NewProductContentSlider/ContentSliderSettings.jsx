import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import MultiRangeSlider from "multi-range-slider-react";
import '../../../../../ProductPage/ContentSlider/ContentSlider.css';
import './ContentSliderSettings.css'
import {useDispatch, useSelector} from "react-redux";
import Table from 'react-bootstrap/Table';
import {
    addContentSliderRange,
    deleteContentSliderRange
} from "../../../../../../store/slices/adminPanelSlices/adminPanelNewProductSlice";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const ContentSliderSettings = (props) => {

    const sliderRangesData = useSelector(state => state.adminPanelNewProduct.contentSliderSettingsRanges)
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
                enterValuePerStep: Number(enterValuePerStep),
                type: 'settings'
            })
        )
        setEnterStartOfRange('');
        setEnterEndOfRange('');
        setEnterValuePerStep('');
    }

    const deleteRangeHandler = index => {
        dispatch(deleteContentSliderRange(
            {
                index,
                type: 'settings'
            }))
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
                calculatedPrice += matchingRange.value;
            }
        }

        setFinalPrice(Number(props.price) + Number(calculatedPrice));
    };


    return (
        <div id={'contentSliderSettingsMainContainer'}>
            <div>
                <div id={'contentSliderEditorSettingsContainer'}>
                    <div id={'contentSliderEditorSettingsFormsContainer'}>
                        <Form>
                            <Form.Group>
                                <Form.Label>Выбери минимальное и максимальное значения слайдера</Form.Label>
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
                                <Form.Label>Выбери стартовые значения ползунков</Form.Label>
                                <Form.Control
                                    value={enterLeftThumbValue}
                                    onChange={enterLeftThumbValueInput}
                                    placeholder="Введите значение левого ползунка..."
                                />
                                <Form.Control
                                    value={enterRightThumbValue}
                                    onChange={enterRightThumbValueInput}
                                    placeholder="Введите значение правого ползунка..."
                                />
                                <Form.Label>
                                    <div className={'contentSliderSettingsLabelTooltipContainer'}>
                                        <p>Выбери шаг смещения ползунка при нажатии на полосу слайдера (по умолчанию -
                                            1)</p>
                                        <OverlayTrigger
                                            key={'top'}
                                            placement={'left'}
                                            overlay={
                                                <Tooltip
                                                    id={`tooltip-${'top'}`}
                                                >
                                                    Если клиент нажмёт на полоску слайдера, а не воспользуется правым
                                                    или
                                                    левым ползунком, произойдет смещение левого или правого ползунка (в
                                                    зависимости от того, в какой половине полоски слайдера был сделан
                                                    клик)
                                                    в
                                                    сторону, куда был сделан клик. Данная настройка отвечает за шаг, на
                                                    который
                                                    сместится ползунок слайдера при таком клике. Если это не имеет
                                                    значения,
                                                    лучше оставить значение 1.
                                                </Tooltip>
                                            }
                                        >
                                            <span className={'tooltipButton'}>?</span>
                                        </OverlayTrigger>
                                    </div>
                                </Form.Label>
                                <Form.Control
                                    value={enterStep}
                                    onChange={enterStepInput}
                                    placeholder="Введите шаг..."
                                />
                                <Form.Label>Установи диапазоны значений и стоимость шага внутри диапазона</Form.Label>
                                <Form.Control
                                    value={enterStartOfRange}
                                    onChange={enterStartOfRangeInput}
                                    placeholder="Введите начало диапазона..."
                                />
                                <Form.Control
                                    value={enterEndOfRange}
                                    onChange={enterEndOfRangeInput}
                                    placeholder="Введите конец диапазона..."
                                />
                                <Form.Control
                                    value={enterValuePerStep}
                                    onChange={enterValuePerStepInput}
                                    placeholder="Введите стоимость шага..."
                                />
                                <Button
                                    onClick={addRangeHandler}
                                    variant="primary"
                                    className={'nextPageButton'}
                                >
                                    Добавить диапазон
                                </Button>
                            </Form.Group>
                        </Form>
                    </div>
                    <div>
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
                    </div>
                    <div className={'addCardButtons'}>
                        <Button
                            variant="primary"
                            className={'nextPageButton'}
                        >
                            Создать слайдер
                        </Button>
                    </div>
                </div>
                <div id={'contentSliderSettingsSliderPreviewContainer'}>
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
                            enterLeftThumbValue &&
                            enterLeftThumbValue < maxValue
                                ?
                                enterLeftThumbValue : minValue
                        }
                        maxValue={
                            enterRightThumbValue &&
                            enterRightThumbValue > minValue
                                ?
                                enterRightThumbValue : maxValue
                        }
                        ruler={false}
                        onInput={(e) => {
                            handleChange(e)
                        }}
                        labels={[]}
                    />
                    {finalPrice}
                </div>
            </div>
        </div>
    );
}

export default ContentSliderSettings

