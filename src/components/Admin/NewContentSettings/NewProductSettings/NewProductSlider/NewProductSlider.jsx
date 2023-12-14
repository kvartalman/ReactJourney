import React, {useState} from "react";
import './NewProductSlider.css';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ContentSliderSettings from "./NewProductContentSlider/ContentSliderSettings";
import NewProductBasedSlider from "./NewProductBasedSlider/NewProductBasedSlider";

const NewProductSlider = (props) => {

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
                        >Classic slider</Button>

                    </div>
                    <div>
                        <Button
                            onClick={() => handleSliderTypeChoice(1)}
                            className={buttonIndex === 1 ? 'activeButton' : 'defaultButton'}
                        >Complex slider</Button>
                        <Button
                            onClick={() => handleSliderTypeChoice(2)}
                            className={buttonIndex === 2 ? 'activeButton' : 'defaultButton'}
                        >No slider</Button>
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
            <Button
                className={'nextPageButton'}
                onClick={() => props.setKey('checkboxes')}
            >
                Next
            </Button>
        </Container>
    );
};

export default NewProductSlider;