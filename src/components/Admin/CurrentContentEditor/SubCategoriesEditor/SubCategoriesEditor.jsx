import React, {useState} from "react";
import {Tab, Tabs} from "react-bootstrap";
import {useSelector} from "react-redux";
import ChooseGameSubCategoryEditor from "./ChooseGameSubCategoryEditor/ChooseGameSubCategoryEditor";
import SubCategoriesCardsEditor from "./SubCategoriesCardsEditor/SubCategoriesCardsEditor";

const SubCategoriesEditor = (props) => {

    const subCategorySelector = useSelector(state => state.productPage.productData)


    const [key, setKey] = useState('game');
    const [game, setGame] = useState(Object.keys(subCategorySelector)[0]);
    const [subCategory, setSubCategory] = useState(Object.keys(subCategorySelector[game].subCategories)[0]);

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
                    subCategory={subCategory}
                    subCategorySelector={subCategorySelector}
                />
            </Tab>
        </Tabs>
    );
};

export default SubCategoriesEditor;