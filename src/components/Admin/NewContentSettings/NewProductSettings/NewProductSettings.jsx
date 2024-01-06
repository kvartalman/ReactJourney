import React, {useState} from "react";
import './NewProductSettings.css';
import {Tab, Tabs} from "react-bootstrap";
import '../../AdminPanel.css';
import NewProductTitleAndText from "./NewProductTitleAndText/NewProductTitleAndText";
import NewProductSlider from "./NewProductSlider/NewProductSlider";
import NewProductPrice from "./NewProductPrice/NewProductPrice";
import NewProductCheckboxes from "./NewProductCheckboxes/NewProductCheckboxes";
import NewProductGameSub from "./NewProductGameSub/NewProductGameSub";

const NewProductSettings = () => {

    const [game, setGame] = useState('');
    const [sub, setSub] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [key, setKey] = useState('game');
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
                    eventKey={'game'}
                    title={'Игра и подкатегория'}
                >
                    <NewProductGameSub
                        setGame={setGame}
                        game={game}
                        setSub={setSub}
                        sub={sub}
                    />
                </Tab>
                <Tab
                    eventKey={'text'}
                    title={'Заголовок и текст'}
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
                    title={'Базовая цена'}
                >
                    <NewProductPrice
                        setKey={setKey}
                        setPrice={setPrice}
                        price={price}
                    />
                </Tab>
                <Tab
                    eventKey={'slider'}
                    title={'Слайдер'}
                >
                    <NewProductSlider
                        setKey={setKey}
                        price={price}
                    />
                </Tab>
                <Tab
                    eventKey={'checkboxes'}
                    title={'Чекбоксы'}
                >
                    <NewProductCheckboxes/>
                </Tab>
                <Tab
                    eventKey={'preview'}
                    title={'Превью'}
                >

                </Tab>
            </Tabs>
        </div>
    )
}

export default NewProductSettings;