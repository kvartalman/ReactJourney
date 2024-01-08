import React, {useState} from "react";
import './NewProductSlider.css';
import ContentSliderSettings from "./NewProductContentSlider/ContentSliderSettings";
import NewProductBasedSlider from "./NewProductBasedSlider/NewProductBasedSlider";

const NewProductSlider = (props) => {

    const [buttonIndex, setButtonIndex] = useState(0);

    const handleSliderTypeChoice = (index) => {
        setButtonIndex(index);
    }

    const buttonsList = ['Упрощённый', 'Сложный', 'Без слайдера'].map((button, index) => (
        (
            <div
                onClick={() => handleSliderTypeChoice(index)}
                className={index === buttonIndex ? 'newProductSliderTypeCardContainer newProductSliderTypeCardContainerActive'
                    : 'newProductSliderTypeCardContainer'}
            >
                {button}
            </div>
        )
    ))

    return (
        <div id={'newProductSliderMainContainer'}>
            <div id={'newProductSliderSettingsChooseContainer'}>
                <h2>Выбери тип слайдера</h2>
                <div id={'newProductSliderChooseSliderTypeContainer'}>
                    {
                        buttonsList
                    }
                </div>
            </div>
            <div id={'newProductSliderSettingsContainer'}>
                {buttonIndex === 0 ?
                    <>
                        <h2>Настрой слайдер</h2>
                        <NewProductBasedSlider
                            price={props.price}
                        />
                    </>
                    :
                    buttonIndex === 1 ?
                        <>
                            <h2>Настрой слайдер</h2>
                            <ContentSliderSettings
                                price={props.price}
                            />
                        </>

                        :
                        buttonIndex === 2 ?
                            <h2>Выбран тип "без слайдера"</h2>
                            :
                            null
                }
            </div>
        </div>
    );
};

export default NewProductSlider;