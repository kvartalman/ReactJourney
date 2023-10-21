import React, {useRef, useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Category from "../../../../Categories/Category";
import '../../../../Categories/Categories.css'
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

    const handleUpload = () => {
        if (img) {
            console.log('Your file', img)
        }
    }
    return (
        <Container fluid>
            <Row>
                <Col>
                    <input type={'file'} accept={'image/*,video/*'} ref={imgRef} onChange={handleImgFileChange}/>
                    {imgPreview ? (
                        <div>
                            <img src={imgPreview} alt={'Превью'} width='100'/>
                        </div>
                    ) : null}
                    <input type={'file'} accept={'image/*,video/*'} onChange={handleVideoFileChange}/>
                    {videoPreview ? (
                        <div>
                            <video ref={videoRef} width={'320'} height={'240'} controls={false} autoPlay loop muted>
                                <source src={videoPreview} type={'video/mp4'}/>
                            </video>
                        </div>
                    ) : null}
                    <Button onClick={handleUpload}>Load</Button>
                </Col>
                <Col>
                    <Container fluid id={'ctgPreviewContainer'}>
                    <h2>Current category card</h2>
                    {
                        categoriesSelector.map((categoryElem, i) => {

                            if (props.gamePagesSelector[props.game].fullName === categoryElem.name) {
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
                </Container>
                    <Container fluid id={'ctgPreviewContainer'}>
                        <h2>New category card</h2>
                        {imgPreview && videoPreview ?
                            <Category key={videoPreview} bg={imgPreview} name={''} to={''} video={videoPreview}/>
                            :
                            null
                        }
                    </Container>
                </Col>
            </Row>
        </Container>
    )
        ;
}

export default HomepageCardView;