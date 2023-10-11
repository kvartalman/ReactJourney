import React, {useRef, useState} from "react";
import Button from "react-bootstrap/Button";
import Category from "../../../../Categories/Category";

const HomepageCardView = () => {

    const [img, setImg] = useState(null);
    const [video, setVideo] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);
    const videoRef = useRef(null);


    const handleImgFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setImg(selectedFile);

        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImgPreview(e.target.result);
            };

            reader.readAsDataURL(selectedFile);
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
        <div>
            <input type={'file'} accept={'image/*,video/*'} onChange={handleImgFileChange}/>
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
            <div>
                {imgPreview && videoPreview ?
                    <Category bg={imgPreview} name={''} to={''} video={videoPreview}/>
                    :
                    null
                }
            </div>
        </div>
    );
}

export default HomepageCardView;