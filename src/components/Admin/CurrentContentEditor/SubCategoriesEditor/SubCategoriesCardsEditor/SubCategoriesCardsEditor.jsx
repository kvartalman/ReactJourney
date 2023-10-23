import React, {useCallback, useEffect, useRef, useState} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {Card, Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const SubCategoriesCardsEditor = (props) => {

    const cardsSelector = useSelector(state => state.productPage.productData
        [props.game].subCategories[props.subCategory].cards)

    const [enterCardName, setEnterCardName] = useState('');
    const [enterCardPrice, setEnterCardPrice] = useState('');
    const [currentCardName, setCurrentCardName] = useState('');
    const [currentCardPrice, setCurrentCardPrice] = useState('');
    const [currentCardImgSrc, setCurrentCardImgSrc] = useState('');
    const [currentCardLink, setCurrentCardLink] = useState('');
    const [imgPreview, setImgPreview] = useState(null);

    const cardSelect = useRef(null);

    // We use this function to find card with the same title in select form and get information about this card from
    // database and render this card (as preview of card which we will edit)

    const handleCardSelect = useCallback(() => {
        for (let i = 0; i < Object.keys(cardsSelector).length; i++) {
            if (cardsSelector[Object.keys(cardsSelector)[i]].title === cardSelect.current.value) {
                setCurrentCardName(cardsSelector[Object.keys(cardsSelector)[i]].title);
                setCurrentCardPrice(cardsSelector[Object.keys(cardsSelector)[i]].text);
                setCurrentCardImgSrc(cardsSelector[Object.keys(cardsSelector)[i]].src);
                setCurrentCardLink(cardsSelector[Object.keys(cardsSelector)[i]].link)
            }
        }
    });

    const enterCardNameInput = (e) => {
        setEnterCardName(e.target.value);
    };

    const enterCardPriceInput = (e) => {
        setEnterCardPrice(e.target.value);
    };

    const handleImgFileChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const imgBlobURL = URL.createObjectURL(selectedFile);
            setImgPreview(imgBlobURL);

        } else {
            setImgPreview(null);
        }
    };

    const cardsList = Object.keys(
        cardsSelector).map(
        (subcategory) => (
            <option>
                {cardsSelector[subcategory].title}
            </option>
        ));

    useEffect(() => {
        handleCardSelect()
    }, [handleCardSelect])

    // console.log(currentCardName, currentCardPrice, currentCardLink, currentCardImgSrc)

    return (
        <Container fluid>
            <Form>
                <Form.Group>
                    <Form.Label>Choose card</Form.Label>
                    <Form.Select
                        ref={cardSelect}
                        onChange={handleCardSelect}
                    >
                        {cardsList}
                    </Form.Select>
                    <Form.Label>Card name form</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={1}
                        value={enterCardName}
                        onChange={enterCardNameInput}
                        placeholder="Enter new card name..."
                    />
                    <Form.Label>Card price</Form.Label>
                    <Form.Control
                        value={enterCardPrice}
                        onChange={enterCardPriceInput}
                        placeholder='Enter new card price...'
                    />
                </Form.Group>
            </Form>
            <input type={'file'} accept={'image/*,video/*'} onChange={handleImgFileChange}/>
            <Container fluid>
                <Row>
                    <Col>
                        <h2>Current card view</h2>
                        <Card
                            className={'subCategoryCard'}
                            style={{
                                background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) ), 
            url(${currentCardImgSrc})`
                            }}
                        >
                            <NavLink to={currentCardLink}>
                                <Card.Body className={'subCategoryCardBody'}>
                                    <Card.Title>{currentCardName}</Card.Title>
                                    <Card.Text>
                                        {currentCardPrice}
                                    </Card.Text>
                                </Card.Body>
                            </NavLink>
                        </Card>
                    </Col>
                    <Col>
                        <h2>New card preview</h2>
                        <Card
                            className={'subCategoryCard'}
                            style={{
                                background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) ), 
            url(${imgPreview ? imgPreview : null})`
                            }}
                        >
                            <NavLink to={currentCardLink}>
                                <Card.Body className={'subCategoryCardBody'}>
                                    <Card.Title>{enterCardName}</Card.Title>
                                    <Card.Text>
                                        {enterCardPrice}
                                    </Card.Text>
                                </Card.Body>
                            </NavLink>
                        </Card>
                        {imgPreview ? null : <h3>Load a picture!</h3>}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default SubCategoriesCardsEditor;