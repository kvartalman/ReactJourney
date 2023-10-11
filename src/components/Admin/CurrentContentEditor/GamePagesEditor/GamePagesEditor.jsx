import React, {useState} from "react";
import {Tab, Tabs} from "react-bootstrap";
import ChooseGameName from "./ChooseGameName/ChooseGameName";
import HomepageCardView from "./HomepageCardView/HomepageCardView";

const GamePagesEditor = () => {

    const [key, setKey] = useState('game');
    const [mainTitle, setMainTitle] = useState('');
    const [secondTitle, setSecondTitle] = useState('');
    const [text, setText] = useState('');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey={'game'} title={'Choose game'}>
                <ChooseGameName
                    setKey={setKey}
                />
            </Tab>
            <Tab eventKey={'text'} title={'Text and titles'}>

            </Tab>
            <Tab eventKey={'cards'} title={'Cards'}>

            </Tab>
            <Tab eventKey={'homepage'} title={'Homepage card view'}>
                <HomepageCardView />
            </Tab>
        </Tabs>
    );
}

export default GamePagesEditor;