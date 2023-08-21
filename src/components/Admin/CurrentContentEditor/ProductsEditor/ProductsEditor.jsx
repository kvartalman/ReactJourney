import React, {useState} from "react";
import './ProductsEditor.css';
import {Tab, Tabs} from "react-bootstrap";
import ProductTextEdit from "./ProductTextEdit/ProductTextEdit";
import ChooseGame from "./ChooseGame/ChooseGame";
import ProductCheckboxesEdit from "./ProductCheckboxesEdit/ProductCheckboxesEdit";
import {useSelector} from "react-redux";
import ProductSliderEdit from "./ProductSliderEdit/ProductSliderEdit";
import PriceEdit from "./PriceEdit/PriceEdit";

const ProductsEditor = () => {

    const gameSelector = useSelector(state => state.productPage.productData)

    const [key, setKey] = useState('game');
    const [game, setGame] = useState(Object.keys(gameSelector)[0]);
    const [product, setProduct] = useState(Object.keys(gameSelector[game].products)[0])
    const [price, setPrice] = useState(gameSelector[game].products[product].price);
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');

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
                />
            </Tab>
        </Tabs>
    );
}

export default ProductsEditor;