import React, {useEffect, useRef, useState} from "react";
import './CarouselNew.css';
import Form from "react-bootstrap/Form";
import {useDispatch, useSelector} from "react-redux";
import {fillCarouselEditorData} from "../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import {Carousel} from "react-bootstrap";
import CarouselItems from "../../../Homepage/Carousel/CarouselItems";

const CarouselNew = () => {

    const dispatch = useDispatch();

    const carouselSelector = useSelector(state => state.homePage.carouselData);
    const carouselEditorData = useSelector(state => state.adminPanel.carouselEditorData);

    const [img, setImg] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);
    const [imgName, setImgName] = useState('');

    const imgRef = useRef(null);

    const imgNameInput = (e) => {
        setImgName(e.target.value);
    };

    const handleCarouselEditorDataFilling = () => {
        dispatch(fillCarouselEditorData(carouselSelector));
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

    return (
        <div id={'carouselNewMainContainer'}>
            <div id={'carouselNewSettingsContainer'}>
                <div id={'carouselNewFormsAndUploadContainer'}>
                    <div id={'carouselNewUploadContainer'}>
                        <h3>Upload new image</h3>
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
                </div>
                <div id={'carouselNewPicturePreviewContainer'}>
                    {imgPreview ?
                        <img src={imgPreview} alt={'New image preview'} width={200} />
                        :
                        null
                    }
                </div>
            </div>
            <div id={'carouselNewFinalPreviewContainer'}>
                <div id={'carouselNewCarouselPreviewContainer'}>
                <Carousel fade className={'carousel'} indicators={false} interval={5000} pause={false}>
                    {carouselItemArr()}
                </Carousel>
                </div>
                <div id={'carouselNewButtonsContainer'}>
                    <button>Add new image to carousel preview</button>
                    <button>Delete new image from carousel preview</button>
                    <button>Accept changes</button>
                </div>
            </div>
        </div>
    );
};

export default CarouselNew;