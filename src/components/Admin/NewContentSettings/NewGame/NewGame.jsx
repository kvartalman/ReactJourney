import React, {useState} from "react";
import './NewGame.css';
import {Tab, Tabs} from "react-bootstrap";
import NewGameName from "./NewGameName/NewGameName";
import NewGameTextAndTitle from "./NewGameTextAndTitle/NewGameTextAndTitle";
import NewGameSubCategories from "./NewGameSubCategories/NewGameSubCategories";
import NewGameCtgCard from "./NewGameCtgCard/NewGameCtgCard";

const NewGame = () => {

    const [key, setKey] = useState('name');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    return (
        <div id={'newGameMainContainer'}>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab
                    eventKey={'name'}
                    title={'Название игры'}
                >
                   <NewGameName
                       setName={setName}
                   />
                </Tab>
                <Tab
                    eventKey={'text'}
                    title={'Заголовок и текст'}
                >
                    <NewGameTextAndTitle
                        setTitle={setTitle}
                        setText={setText}
                    />
                </Tab>
                <Tab
                    eventKey={'sub'}
                    title={'Подкатегории'}
                >
                    <NewGameSubCategories />
                </Tab>
                <Tab
                    eventKey={'ctg'}
                    title={'Карточка блока "Категории"'}
                >
                    <NewGameCtgCard />
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

export default NewGame;