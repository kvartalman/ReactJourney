import React, {useState} from "react";
import './AdminPanelGamesEditor.css';
import Modal from "react-bootstrap/Modal";
import {useSelector} from "react-redux";
import GamePagesEditor from "../../../CurrentContentEditor/GamePagesEditor/GamePagesEditor";
import NewGame from "../../../NewContentSettings/NewGame/NewGame";

const AdminPanelGamesEditor = () => {

    const gamesSelector = useSelector(state => state.gameProducts)

    const [newShow, setNewShow] = useState(false);
    const [editorShow, setEditorShow] = useState(false);
    const [game, setGame] = useState('');

    const handleNewGameModal = () => {
        setNewShow(!newShow);
    }

    const handleGameEditorModal = () => {
        setEditorShow(!editorShow);
    }

    const handleGameChoice = (game) => {
        setGame(game);
        setEditorShow(!editorShow);
    }

    const gamesList = () => {

        if (Object.keys(gamesSelector).length > 0) {
            return (
                Object.keys(gamesSelector).map((game, index) => (
                    <div
                        onClick={() => handleGameChoice(game)}
                        key={index}
                        style={{
                            background: `url(${gamesSelector[game].bg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            cursor: 'pointer'
                        }}
                    >
                    </div>
                ))
            )
        }
    }

    return (
        <div id={'adminPanelGamesEditorMainContainer'}>
            <div id={'adminPanelGamesEditorNewGameLinkContainer'}>
                <button
                    onClick={() => handleNewGameModal()}
                >
                    Новая игра
                </button>
            </div>
            <div id={'adminPanelGamesEditorGamesListContainer'}>
                {gamesList()}
            </div>
            <Modal className={'adminPanelGamesEditorGameModal'} show={newShow} onHide={handleNewGameModal}>
                <NewGame />
            </Modal>
            <Modal className={'adminPanelGamesEditorModal'} show={editorShow} onHide={handleGameEditorModal}>
                <GamePagesEditor
                    game={game}
                />
            </Modal>
        </div>
    );
};

export default AdminPanelGamesEditor;