import React, {useState} from "react";
import './ProductsEditor.css';
import {Tab, Tabs} from "react-bootstrap";
import ContentSliderEditor
    from "./ProductSliderEdit/ContentSliderEditor/ContentSliderEditor";
import ProductTextEdit from "./ProductTextEdit/ProductTextEdit";

const ProductsEditor = () => {

    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="home" title="Title and text">
                <ProductTextEdit />
            </Tab>
            <Tab eventKey="profile" title="Checkboxes">
                Tab content for Profile
            </Tab>
            <Tab eventKey="contact" title="Slider">
                <ContentSliderEditor />
            </Tab>
        </Tabs>
    );
}

export default ProductsEditor;