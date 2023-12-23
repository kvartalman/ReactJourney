import React, {useRef} from "react";
import {useSelector} from "react-redux";
import './NewProductGameSub.css';

const NewProductGameSub = (props) => {

    const gamesSelector = useSelector(state => state.gameProducts);

    const handleGameChoice = (game) => {
        props.setGame(game);
    }

    const handleSubCtgChoice = (sub) => {
        props.setSub(sub);
    }

    const gamesList = Object.keys(gamesSelector).map(game => (
        <div
            className={'newProductGameChooseContainer'}
            onClick={() => handleGameChoice(game)}
            style={{
                background: `url(${gamesSelector[game].bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
        </div>
    ))

    const subCtgList = () => {
        if (props.game) {
            return (
                gamesSelector[props.game].subCategories.map(subcategory => (
                    <div
                        className={'newProductSubCategoryChooseContainer'}
                        onClick={() => handleSubCtgChoice(subcategory.name)}
                    >
                        {subcategory.name}
                    </div>
                ))
            )
        }
    }

    return (
        <div id={'newProductGameSubMainContainer'}>
            <h1>Choose game and subcategory of product</h1>
            <div id={'newProductGamesListContainer'}>
                {gamesList}
            </div>
            <div id={'newProductSubCtgListContainer'}>
                {subCtgList()}
            </div>
        </div>
    );
}

export default NewProductGameSub;