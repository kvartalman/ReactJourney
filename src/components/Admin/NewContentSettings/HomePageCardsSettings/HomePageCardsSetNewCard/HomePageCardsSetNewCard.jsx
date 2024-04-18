import React, {useEffect, useRef, useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import './/HomePageCardsSetNewCard.css';
import {useDispatch} from "react-redux";
import {addNewHomePageOfferCard} from "../../../../../store/slices/adminPanelSlices/adminPanelNewContentSlice";
import OfferCard from "../../../../Homepage/Cards/OfferCard";

const HomePageCardsSetNewCard = (props) => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [cardText, setCardText] = useState('');
    const [tag, setTag] = useState('');
    const [img, setImg] = useState('');
    const [imgPreview, setImgPreview] = useState(null);
    const [imgName, setImgName] = useState('');

    const imgRef = useRef(null);

    const handleImgFileChange = (event) => {
        const imgFile = event.target.files[0];
        setImg(imgFile);
        setImgName(imgFile.name)

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

        props.setImagesData(prevImages => [...prevImages, img])

        dispatch(addNewHomePageOfferCard({
            tagId: tag,
            title,
            text: cardText,
            bg: imgPreview,
            imgName: imgName
        }));
        setTag('');
        setTitle('');
        setCardText('');
        setImgPreview(null);

    }

    useEffect(() => {
        console.log(props.imagesData)
    }, [props.imagesData]);

    return (
        <div id={'homePageCardsSetNewCardMainContainer'}>

                <div id={'homePageCardsSetNewCardFormsContainer'}>
                    <h2>Придумай заголовок, текст и тег</h2>
                    <Form>
                        <Form.Group as={Col} id={'addCardForm'}>
                            <div style={{display: "flex"}}>
                                <Form.Label>Card tag (например: dotaCard, csCard, lolCard т.п.)</Form.Label>
                            </div>
                            <Form.Control
                                onChange={tagInput}
                                type=""
                                placeholder={'Введите тег...'}
                                value={tag}
                            >
                            </Form.Control>
                            <Form.Label>Заголовок карточки</Form.Label>
                            <Form.Control
                                onChange={titleInput}
                                type=""
                                placeholder="Введите заголовок..."
                                value={title}
                            />
                            <Form.Label>Текст карточки</Form.Label>
                            <Form.Control
                                onChange={cardTextInput}
                                value={cardText}
                                placeholder="Введите текст..."
                            />
                        </Form.Group>
                    </Form>
                </div>

                <div id={'homePageCardsSetNewCardUploadCreateContainer'}>
                    <h2>Загрузи задний фон</h2>
                    <h3>Самое лучшее, если ты будешь использовать названия фотографий аналогичные названиям
                        тегов: csCard.jpg, dotaCard.png и т.д... Это будет самый лучший вариант в плане уникальности и
                        удобства работы кода
                    </h3>
                    <div>
                        <input type={'file'} accept={'image/*,video/*'} ref={imgRef} onChange={handleImgFileChange}/>
                    </div>
                    <div id={'homePageCardsSetNewCardBackgroundPreview'}>
                        {imgPreview ?
                            <img src={imgPreview} alt={'Background image preview'} width={'300'}/>
                            :
                            null
                        }
                    </div>
                    <div className={'addCardButtons'}>
                        <Button
                            onClick={addHomePageCard}
                            variant="primary"
                            className={'nextPageButton'}
                        >
                            Создать карточку
                        </Button>
                    </div>
                </div>

            <div id={'homePageCardsSetNewCardPreviewContainer'}>
                <div id={'homePageCardsSetNewCardCreatedPreview'}>
                    <h2>Превью</h2>
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
        </div>
    );
};

export default HomePageCardsSetNewCard;