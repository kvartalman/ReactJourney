import React, {useRef, useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Category from "../../../../Homepage/Categories/Category";
import '../../../../Homepage/Categories/Categories.css'
import {Col, Row} from "react-bootstrap";
import './HomepageCardView.css'
import {useSelector} from "react-redux";

const HomepageCardView = (props) => {

    const categoriesSelector = useSelector(state => state.categories.categoriesLinks);

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

    // We create URL for video to show preview in admin panel. We use createObjectURL to create temporary URL
    // we use condition 'if (video.current)...' to realise if videoRef != null (without this we will get error)
    // If we have already selected a video, then videoRef != null and we can choose again. We will see our new chosen
    // video in preview. Earlier, I had a mistake where I didn't get new video in preview (1st video was in preview, but
    // when you choose second - you still see first, when you choose third - you get second chosen video in preview and
    // so on).

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
        <div id={'homePageCardViewMainContainer'}>
            <div id={'homePageCardViewSettingsMainContainer'}>
                <h2>Измени вид карточки блока "Категории"</h2>
                <h3>Загрузи картинку</h3>
                <input type={'file'} accept={'image/*,video/*'} ref={imgRef} onChange={handleImgFileChange}/>
                <div>
                    {imgPreview ? (
                            <img src={imgPreview} alt={'Превью'} width='320'/>
                    ) : null}
                </div>
                <h3>Загрузи видео</h3>
                <input type={'file'} accept={'image/*,video/*'} onChange={handleVideoFileChange}/>
                <div>
                    {videoPreview ? (
                            <video ref={videoRef} width={'320'} height={'240'} controls={false} autoPlay loop muted>
                                <source src={videoPreview} type={'video/mp4'}/>
                            </video>
                    ) : null}
                </div>
            </div>
            <div id={'homePageCardViewPreviewMainContainer'}>
                <div>
                    <h2>Текущая карточка</h2>
                    <div className={'ctgPreviewContainer'}>
                        {
                            categoriesSelector.map((categoryElem, i) => {

                                if (props.gamePagesSelector.fullName === categoryElem.name) {
                                    return (<Category
                                            bg={categoriesSelector[i].bg}
                                            name={categoriesSelector[i].name}
                                            to={categoriesSelector[i].to}
                                            video={categoriesSelector[i].video}
                                            key={i}
                                        />
                                    );
                                }
                                return null;
                            })
                        }
                    </div>
                </div>
                <div>
                    <h2>Новая карточка</h2>
                    <div className={'ctgPreviewContainer'}>
                        {imgPreview && videoPreview ?
                            <Category key={videoPreview} bg={imgPreview} name={''} to={''} video={videoPreview}/>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomepageCardView;