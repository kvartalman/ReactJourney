import React, {useState} from "react";
import './AdminPanelProductsCurrent.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {useSelector} from "react-redux";
import ProductsEditor from "../../../../CurrentContentEditor/ProductsEditor/ProductsEditor";

const AdminPanelProductsCurrent = (props) => {

    const gamesSelector = useSelector(state => state.gameProducts);
    const [game, setGame] = useState(null);
    const [subCtg, setSubCtg] = useState(null);
    const [product, setProduct] = useState(null);

    const handleGameChoice = (game, index) => {
        setGame(game);
    }

    const handleSubCtgChoice = (sub, index) => {
        setSubCtg(sub);
    }

    const handleProductChoice = (product, index) => {
        setProduct(product);
        props.setBackIndex(4);
    }

    const gamesList = () => {
        if (Object.keys(gamesSelector).length > 0) {
            return (
                Object.keys(gamesSelector).map((game, index) => (
                    <Dropdown.Item
                        onClick={() => handleGameChoice(game, index)}
                    >
                        {gamesSelector[game].fullName}
                    </Dropdown.Item>
                ))
            )
        }
    }

    const subCtgList = () => {
        if (game) {
            return (
                gamesSelector[game].subCategories.map((sub, index) => (
                    <Dropdown.Item
                        onClick={() => handleSubCtgChoice(sub, index)}
                    >
                        {sub.name}
                    </Dropdown.Item>
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
        <>
            {
                props.backIndex === 3 ?
                    <div id={'adminPanelProductsCurrentMainContainer'}>
                        <div id={'adminPanelProductsCurrentTabSettingsContainer'}>
                            <Dropdown>
                                <Dropdown.Toggle variant={'success'} id={'adminPanelProductsCurrentChooseGameButton'}>
                                    Choose game
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {gamesList()}
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle variant={'success'} id={'adminPanelProductsCurrentChooseSubButton'}>
                                    Choose subcategory
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {subCtgList()}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div id={'adminPanelProductsCurrentTabContainer'}>
                            {subCtg ?
                                <table>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Image</th>
                                    </tr>
                                    {productsList()}
                                </table>
                                :
                                null
                            }
                        </div>
                    </div>
                    :
                    product ?
                        <ProductsEditor
                            game={game}
                            subCtg={subCtg}
                            product={product}
                        />
                        :
                        null
            }
        </>
    );
}

export default AdminPanelProductsCurrent;
