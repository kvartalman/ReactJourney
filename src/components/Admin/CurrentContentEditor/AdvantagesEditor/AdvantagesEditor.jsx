import React, {useEffect, useRef, useState} from "react";
import Container from "react-bootstrap/Container";
import {useDispatch, useSelector} from "react-redux";
import {
    fillAdvantagesEditorData,
    handleAdvantagesEditorDataChanges
} from "../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import Button from "react-bootstrap/Button";
import AdvantageCard from "../../../Homepage/Advantages/AdvantageCard";
import './AdvantagesEditor.css';
import Form from "react-bootstrap/Form";

const AdvantagesEditor = () => {

    const dispatch = useDispatch();

    const advantagesDataSelector = useSelector(state => state.homePage.advData);
    const advantagesEditorDataSelector = useSelector(state => state.adminPanel.advantagesEditorData);

    const [adv, setAdv] = useState(null);
    const [advIndex, setAdvIndex] = useState(0);
    const [img, setImg] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);
    const [advTitle, setAdvTitle] = useState('');
    const [advText, setAdvText] = useState('');

    const imgRef = useRef(null);

    const advTitleInput = (e) => {
        setAdvTitle(e.target.value);
    };

    const advTextInput = (e) => {
        setAdvText(e.target.value);
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
    }

    const handleAdvButtonSelect = (adv, index) => {
        setAdv(adv);
        setAdvIndex(index);
    }

    const handleAdvantagesEditorData = (actionType) => {
        dispatch(handleAdvantagesEditorDataChanges(
            {
                index: advIndex,
                actionType,
                text: advText,
                title: advTitle,
                imgSrc: imgPreview
            }
        ))
    }

    const handleAdvantagesEditorDataFilling = () => {
        dispatch(fillAdvantagesEditorData(advantagesDataSelector));
    }

    const advantagesButtons = () => {
        if (advantagesEditorDataSelector.length > 0) {
            return (
                advantagesEditorDataSelector.map((adv, index) => (
                    <Button
                        className={advIndex === index ? 'activeButton' : 'defaultButton'}
                        onClick={() => handleAdvButtonSelect(adv, index)}
                    >
                        {adv.title}
                    </Button>
                ))
            )
        }
    }

    const advantagesPreview = () => {
        if (advantagesEditorDataSelector.length > 0) {
            return (
                advantagesEditorDataSelector.map(adv => (
                    <AdvantageCard img={adv.img} key={adv.id} title={adv.title} text={adv.text}/>
                ))
            )
        }
    }

    useEffect(
        () => {
            handleAdvantagesEditorDataFilling();
        }, [])

    useEffect(
        () => {
            if (advantagesEditorDataSelector.length > 0) {
                if (advIndex < advantagesEditorDataSelector.length) {
                    setAdv(advantagesEditorDataSelector[advIndex]);
                } else if (advIndex >= advantagesEditorDataSelector.length) {
                    setAdv(advantagesEditorDataSelector[advantagesEditorDataSelector.length - 1]);
                    setAdvIndex(advantagesEditorDataSelector.length - 1);
                }
            } else if (advantagesEditorDataSelector.length === 0) {
                setAdv(null);
            }

        }, [advantagesEditorDataSelector])



    return (
        <Container fluid>
            <div>
                <div>
                    <h3>Choose element of "Advantages" block</h3>
                    <div>
                        {advantagesButtons()}
                    </div>
                </div>
                <div>
                    <h3>Upload new image</h3>
                    <div>
                        <input type={'file'} accept={'image/*,video/*'} ref={imgRef} onChange={handleImgFileChange}/>
                    </div>
                </div>
            </div>
            <div id={'advantagesEditorCurrentUploadPreviewContainer'}>
                <div>
                    <h3>Current advantage element</h3>
                    <div id={'advantagesEditorCurrentAdvantagePreviewContainer'}>
                        {adv ?
                            <AdvantageCard img={adv.img} key={adv.id} title={adv.title} text={adv.text}/>
                            :
                            null
                        }
                    </div>
                    <div>
                        <Button
                            className={'nextPageButton'}
                            onClick={() => handleAdvantagesEditorData('delete')}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
                <div>
                    <h3>New advantage element preview</h3>
                    <div id={'advantagesEditorNewAdvPreviewContainer'}>
                        {imgPreview ?
                            <AdvantageCard img={imgPreview} key={''} title={advTitle} text={advText}/>
                            :
                            null
                        }
                    </div>
                    <div>
                        <Form>
                            <Form.Label>Advantage element title</Form.Label>
                            <Form.Control
                                placeholder={'Enter title...'}
                                value={advTitle}
                                onChange={advTitleInput}
                            />
                            <Form.Label>Advantage element text</Form.Label>
                            <Form.Control
                                placeholder={'Enter text...'}
                                value={advText}
                                onChange={advTextInput}
                            />
                        </Form>
                    </div>
                    <div>
                        <Button
                            className={'nextPageButton'}
                            onClick={() => handleAdvantagesEditorData('add')}
                        >
                            Add as new
                        </Button>
                        <Button
                            className={'nextPageButton'}
                            onClick={() => handleAdvantagesEditorData('replace')
                        }
                        >
                            Replace with current
                        </Button>
                    </div>
                </div>
            </div>
            <div id={'advantagesEditorFinalPreviewContainer'}>
                {advantagesPreview()}
            </div>
        </Container>
    );
};

export default AdvantagesEditor;