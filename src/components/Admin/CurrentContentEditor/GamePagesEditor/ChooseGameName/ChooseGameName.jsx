import React from "react";
import {useSelector} from "react-redux";
import Button from "react-bootstrap/Button";

const ChooseGameName = (props) => {

    const gamePagesSelector = useSelector(state => state.gameOfferPages.pagesData)

    const gamePagesNames = Object.keys(gamePagesSelector).map(game => (
        <Button className={'nextPageButton'}>{game}</Button>
    ))

    const nextPage = (key) => {
        props.setKey(key)
    }

    return (
        <>
            {gamePagesNames}
            <Button className={'nextPageButton'} onClick={() => nextPage('text')}>Next</Button>
        </>
    );
}

export default ChooseGameName;
