import React, {useEffect, useState} from "react";
import {Tab, Tabs} from "react-bootstrap";
import ChooseHomePageCard from "./ChooseHomePageCard/ChooseHomePageCard";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {addCardsData} from "../../../../store/slices/homePageSlice";

const HomePageCardsEditor = () => {

    const dispatch = useDispatch();

    const cardsSelector = useSelector(state => state.homePage.cardsData)

    const [key, setKey] = useState('chooseCard');
    const [card, setCard] = useState(null);

    useEffect(() => {
        axios.get('https://mocki.io/v1/8ea44757-6a9f-4c51-84b9-36a7f17a8aaa').then(response => {
            dispatch(addCardsData(response.data));
            if (response.data) {
                setCard(response.data[0].title);
            }
        });
    }, [])


    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey={'chooseCard'} title={'Choose card'}>
                <ChooseHomePageCard
                    setCard={setCard}
                    cardsSelector={cardsSelector}
                />
            </Tab>
        </Tabs>
    );
};

export default HomePageCardsEditor;