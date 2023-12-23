import React, {useEffect, useRef, useState} from "react";
import './CarouselNew.css';
import Form from "react-bootstrap/Form";
import {useDispatch, useSelector} from "react-redux";
import {
    changeCarouselEditorData,
    fillCarouselEditorData, fillCarouselEditorNewData
} from "../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import {Carousel} from "react-bootstrap";
import CarouselItems from "../../../Homepage/Carousel/CarouselItems";
import Button from "react-bootstrap/Button";

const CarouselNew = () => {

    const dispatch = useDispatch();

    const carouselSelector = useSelector(state => state.homePage.carouselData);
    const carouselEditorData = useSelector(state => state.adminPanel.carouselEditorNewData);
    const carouselNewAddedDataSelector = useSelector(state => state.adminPanel.carouselNewAddedData);

    const [img, setImg] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);
    const [imgName, setImgName] = useState('');
    const [picture, setPicture] = useState(0);
    const [pictureIndex, setPictureIndex] = useState(0);

    const imgRef = useRef(null);

    const imgNameInput = (e) => {
        setImgName(e.target.value);
    };

    const handleCarouselEditorDataFilling = () => {
        dispatch(fillCarouselEditorNewData(carouselSelector));
    };

    const handleCarouselEditorDataChanges = (actionType) => {
        if (actionType === 'add') {
            dispatch(changeCarouselEditorData(
                {
                    actionType: actionType,
                    src: imgPreview,
                    name: imgName,
                    index: pictureIndex
                }
            ))
        } else if (actionType === 'deleteNew') {
            dispatch(changeCarouselEditorData(
                {
                    actionType: 'deleteNew',
                    picture
                }
            ))
        }
    }

    const handleImageChoice = (image, index) => {
        setPictureIndex(index);
        setPicture(image);
    }

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

    const carouselItemArr = () => {
        if (carouselEditorData.length > 0) {
            return (
                carouselEditorData.map(item => (
                    <Carousel.Item>
                        <CarouselItems key={item.id} srcImg={item.srcImg} altImg={item.altImg}
                                       text={<Carousel.Caption
                                           className={'carousel-text'}>{item.text}</Carousel.Caption>}/>
                    </Carousel.Item>
                ))
            )
        }
    }

    const newPictures = () => {
        if (carouselNewAddedDataSelector.length > 0) {
            return (
                carouselNewAddedDataSelector.map((image, index) => (
                    <Button
                        onClick={() => handleImageChoice(image, index)}
                        className={pictureIndex === index ? 'activeButton' : 'defaultButton'}
                    >
                        {image.name}
                    </Button>
                ))
            )
        }
    }

    useEffect(
        () => {
            handleCarouselEditorDataFilling();
        },
        []
    )

    useEffect(() => {

        // Выполняем условие только когда массив заполнен. Нужно, чтобы, при удалении элемента, корректно отображалось
        // превью-пикча и корректно выделялась активная кнопка выбора элемента карусели. В зависимости от удаления
        // последнего элемента или любого другого в массиве, выполняются разные условия. Все работает, лучше не трогать.

        if (carouselNewAddedDataSelector.length > 0) {
            if (pictureIndex < carouselNewAddedDataSelector.length) {
                setPicture(carouselNewAddedDataSelector[pictureIndex])
            } else if (pictureIndex >= carouselNewAddedDataSelector.length) {
                setPicture(carouselNewAddedDataSelector[carouselNewAddedDataSelector.length - 1]);
                setPictureIndex(carouselNewAddedDataSelector.length - 1);
            }
        } else if (carouselNewAddedDataSelector.length === 0) {
            setPicture(null);
        }

    }, [carouselNewAddedDataSelector])


    return (
        <div id={'carouselNewMainContainer'}>
            <div id={'carouselNewFinalPreviewContainer'}>
                <h1>Final preview</h1>
                <Carousel fade className={'carousel'} indicators={false} interval={5000} pause={false}>
                    {carouselItemArr()}
                </Carousel>
            </div>
            <div id={'carouselNewSettingsContainer'}>
                <div id={'carouselNewFormsAndUploadMainContainer'}>
                    <div id={'carouselNewFormsAndUploadContainer'}>
                        <h3>Загрузить новое</h3>
                        <div id={'carouselNewUploadContainer'}>
                            <div>
                                <input type={'file'} accept={'image/*,video/*'} ref={imgRef}
                                       onChange={handleImgFileChange}/>
                            </div>
                        </div>
                        <div id={'carouselNewFormsContainer'}>
                            <Form>
                                <Form.Label>Image name</Form.Label>
                                <Form.Control
                                    placeholder={'Enter image name'}
                                    onChange={imgNameInput}
                                    value={imgName}
                                />
                            </Form>
                        </div>
                        <div id={'carouselNewPicturePreviewContainer'}>
                            {imgPreview ?
                                <img src={imgPreview} alt={'Image preview'} width={200}/>
                                :
                                null
                            }
                        </div>
                        <div
                            className={'carouselNewButtonsContainer'}
                        >
                            <button
                                onClick={() => handleCarouselEditorDataChanges('add')}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
                <div id={'carouselNewPicturesListMainContainer'}>
                    <h3>
                        Загрузил не то? Выбери лишнее и удали!
                    </h3>
                    <div id={'carouselNewPicturesListContainer'}>
                        {newPictures()}
                    </div>
                    <div id={'carouselNewPicturesListPreviewContainer'}>
                        {picture ?
                            <img src={picture.srcImg} alt={picture.altImg} width={200}/>
                            :
                            null
                        }
                    </div>
                    <div className={'carouselNewButtonsContainer'}>
                        <button
                            onClick={() => handleCarouselEditorDataChanges('deleteNew')}
                        >Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselNew;