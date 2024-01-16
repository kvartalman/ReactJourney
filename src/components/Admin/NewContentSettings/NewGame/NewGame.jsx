import React, {useState} from "react";
import './NewGame.css';
import {Tab, Tabs} from "react-bootstrap";

const NewGame = () => {

    const [key, setKey] = useState('text');

    return (
        <div id={'newGameMainContainer'}>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab
                    eventKey={'text'}
                    title={'Название игры'}
                >

                </Tab>
                <Tab
                    eventKey={'sub'}
                    title={'Подкатегории'}
                >

                </Tab>
                <Tab
                    eventkey={'ctg'}
                    title={'Карточка блока "Категории'}
                >

                </Tab>
            </Tabs>
        </div>
    )
}

export default NewGame;