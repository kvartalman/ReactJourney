import React, {useRef, useState} from "react";
import './NewGameCtgCard.css';
import Category from "../../../../Homepage/Categories/Category";

const NewGameCtgCard = () => {

    const [img, setImg] = useState(null);
    const [video, setVideo] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);
    const videoRef = useRef(null);
    const imgRef = useRef(null);

    const handleImgFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setImg(selectedFile);

        if (selectedFile) {
            const imgBlobURL = URL.createObjectURL(selectedFile);
            setImgPreview(imgBlobURL);

        } else {
            setImgPreview(null);
        }
    }

    const handleVideoFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setVideo(selectedFile);

        if (selectedFile) {
            const videoBlobURL = URL.createObjectURL(selectedFile);
            setVideoPreview(videoBlobURL);

            if (videoRef.current) {
                videoRef.current.src = videoBlobURL;
            }
        } else {
            setVideoPreview(null);
            if (videoRef.current) {
                videoRef.current.src = null;
            }
        }
    }

    return (
        <div id={'newGameCtgCardMainContainer'}>
            <div id={'newGameCtgCardSettingsContainer'}>
                <h2>Добавь карточку блока "Категории"</h2>
                <div>
                    <h3>Загрузи картинку</h3>
                    <input type={'file'} accept={'image/*,video/*'} ref={imgRef} onChange={handleImgFileChange}/>
                    <div className={'newGameCtgCardSettingsPreviewContentContainer'}>
                        {imgPreview ? (
                            <img src={imgPreview} alt={'Превью'} width='320'/>
                        ) : null}
                    </div>
                    <h3>Загрузи видео</h3>
                    <input type={'file'} accept={'image/*,video/*'} onChange={handleVideoFileChange}/>
                    <div className={'newGameCtgCardSettingsPreviewContentContainer'}>
                        {videoPreview ? (
                            <video ref={videoRef} width={'320'} height={'240'} controls={false} autoPlay loop muted>
                                <source src={videoPreview} type={'video/mp4'}/>
                            </video>
                        ) : null}
                    </div>
                </div>
            </div>
            <div id={'newGameCtgCardPreviewContainer'}>
                <h2>Превью</h2>
                <div className={'ctgPreviewContainer'}>
                    {imgPreview && videoPreview ?
                        <Category key={videoPreview} bg={imgPreview} name={''} to={''} video={videoPreview}/>
                        :
                        <h2>Здесь будет превью карточки</h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default NewGameCtgCard;