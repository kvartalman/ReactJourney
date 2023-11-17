import React, {useState} from "react";
import './NewProductSlider.css';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ContentSliderSettings from "./NewProductContentSlider/ContentSliderSettings";

const NewProductSlider = () => {

    const [buttonIndex, setButtonIndex] = useState(0);

    const handleSliderTypeChoice = (index) => {
        setButtonIndex(index);
    }

    return (
        <Container fluid>
            <div>
            <h2>Choose slider type</h2>
            <div id={'newProductSliderSettingsChooseContainer'}>
                <div>
                    <Button
                        onClick={() => handleSliderTypeChoice(0)}
                        className={buttonIndex === 0 ? 'activeButton' : 'defaultButton'}
                    >Mini slider</Button>

                </div>
                <div>
                    <Button
                        onClick={() => handleSliderTypeChoice(1)}
                        className={buttonIndex === 1 ? 'activeButton' : 'defaultButton'}
                    >Big slider</Button>
                    <Button
                        onClick={() => handleSliderTypeChoice(2)}
                        className={buttonIndex === 2 ? 'activeButton' : 'defaultButton'}
                    >No slider</Button>
                </div>
            </div>
                <div>
                    {buttonIndex === 0 ? null :
                        buttonIndex === 1 ?
                        <ContentSliderSettings />
                            :
                            null
                    }
                </div>
            </div>
        </Container>
    );
};

export default NewProductSlider;