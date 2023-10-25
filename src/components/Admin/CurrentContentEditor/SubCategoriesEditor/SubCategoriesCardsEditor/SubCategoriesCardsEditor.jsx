import React, {useCallback, useEffect, useRef, useState} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {Card, Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    cancelSubCategoriesCardDeletion,
    deleteSubCategoriesCard,
    fillSubCategoriesEditor,
    handleSubCategoriesChanges
} from "../../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import Button from "react-bootstrap/Button";
import './SubCategoriesCardsEditor.css';

const SubCategoriesCardsEditor = (props) => {

    const dispatch = useDispatch();

    const cardsSelector = useSelector(state => state.productPage.productData
        [props.game].subCategories[props.subCategory].cards);
    const adminPanelSubCategoriesSelector = useSelector(state => state.adminPanel.subCategoriesCardsEditor);
    const deletedSubCategoriesCardsSelector = useSelector(state => state.adminPanel.deletedSubCategoriesCards);

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
        for (let i = 0; i < cardsSelector.length; i++) {
            if (cardsSelector[i].title === cardSelect.current.value) {
                setCurrentCardName(cardsSelector[i].title);
                setCurrentCardPrice(cardsSelector[i].text);
                setCurrentCardImgSrc(cardsSelector[i].src);
                setCurrentCardLink(cardsSelector[i].link)
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

    const handleSubCategoriesCardDelete = () => {
        dispatch(deleteSubCategoriesCard({
            name: cardSelect.current.value
        }))
    };

    const handleAcceptChanges = () => {
        dispatch(handleSubCategoriesChanges(
            {
                card: cardSelect.current.value,
                title: enterCardName,
                text: enterCardPrice,
                src: imgPreview
            }
        ))
    };

    const cancelCardDeletion = () => {
        dispatch(cancelSubCategoriesCardDeletion())
    }

    const cardsList = adminPanelSubCategoriesSelector.map((card) => (
        <option key={card.id}>{card.title}</option>
    ));

    useEffect(() => {
        handleCardSelect()
    }, [handleCardSelect])

    useEffect(() => {
        dispatch(fillSubCategoriesEditor(cardsSelector))

    }, [cardsSelector, dispatch])

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
            <div id={'subCategoriesCardsEditorDeleteCancelButtons'}>
                {adminPanelSubCategoriesSelector.length > 0 ?
                    <Button
                        className={'nextPageButton'}
                        onClick={() => handleSubCategoriesCardDelete()}
                    >Delete card</Button>
                    :
                    null
                }
                {
                    deletedSubCategoriesCardsSelector.length > 0 ?
                        <Button
                            className={'nextPageButton'}
                            onClick={() => cancelCardDeletion()}
                        >
                            Cancel
                        </Button>
                        :
                        null
                }
            </div>
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
                        <Button
                            onClick={() => handleAcceptChanges()}
                            className={'nextPageButton'}
                        >
                            Accept changes
                        </Button>
                    </Col>
                </Row>
                <Button
                    onClick={() => props.setKey('preview')}
                    className={'nextPageButton'}
                >
                    Next
                </Button>
            </Container>
        </Container>
    );
};

export default SubCategoriesCardsEditor;