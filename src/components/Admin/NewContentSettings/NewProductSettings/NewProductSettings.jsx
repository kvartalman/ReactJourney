import React, {useState} from "react";
import './NewProductSettings.css';
import {Tab, Tabs} from "react-bootstrap";
import '../../AdminPanel.css';
import NewProductTitleAndText from "./NewProductTitleAndText/NewProductTitleAndText";
import ContentSliderSettings
    from "../ProductPageSettings/NewProductSettings/ContentSliderSettings/ContentSliderSettings";

const NewProductSettings = () => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [key, setKey] = useState('text');

    return (

        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
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
                <ContentSliderSettings />
            </Tab>
            <Tab
                eventKey={'slider'}
                title={'Slider settings'}
            >

            </Tab>
            <Tab
                eventKey={'checkboxes'}
                title={'Checkboxes'}
            >

            </Tab>
            <Tab
                eventKey={'preview'}
                title={'Preview'}
            >

            </Tab>
        </Tabs>
    )
}

export default NewProductSettings;