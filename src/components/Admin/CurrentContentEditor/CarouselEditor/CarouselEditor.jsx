import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import './CarouselEditor.css';
import {
    changeCarouselEditorData,
    fillCarouselEditorData
} from "../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import {Carousel} from "react-bootstrap";
import CarouselItems from "../../../Homepage/Carousel/CarouselItems";
import Form from "react-bootstrap/Form";

const CarouselEditor = () => {

    // Когда будет сервер, то надо будеть делать запрос оттуда, чтобы заполнить carouselEditorData. Будет делаться
    // асинхронный запрос, внутри которого ОБЯЗАТЕЛЬНО надо будет сделать вызов dispatch и setPicture(первое значение
    // из полученного в ответе списка) carouselSelector[0] в [picture, setPicture] в качестве начального значения
    // это временное решение.
    // const handleCarouselEditorDataFilling = () => {
    //         dispatch(fillCarouselEditorData(carouselSelector));
    //     }; carouselSelector здесь это тоже временное решение.

    const dispatch = useDispatch();

    const carouselSelector = useSelector(state => state.homePage.carouselData);
    const carouselEditorData = useSelector(state => state.adminPanel.carouselEditorData);

    const [picture, setPicture] = useState(null);
    const [pictureIndex, setPictureIndex] = useState(0);
    const [img, setImg] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);
    const [imgName, setImgName] = useState('');

    const imgRef = useRef(null);

    const imgNameInput = (e) => {
        setImgName(e.target.value);
    };

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

    const handleCarouselPictureChoice = (picture, index) => {
        setPicture(picture);
        setPictureIndex(index);
    };

    const handleCarouselEditorDataFilling = () => {
        dispatch(fillCarouselEditorData(carouselSelector));
    };

    const handleCarouselEditorDataChanges = (actionType) => {
        if (actionType === 'delete') {
            dispatch(changeCarouselEditorData(
                {
                    actionType: actionType,
                    index: pictureIndex
                }
            ))

        } else if (actionType === 'replace') {
            dispatch(changeCarouselEditorData(
                {
                    actionType: actionType,
                    src: imgPreview,
                    name: imgName,
                    index: pictureIndex
                }
            ))
        }
    };

    const carouselPicturesList = () => {
        if (carouselEditorData.length > 0) {
            return (
                carouselEditorData.map((picture, index) => (
                    <Button
                        className={pictureIndex === index ? 'activeButton' : 'defaultButton'}
                        onClick={() => handleCarouselPictureChoice(picture, index)}
                    >
                        {picture.name}
                    </Button>
                ))
            )
        }
    }

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

        if (carouselEditorData.length > 0) {
            if (pictureIndex < carouselEditorData.length) {
                setPicture(carouselEditorData[pictureIndex])
            } else if (pictureIndex >= carouselEditorData.length) {
                setPicture(carouselEditorData[carouselEditorData.length - 1]);
                setPictureIndex(carouselEditorData.length - 1);
            }
        } else if (carouselEditorData.length === 0) {
            setPicture(null);
        }

    }, [carouselEditorData])

    return (
        <Container fluid>
            <div id={'carouselEditorChooseUploadContainer'}>
                <div>
                    <h3>Choose current image</h3>
                    <div>
                        {carouselPicturesList()}
                    </div>
                </div>
                <div>
                    <h3>Upload new image</h3>
                    <div>
                        <input type={'file'} accept={'image/*,video/*'} ref={imgRef} onChange={handleImgFileChange}/>
                    </div>
                </div>
            </div>

            <div id={'carouselEditorPicturesPreviewContainer'}>
                <div id={''}>
                    <h3>Current image</h3>
                    <div>
                        {picture ?
                            <img src={picture.srcImg} alt={picture.altImg} width={400}/>
                            :
                            null
                        }
                    </div>
                    <div>
                        <Button
                            className={'nextPageButton'}
                            onClick={() => handleCarouselEditorDataChanges('delete')}
                        >
                            Delete image
                        </Button>
                    </div>
                </div>
                <div id={''}>
                    <h3>New image</h3>
                    <div>
                        {imgPreview ?
                            <img src={imgPreview} alt={'Preview image'} width={400}/>
                            :
                            null
                        }
                    </div>
                    <div>
                        <Form>
                            <Form.Label>Image name</Form.Label>
                            <Form.Control
                                placeholder={'Enter image name'}
                                onChange={imgNameInput}
                                value={imgName}
                            />
                        </Form>
                    </div>
                    {imgPreview ?
                        <div id={'carouselEditorAddReplaceButtonsContainer'}>
                            <div>
                                <Button
                                    className={'nextPageButton'}
                                    onClick={() => handleCarouselEditorDataChanges('replace')}
                                >
                                    Replace with current image
                                </Button>
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
            <div id={'carouselEditorFinalPreviewContainer'}>
                <h3>Carousel final preview</h3>
                <Carousel fade className={'carousel'} indicators={false} interval={5000} pause={false}>
                    {carouselItemArr()}
                </Carousel>
            </div>
        </Container>
    );
};

export default CarouselEditor;