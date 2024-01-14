import React, {useState} from "react";
import {Tab, Tabs} from "react-bootstrap";
import HomepageCardView from "./HomepageCardView/HomepageCardView";
import {useSelector} from "react-redux";
import GamePageTextAndTitleEdit from "./GamePageTextAndTitleEdit/GamePageTextAndTitleEdit";
import GamePageCardsEdit from "./GamePageCardsEdit/GamePageCardsEdit";
import GamePagePreview from "./GamePagePreview/GamePagePreview";
import './GamePagesEditor.css';
import GamePageSubCtgEditor from "./GamePageSubCtgEditor/GamePageSubCtgEditor";

const GamePagesEditor = (props) => {

    const gamePagesSelector = useSelector(state => state.gameOfferPages.pagesData[props.game])

    const [key, setKey] = useState('text');
    const [mainTitle, setMainTitle] = useState('');
    const [cardsTitle, setCardsTitle] = useState('');
    const [text, setText] = useState('');

    return (
        <div id={'gamePagesEditorMainContainer'}>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey={'text'} title={'Заголовок и текст'}>
                    <GamePageTextAndTitleEdit
                        setKey={setKey}
                        gamePagesSelector={gamePagesSelector}
                        setMainTitle={setMainTitle}
                        setCardsTitle={setCardsTitle}
                        setText={setText}
                    />
                </Tab>
                <Tab eventKey={'subCtg'} title={'Подкатегории'}>
                    <GamePageSubCtgEditor
                        game={props.game}
                    />
                </Tab>
                <Tab eventKey={'cards'} title={'Карточки горячих предложений'}>
                    <GamePageCardsEdit
                        key={props.game}
                        setKey={setKey}
                        gamePagesSelector={gamePagesSelector}
                    />
                </Tab>
                <Tab eventKey={'category'} title={'Карточка блока "Категории"'}>
                    <HomepageCardView
                        setKey={setKey}
                        gamePagesSelector={gamePagesSelector}
                    />
                </Tab>
                <Tab eventKey={'preview'} title={'Превью'}>
                    <GamePagePreview
                        mainTitle={mainTitle}
                        cardsTitle={cardsTitle}
                        text={text}
                        gamePagesSelector={gamePagesSelector}
                    />
                </Tab>
            </Tabs>
        </div>
    );
}

export default GamePagesEditor;