import React, {useEffect, useState} from "react";
import {Tab, Tabs} from "react-bootstrap";
import {useSelector} from "react-redux";
import ChooseGameSubCategoryEditor from "./ChooseGameSubCategoryEditor/ChooseGameSubCategoryEditor";
import SubCategoriesCardsEditor from "./SubCategoriesCardsEditor/SubCategoriesCardsEditor";

const SubCategoriesEditor = (props) => {

    const subCategorySelector = useSelector(state => state.productPage.productData)

    const [key, setKey] = useState('game');
    const [game, setGame] = useState(Object.keys(subCategorySelector)[0]);
    const [subCategory, setSubCategory] = useState(null);

    useEffect(() => {

        // We use this function to find and set first subcategory for 'subCategory'. We will use it in next component

        if (!subCategory) {
            for (const key in subCategorySelector[game].products) {
                if (subCategorySelector[game].products[key].subCategory) {
                    setSubCategory(key);
                    break;
                }
            }
        }
    }, [game, subCategory, subCategorySelector])

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey={'game'} title={'Choose game'}>
                <ChooseGameSubCategoryEditor
                    setKey={setKey}
                    game={game}
                    setGame={setGame}
                    setSubCategory={setSubCategory}
                    subCategorySelector={subCategorySelector}
                />
            </Tab>
            <Tab eventKey={'cards'} title={'Cards'}>
                <SubCategoriesCardsEditor
                    setKey={setKey}
                    game={game}
                    subCategorySelector={subCategorySelector}
                />
            </Tab>
        </Tabs>
    );
};

export default SubCategoriesEditor;