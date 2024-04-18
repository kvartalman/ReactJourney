import React, {useRef, useState} from "react";
import './HomePageCardImageEdit.css';
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import {handleHomePageOfferCardsImageChanges} from "../../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";


const HomePageCardImageEdit = (props) => {

    const dispatch = useDispatch();

    const [img, setImg] = useState(null);
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
    };

    const handleImageChangeConfirmation = () => {
        if (img) {
            props.setCardsImages(prevImages => [...prevImages, [img, props.card.imgName]])

            dispatch(handleHomePageOfferCardsImageChanges({
                title: props.card.title,
                bg: imgPreview,
                imgName: img.name
            }))
        }
    }

    return (
        <div id={'homePageCardImageEditMainContainer'}>
            <h2>Замени фотографию</h2>
            <div id={'homePageCardImageEditImageContainer'}>
                {
                    imgPreview ?
                        <img src={imgPreview} alt={'Новая фотография'} width={400}/>
                        :
                        null
                }
            </div>
            <input type={'file'} accept={'image/*,video/*'} ref={imgRef}
                   onChange={handleImgFileChange}/>
            <Button
                className={'nextPageButton'}
                onClick={() => handleImageChangeConfirmation()}
            >
                Заменить
            </Button>
        </div>
    )
}

export default HomePageCardImageEdit;