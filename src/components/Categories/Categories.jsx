import Container from "react-bootstrap/Container";
import './Categories.css'
import React, {useState} from "react";
import {useSelector} from "react-redux";
import Category from "./Category";

const Categories = () => {

    const ctgLinks = useSelector(state => state.categories.categoriesLinks)
    const [button, setButton] = useState(false);

    const categoriesLinks = ctgLinks.map(link => (
        <Category bg={link.bg} name={link.name} to={link.to} video={link.video}/>
    ))

    const categoriesLinksFirstSlice = ctgLinks.slice(0, 6).map(link => (
        <Category bg={link.bg} name={link.name} to={link.to} video={link.video}/>
    ))

    const categoriesLinksSecondSlice = ctgLinks.slice(6).map(link => (
        <Category bg={link.bg} name={link.name} to={link.to} video={link.video}/>
    ))

    return (
        <>
            <Container fluid id={'ctgContainer'}>

                {categoriesLinks}

            </Container>
            <Container fluid id={'ctgMenuContainer'}>
                {categoriesLinksFirstSlice}
                {button ? categoriesLinksSecondSlice : null}
            </Container>
            <div id={'showMoreGamesButtonContainer'}>
                <button id={'showMoreGamesButton'} onClick={() => setButton(!button)}>
                    {button ? 'Show less' : 'Show more'}
                </button>
            </div>
        </>
    )

}

export default Categories