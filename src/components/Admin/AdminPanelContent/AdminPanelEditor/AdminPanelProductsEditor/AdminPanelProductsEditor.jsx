import React, {useState} from "react";
import './AdminPanelProductsEditor.css';
import {useSelector} from "react-redux";
import ProductsEditor from "../../../CurrentContentEditor/ProductsEditor/ProductsEditor";
import Modal from 'react-bootstrap/Modal';
import NewProductSettings from "../../../NewContentSettings/NewProductSettings/NewProductSettings";

const AdminPanelProductsEditor = (props) => {

    const gamesSelector = useSelector(state => state.gameProducts);
    const [game, setGame] = useState(null);
    const [subCtg, setSubCtg] = useState(null);
    const [product, setProduct] = useState(null);
    const [show, setShow] = useState(false);
    const [newShow, setNewShow] = useState(false);

    const handleNewModal = () => {
        setNewShow(!newShow);
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
                    <div
                        key={index}
                        onClick={() => handleGameChoice(game, index)}
                        className={'adminPanelProductsEditorGameContainer'}
                        style={{
                            background: `url(${gamesSelector[game].bg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
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
            <div id={'adminPanelProductsCurrentMainContainer'}>
                <div id={'adminPanelProductsCurrentTabSettingsContainer'}>
                    <div id={'adminPanelProductsEditorGames'}>
                        {gamesList()}
                    </div>
                    <div id={'adminPanelProductsEditorSubcategories'}>
                        {subCtgList()}
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
                <Modal id={'adminPanelProductsEditorModal'} show={show} onHide={handleClose}>
                    <ProductsEditor
                        game={game}
                        subCtg={subCtg}
                        product={product}
                    />
                </Modal>
                <Modal id={'adminPanelProductsEditorModal'} show={newShow} onHide={handleNewModal}>
                    <NewProductSettings
                    />
                </Modal>
            </div>
        </div>
    );
};

export default AdminPanelProductsEditor;