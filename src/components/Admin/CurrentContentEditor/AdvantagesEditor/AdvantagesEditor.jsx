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

const AdvantagesEditor = () => {

    const dispatch = useDispatch();

    const advantagesDataSelector = useSelector(state => state.homePage.advData);
    const advantagesEditorDataSelector = useSelector(state => state.adminPanel.advantagesEditorData);

    const [adv, setAdv] = useState(null);
    const [advIndex, setAdvIndex] = useState(0);
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
    }

    const handleAdvButtonSelect = (adv, index) => {
        setAdv(adv);
        setAdvIndex(index);
    }

    const handleAdvantagesEditorData = (actionType) => {
        dispatch(handleAdvantagesEditorDataChanges())
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

    useEffect(
        () => {
            dispatch(fillAdvantagesEditorData(advantagesDataSelector));
        }, [])

    useEffect(
        () => {
            if (advantagesEditorDataSelector.length > 0) {
                setAdv(advantagesEditorDataSelector[0])
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
            <div>
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
                    
                </div>
            </div>
            <div>

            </div>
        </Container>
    );
};

export default AdvantagesEditor;