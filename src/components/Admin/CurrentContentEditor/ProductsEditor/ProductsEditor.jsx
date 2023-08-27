import React, {useEffect, useState} from "react";
import './ProductsEditor.css';
import {Tab, Tabs} from "react-bootstrap";
import ProductTextEdit from "./ProductTextEdit/ProductTextEdit";
import ChooseGame from "./ChooseGame/ChooseGame";
import ProductCheckboxesEdit from "./ProductCheckboxesEdit/ProductCheckboxesEdit";
import {useSelector} from "react-redux";
import ProductSliderEdit from "./ProductSliderEdit/ProductSliderEdit";
import PriceEdit from "./PriceEdit/PriceEdit";
import ProductsEditorPreview from "./ProductsEditorPreview/ProductsEditorPreview";

const ProductsEditor = () => {

    const gameSelector = useSelector(state => state.productPage.productData)

    const [key, setKey] = useState('game');
    const [game, setGame] = useState(Object.keys(gameSelector)[0]);
    const [product, setProduct] = useState(Object.keys(gameSelector[game].products)[0])
    const [price, setPrice] = useState(gameSelector[game].products[product].price);
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [contentSliderMinValue, setContentSliderMinValue] = useState(0);
    const [contentSliderMaxValue, setContentSliderMaxValue] = useState(0);
    const [contentSliderLeftThumb, setContentSliderLeftThumb] = useState(0);
    const [contentSliderRightThumb, setContentSliderRightThumb] = useState(0);
    const [contentSliderStep, setContentSliderStep] = useState(1);

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="game" title="Choose game and product">
                <ChooseGame
                    setKey={setKey}
                    game={game}
                    gameSelector={gameSelector}
                    setGame={setGame}
                    setProduct={setProduct}
                />
            </Tab>
            <Tab eventKey="title" title="Title and text">
                <ProductTextEdit
                    gameSelector={gameSelector}
                    setKey={setKey}
                    setText={setText}
                    setTitle={setTitle}
                    game={game}
                    product={product}
                />
            </Tab>
            <Tab eventKey="price" title="Price">
                <PriceEdit
                    price={price}
                    setPrice={setPrice}
                    gameSelector={gameSelector}
                    game={game}
                    product={product}
                    setKey={setKey}
                />
            </Tab>
            <Tab eventKey="checkboxes" title="Checkboxes">
                <ProductCheckboxesEdit
                    setKey={setKey}
                    gameSelector={gameSelector}
                    game={game}
                    product={product}
                />
            </Tab>
            <Tab eventKey="slider" title="Slider">
                <ProductSliderEdit
                    setKey={setKey}
                    game={game}
                    product={product}
                    gameSelector={gameSelector}
                    setContentSliderMinValue={setContentSliderMinValue}
                    setContentSliderMaxValue={setContentSliderMaxValue}
                    setContentSliderLeftThumb={setContentSliderLeftThumb}
                    setContentSliderRightThumb={setContentSliderRightThumb}
                    setContentSliderStep={setContentSliderStep}
                />
            </Tab>
            <Tab eventKey='preview' title='Preview'>
                <ProductsEditorPreview
                    text={text}
                    title={title}
                    game={game}
                    product={product}
                    price={price}
                    gameSelector={gameSelector}
                    contentSliderMinValue={contentSliderMinValue}
                    contentSliderMaxValue={contentSliderMaxValue}
                    contentSliderLeftThumb={contentSliderLeftThumb}
                    contentSliderRightThumb={contentSliderRightThumb}
                    contentSliderStep={contentSliderStep}
                />
            </Tab>
        </Tabs>
    );
}

export default ProductsEditor;