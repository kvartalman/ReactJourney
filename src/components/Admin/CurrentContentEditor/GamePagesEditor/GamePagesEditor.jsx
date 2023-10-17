import React, {useState} from "react";
import {Tab, Tabs} from "react-bootstrap";
import ChooseGameName from "./ChooseGameName/ChooseGameName";
import HomepageCardView from "./HomepageCardView/HomepageCardView";
import {useSelector} from "react-redux";
import ChooseGamePageTextAndTitle from "./ChooseGamePageTextAndTitle/ChooseGamePageTextAndTitle";

const GamePagesEditor = () => {

    const gamePagesSelector = useSelector(state => state.gameOfferPages.pagesData)

    const [game, setGame] = useState(Object.keys(gamePagesSelector)[0]);
    const [key, setKey] = useState('game');
    const [mainTitle, setMainTitle] = useState('');
    const [cardsTitle, setCardsTitle] = useState('');
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
                    game={game}
                    setGame={setGame}
                    setKey={setKey}
                    gamePagesSelector={gamePagesSelector}
                />
            </Tab>
            <Tab eventKey={'text'} title={'Text and titles'}>
                <ChooseGamePageTextAndTitle
                    game={game}
                    setKey={setKey}
                    gamePagesSelector={gamePagesSelector}
                    setMainTitle={setMainTitle}
                    setCardsTitle={setCardsTitle}
                    setText={setText}
                />
            </Tab>
            <Tab eventKey={'cards'} title={'Cards'}>

            </Tab>
            <Tab eventKey={'homepage'} title={'Homepage card view'}>
                <HomepageCardView/>
            </Tab>
        </Tabs>
    );
}

export default GamePagesEditor;