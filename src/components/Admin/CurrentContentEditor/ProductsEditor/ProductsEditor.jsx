import React, {useState} from "react";
import './ProductsEditor.css';
import {Tab, Tabs} from "react-bootstrap";
import ProductTextEdit from "./ProductTextEdit/ProductTextEdit";
import ProductCheckboxesEdit from "./ProductCheckboxesEdit/ProductCheckboxesEdit";
import ProductSliderEdit from "./ProductSliderEdit/ProductSliderEdit";
import PriceEdit from "./PriceEdit/PriceEdit";
import ProductsEditorPreview from "./ProductsEditorPreview/ProductsEditorPreview";

const ProductsEditor = (props) => {

    const [key, setKey] = useState('title');
    const [product, setProduct] = useState(props.product);
    const [price, setPrice] = useState(product.price);
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [contentSliderMinValue, setContentSliderMinValue] = useState(0);
    const [contentSliderMaxValue, setContentSliderMaxValue] = useState(0);
    const [contentSliderLeftThumb, setContentSliderLeftThumb] = useState(0);
    const [contentSliderRightThumb, setContentSliderRightThumb] = useState(0);
    const [contentSliderStep, setContentSliderStep] = useState(1);
    const [sliderMin, setSliderMin] = useState(0);
    const [sliderMax, setSliderMax] = useState(0);
    const [sliderMultiplier, setSliderMultiplier] = useState(0);

    return (
        <div id={'productsEditorTabContainer'}>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >

                <Tab eventKey="title" title="Title and text">
                    <ProductTextEdit
                        setKey={setKey}
                        setText={setText}
                        setTitle={setTitle}
                        product={product}
                    />
                </Tab>
                <Tab eventKey="price" title="Price">
                    <PriceEdit
                        price={price}
                        setPrice={setPrice}
                        product={product}
                        setKey={setKey}
                    />
                </Tab>
                <Tab eventKey="checkboxes" title="Checkboxes">
                    <ProductCheckboxesEdit
                        setKey={setKey}
                        product={product}
                    />
                </Tab>
                <Tab eventKey="slider" title="Slider">
                    <ProductSliderEdit
                        price={price}
                        setKey={setKey}
                        product={product}
                        setContentSliderMinValue={setContentSliderMinValue}
                        setContentSliderMaxValue={setContentSliderMaxValue}
                        setContentSliderLeftThumb={setContentSliderLeftThumb}
                        setContentSliderRightThumb={setContentSliderRightThumb}
                        setContentSliderStep={setContentSliderStep}
                        setSliderMin={setSliderMin}
                        setSliderMax={setSliderMax}
                        setSliderMultiplier={setSliderMultiplier}
                    />
                </Tab>
                <Tab eventKey='preview' title='Preview'>
                    <ProductsEditorPreview
                        game={props.game}
                        subCtg={props.subCtg.name}
                        text={text}
                        title={title}
                        product={product}
                        price={price}
                        contentSliderMinValue={contentSliderMinValue}
                        contentSliderMaxValue={contentSliderMaxValue}
                        contentSliderLeftThumb={contentSliderLeftThumb}
                        contentSliderRightThumb={contentSliderRightThumb}
                        contentSliderStep={contentSliderStep}
                        sliderMin={sliderMin}
                        sliderMax={sliderMax}
                        sliderMultiplier={sliderMultiplier}
                    />
                </Tab>
            </Tabs>
        </div>
    );
}

export default ProductsEditor;