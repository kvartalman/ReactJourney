import React, {useState} from "react";
import './NewProductSettings.css';
import {Tab, Tabs} from "react-bootstrap";
import '../../AdminPanel.css';
import NewProductTitleAndText from "./NewProductTitleAndText/NewProductTitleAndText";
import NewProductSlider from "./NewProductSlider/NewProductSlider";
import NewProductPrice from "./NewProductPrice/NewProductPrice";
import NewProductCheckboxes from "./NewProductCheckboxes/NewProductCheckboxes";

const NewProductSettings = () => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [key, setKey] = useState('text');
    const [price, setPrice] = useState(0);

    return (
        <div id={'newProductSettingsMainContainer'}>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 newProductsSettingsTabs"
            >
                <Tab
                    eventKey={'text'}
                    title={'Title and text'}
                >
                    <NewProductTitleAndText
                        text={text}
                        title={title}
                        setTitle={setTitle}
                        setText={setText}
                        setKey={setKey}
                    />
                </Tab>
                <Tab
                    eventKey={'price'}
                    title={'Base price'}
                >
                    <NewProductPrice
                        setKey={setKey}
                        setPrice={setPrice}
                        price={price}
                    />
                </Tab>
                <Tab
                    eventKey={'slider'}
                    title={'Slider settings'}
                >
                    <NewProductSlider
                        setKey={setKey}
                        price={price}
                    />
                </Tab>
                <Tab
                    eventKey={'checkboxes'}
                    title={'Checkboxes'}
                >
                    <NewProductCheckboxes />
                </Tab>
                <Tab
                    eventKey={'preview'}
                    title={'Preview'}
                >

                </Tab>
            </Tabs>
        </div>
    )
}

export default NewProductSettings;