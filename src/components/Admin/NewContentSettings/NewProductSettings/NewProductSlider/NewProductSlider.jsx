import React, {useState} from "react";
import './NewProductSlider.css';
import Button from "react-bootstrap/Button";
import ContentSliderSettings from "./NewProductContentSlider/ContentSliderSettings";
import NewProductBasedSlider from "./NewProductBasedSlider/NewProductBasedSlider";

const NewProductSlider = (props) => {

    const [buttonIndex, setButtonIndex] = useState(0);

    const handleSliderTypeChoice = (index) => {
        setButtonIndex(index);
    }

    return (
        <div id={'newProductSliderMainContainer'}>
                <div id={'newProductSliderSettingsChooseContainer'}>
                    <h2>Выбери тип слайдера</h2>
                    <div id={'newProductSliderChooseSliderTypeContainer'}>
                        <div
                            onClick={() => handleSliderTypeChoice(0)}
                            className={'newProductSliderTypeCardContainer'}
                        >
                            Упрощённый
                        </div>
                        <div
                            onClick={() => handleSliderTypeChoice(1)}
                            className={'newProductSliderTypeCardContainer'}
                        >
                            Сложный
                        </div>
                        <div
                            onClick={() => handleSliderTypeChoice(2)}
                            className={'newProductSliderTypeCardContainer'}
                        >
                            Без слайдера
                        </div>
                    </div>
                </div>
                <div>
                    {buttonIndex === 0 ?
                        <NewProductBasedSlider
                            price={props.price}
                        />
                        :
                        buttonIndex === 1 ?
                            <ContentSliderSettings
                                price={props.price}
                            />
                            :
                            buttonIndex === 2 ?
                                null
                                :
                                null
                    }
                </div>
        </div>
    );
};

export default NewProductSlider;