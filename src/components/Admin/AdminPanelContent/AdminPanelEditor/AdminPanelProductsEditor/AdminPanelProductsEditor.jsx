import React, {useState} from "react";
import './AdminPanelProductsEditor.css';
import {useSelector} from "react-redux";
import ProductsEditor from "../../../CurrentContentEditor/ProductsEditor/ProductsEditor";
import Modal from 'react-bootstrap/Modal';
import NewProductSettings from "../../../NewContentSettings/NewProductSettings/NewProductSettings";
import SubCtgListPopup from "./SubCtgListPopup/SubCtgListPopup";

const AdminPanelProductsEditor = (props) => {

    const gamesSelector = useSelector(state => state.gameProducts);
    const [game, setGame] = useState(null);
    const [subCtg, setSubCtg] = useState(null);
    const [product, setProduct] = useState(null);
    const [show, setShow] = useState(false);
    const [newShow, setNewShow] = useState(false);
    const [massNewShow, setMassNewShow] = useState(false);

    const [gameHover, setGameHover] = useState(false);
    const [popupHover, setPopupHover] = useState(false);
    const [subCtgIndex, setSubCtgIndex] = useState(null);
    const [popupTimer, setPopupTimer] = useState(null);
    const [coordsChecker, setCoordsChecker] = useState(false);

    const handleGameHover = (actionType, coordinate, index) => {
        clearTimeout(popupTimer);
        setSubCtgIndex(index)

        if (coordinate + 100 < window.innerWidth / 2) {
            setCoordsChecker(true);
        } else {
            setCoordsChecker(false);
        }

        if (actionType === 'enter') {

            // We do this because we need to hide subCtgList, and after it show it again on different game element

            if (gameHover) {
                setGameHover(false);
            }
            if (popupHover) {
                setPopupHover(false);
            }
            const timerId = setTimeout(() => {
                setGameHover(true);
                setPopupHover(true);
            }, 0);

            setPopupTimer(timerId);

        } else if (actionType === 'leave') {
            clearTimeout(popupTimer);
            setGameHover(false);
            setPopupHover(false);
        }
    }

    const handlePopupHover = (actionType) => {

        if (actionType === 'enter') {

            setPopupHover(true);
        } else if (actionType === 'leave') {
            setPopupHover(false);
            setGameHover(false);
        }
    }

    const handleNewModal = () => {
        setNewShow(!newShow);
    }

    const handleMassNewModal = () => {
        setMassNewShow(!massNewShow);
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleGameChoice = (game, index) => {
        setGame(game);
    }

    const handleSubCtgChoice = (sub, index) => {
        setSubCtg(sub);
    }

    const handleProductChoice = (product, index) => {
        setProduct(product);
        setShow(!show);
    }

    const gamesList = () => {
        if (Object.keys(gamesSelector).length > 0) {


            return (
                Object.keys(gamesSelector).map((game, index) => (
                    <div id={'adminPanelProductsEditorGameListMainContainer'}>
                        <div
                            key={index}
                            onMouseEnter={(event) => handleGameHover('enter', event.clientX, index)}
                            onMouseLeave={(e) => handleGameHover('leave', e, index)}
                            onClick={(e) => handleGameChoice(game, e, index)}
                            className={'adminPanelProductsEditorGameContainer'}
                            id={`productsEditorGameContainer${index}`}
                            style={{
                                background: `url(${gamesSelector[game].bg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {popupHover && subCtgIndex === index ?
                                <div
                                    className={'subCtgListPopup'}
                                    style={{
                                        opacity: popupHover ? '1' : '0',
                                        top: document.getElementById(`productsEditorGameContainer${index}`).offsetTop
                                        + (document.getElementById(`productsEditorGameContainer${index}`).offsetHeight / 2),
                                        left: coordsChecker ?
                                            document.getElementById(`productsEditorGameContainer${index}`).offsetLeft
                                            + (document.getElementById(`productsEditorGameContainer${index}`).offsetWidth / 2)
                                            :
                                            document.getElementById(`productsEditorGameContainer${index}`).offsetLeft
                                            + (document.getElementById(`productsEditorGameContainer${index}`).offsetWidth / 2) - 500
                                    }}
                                    onMouseEnter={() => handlePopupHover('enter')}
                                    onMouseLeave={() => handlePopupHover('leave')}
                                >
                                    <SubCtgListPopup
                                        subCategories={gamesSelector[game].subCategories}
                                        onSelect={handleSubCtgChoice}
                                    />
                                </div>
                                :
                                null
                            }
                        </div>
                    </div>

                ))
            )
        }
    }

    const subCtgList = () => {
        if (game) {
            return (
                gamesSelector[game].subCategories.map((sub, index) => (
                    <div
                        onClick={() => handleSubCtgChoice(sub, index)}
                        className={'adminPanelProductsEditorSubCtgContainer'}
                    >
                        <p>{sub.name}</p>
                    </div>
                ))
            )
        }
    }

    const productsList = () => {
        if (subCtg) {
            return (
                subCtg.products.map((product, index) => (
                    <tr onClick={() => handleProductChoice(product)} className={'productTableRow'}>
                        <td>{product.header}</td>
                        <td>{product.price}</td>
                        <td><img src={product.img} alt={`${product.header} image`} width={50}/></td>
                    </tr>
                ))
            )
        }
    }

    return (
        <div id={'productsEditorMainContainer'}>
            <div id={'productsEditorCreateNewButtonContainer'}>
                <button
                    onClick={() => handleNewModal()}
                >
                    Create new
                </button>
            </div>
            <div id={'productsEditorCreateNewButtonContainer'}>
                <button
                    onClick={() => handleMassNewModal()}
                >
                    Mass create
                </button>
            </div>
            <div id={'adminPanelProductsCurrentMainContainer'}>
                <div id={'adminPanelProductsCurrentTabSettingsContainer'}>
                    <div id={'adminPanelProductsEditorGames'}>
                        {gamesList()}

                    </div>
                </div>

                <div id={'adminPanelProductsCurrentTabContainer'}>
                    {subCtg ?
                        <table>
                            <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Image</th>
                            </tr>
                            </tbody>
                            {productsList()}
                        </table>
                        :
                        null
                    }
                </div>
            </div>
            <div>
                <Modal className={'adminPanelProductsEditorModal'} show={show} onHide={handleClose}>
                    <ProductsEditor
                        game={game}
                        subCtg={subCtg}
                        product={product}
                    />
                </Modal>
                <Modal className={'adminPanelProductsEditorModal'} show={newShow} onHide={handleNewModal}>
                    <NewProductSettings
                    />
                </Modal>
                <Modal className={'adminPanelProductsEditorModal'} show={massNewShow} onHide={handleMassNewModal}>
                </Modal>
            </div>
        </div>
    );
};

export default AdminPanelProductsEditor;