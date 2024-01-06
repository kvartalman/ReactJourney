import React from "react";
import {useSelector} from "react-redux";
import './NewProductGameSub.css';

const NewProductGameSub = (props) => {

    const gamesSelector = useSelector(state => state.gameProducts);

    const handleGameChoice = (game) => {
        props.setGame(game);
        props.setSub('');
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
                        onClick={() => handleSubCtgChoice(subcategory)}
                    >
                        {subcategory.name}
                    </div>
                ))
            )
        }
    }

    return (
        <div id={'newProductGameSubMainContainer'}>
            <h1>Назначь продукту игру и подкатегорию</h1>
            <div>
                <div id={'newProductGameSubCardsContainer'}>
                    <div id={'newProductGamesListContainer'}>
                        <h3>Выбери игру</h3>
                        <div>
                            {gamesList}
                        </div>
                    </div>
                    <div id={'newProductSubCtgListContainer'}>
                        <h3>Выбери подкатегорию</h3>
                        <div>
                            {subCtgList()}
                        </div>
                    </div>
                </div>
                <div id={'newProductGameSubChosenContainer'}>
                    <div>
                        <h3>Текущая игра</h3>
                        {props.game ?
                            <div
                                className={'newProductGameChooseContainer'}
                                style={{
                                    background: `url(${gamesSelector[props.game].bg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                            </div>
                            :
                            null
                        }
                    </div>
                    <div>
                        <h3>Текущая подкатегория</h3>
                        {props.sub ?
                            <div
                                className={'newProductSubCategoryChooseContainer'}
                            >
                                {props.sub.name}
                            </div>
                            :
                            <div
                                className={'newProductSubCategoryChooseContainer'}
                            >
                                Не назначено
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProductGameSub;