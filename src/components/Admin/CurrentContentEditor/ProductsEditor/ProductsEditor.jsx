import React, {useState} from "react";
import './ProductsEditor.css';
import {Tab, Tabs} from "react-bootstrap";

const ProductsEditor = () => {

    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="home" title="Text">
                Tab content for Home
            </Tab>
            <Tab eventKey="profile" title="Profile">
                Tab content for Profile
            </Tab>
            <Tab eventKey="contact" title="Contact">
                Tab content for Contact
            </Tab>
        </Tabs>
    );
}

export default ProductsEditor;