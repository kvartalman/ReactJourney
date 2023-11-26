import React, {useEffect, useState} from "react";
import './AdvantagesNew.css';
import {useDispatch, useSelector} from "react-redux";
import Form from "react-bootstrap/Form";
import {fillAdvantagesEditorData} from "../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import Button from "react-bootstrap/Button";
import AdvantageCard from "../../../Homepage/Advantages/AdvantageCard";

const AdvantagesNew = () => {

    const dispatch = useDispatch();

    const advantagesDataSelector = useSelector(state => state.homePage.advData);
    const advantagesEditorDataSelector = useSelector(state => state.adminPanel.advantagesEditorData);
    const advantagesNewAddedDataSelector = useSelector(state => state.adminPanel.advantagesNewAddedData);

    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImg] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);
    const [advIndex, setAdvIndex] = useState(0);
    const [adv, setAdv] = useState(null);

    const textInput = (e) => {
        setText(e.target.value);
    }

    const titleInput = (e) => {
        setTitle(e.target.value);
    }

    const handleAdvButtonChoice = (adv, index) => {
        setAdv(adv);
        setAdvIndex(advIndex);
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
    }

    const handleAdvantagesEditorDataFilling = () => {
        dispatch(fillAdvantagesEditorData(advantagesDataSelector));
    }

    const advantagesNewList = () => {
        if (advantagesNewAddedDataSelector.length > 0) {
            return (
                advantagesNewAddedDataSelector.map((adv, index) => (
                    <Button
                        className={advIndex === index ? 'activeButton' : 'defaultButton'}
                        onClick={() => handleAdvButtonChoice(adv, index)}
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

    useEffect(() => {
        handleAdvantagesEditorDataFilling();
    }, []);

    return (
        <div id={'advantagesNewMainContainer'}>
            <div id={'advantagesNewSettingsContainer'}>
                    <div id={'advantagesNewFormsContainer'}>
                        <Form>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                value={title}
                                onChange={titleInput}
                                placeholder={'Enter title...'}
                            />
                            <Form.Label>Text</Form.Label>
                            <Form.Control
                                value={text}
                                onChange={textInput}
                                placeholder={'Enter text...'}
                            />
                        </Form>
                    </div>
                    <div id={'advantagesNewImageContainer'}>
                        <div>
                            <input type={'file'} accept={'image/*,video/*'} onChange={handleImgFileChange}/>
                        </div>
                        <div>
                            {imgPreview ?
                                <img src={imgPreview} alt={'Advantage image preview'} width={150}/>
                                :
                                null
                            }
                        </div>
                    </div>
                <div id={'advantagesNewAddedImagesContainer'}>
                    <div>
                        {advantagesNewList()}
                    </div>
                    <div>
                        {adv ?
                            <img src={adv.srcImg} alt={adv.altImg} width={100}/>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
            <div id={'advantagesNewFinalPreviewContainer'}>
                {advantagesPreview()}
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default AdvantagesNew;