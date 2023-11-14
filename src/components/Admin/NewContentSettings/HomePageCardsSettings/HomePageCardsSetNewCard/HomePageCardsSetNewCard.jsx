import React, {useRef, useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import './/HomePageCardsSetNewCard.css';
import {useDispatch} from "react-redux";
import Container from "react-bootstrap/Container";
import {addNewHomePageOfferCard} from "../../../../../store/slices/adminPanelSlices/adminPanelNewContentSlice";
import {Row} from "react-bootstrap";
import CardsButton from "../../../../Homepage/Cards/Buttons/CardsButton";
import OfferCard from "../../../../Homepage/Cards/OfferCard";

const HomePageCardsSetNewCard = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [cardText, setCardText] = useState('');
    const [tag, setTag] = useState('');
    const [img, setImg] = useState('');
    const [imgPreview, setImgPreview] = useState(null);

    const imgRef = useRef(null);

    const handleImgFileChange = (event) => {
        const imgFile = event.target.files[0];
        setImg(imgFile);

        if (imgFile) {
            const imgBlobURL = URL.createObjectURL(imgFile);
            setImgPreview(imgBlobURL);

        } else {
            setImgPreview(null);
        }
    }

    const tagInput = (e) => {
        setTag(e.target.value);
    };

    const titleInput = (e) => {
        setTitle(e.target.value);
    };
    const cardTextInput = (e) => {
        setCardText(e.target.value);
    };

    const addHomePageCard = () => {
        dispatch(addNewHomePageOfferCard({
            tagId: tag,
            title,
            text: cardText,
            bg: imgPreview
        }));
        setTag('');
        setTitle('');
        setCardText('');
        setImgPreview(null);
    }

    return (
        <Container fluid>
            <Form>
                <h2>HomePage Cards Editor</h2>
                <Form.Group as={Col} id={'addCardForm'}>
                    <Form.Label>Card tag</Form.Label>
                    <Form.Control
                        onChange={tagInput}
                        type=""
                        placeholder={'Enter card tag...'}
                        value={tag}
                    >

                    </Form.Control>
                    <Form.Label>Card title</Form.Label>
                    <Form.Control
                        onChange={titleInput}
                        type=""
                        placeholder="Enter card title..."
                        value={title}
                    />
                    <Form.Label>Card text</Form.Label>
                    <Form.Control
                        onChange={cardTextInput}
                        value={cardText}
                        placeholder="Enter Card text..."
                    />
                </Form.Group>

                <div>
                    <input type={'file'} accept={'image/*,video/*'} ref={imgRef} onChange={handleImgFileChange}/>
                </div>
                <div className={'addCardButtons'}>
                    <Button
                        onClick={addHomePageCard}
                        variant="primary"
                        className={'nextPageButton'}
                    >
                        Create Card
                    </Button>
                </div>
            </Form>
            <div id={'homePageCardsSetNewCardPreviewContainer'}>
                <div id={'homePageCardsSetNewCardBackgroundPreview'}>
                    <h3>Background preview</h3>
                    {imgPreview ?
                        <img src={imgPreview} alt={'Background image preview'} width={'300'}/>
                        :
                        null
                    }
                </div>
                <div id={'homePageCardsSetNewCardCreatedPreview'}>
                    <h3>Created card preview</h3>
                    <OfferCard
                        key={''}
                        bg={imgPreview ? imgPreview : null}
                        id={tag}
                        title={title}
                        text={cardText}
                        button={[]}
                    />
                </div>
            </div>
        </Container>
    );
};

export default HomePageCardsSetNewCard;