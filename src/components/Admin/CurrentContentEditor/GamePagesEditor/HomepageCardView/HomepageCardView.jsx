import React, {useState} from "react";
import Button from "react-bootstrap/Button";

const HomepageCardView = () => {

    const [img, setImg] = useState(null);
    const [video, setVideo] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);

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

    const handleVideoFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setVideo(selectedFile);

        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = (e) => {

                setVideoPreview(e.target.result);
            };

            reader.readAsDataURL(selectedFile);
        } else {
            setVideoPreview(null);
        }
    }

    const handleUpload = () => {
        if (img) {
            console.log('Your file', img)
        }
    }

    return (
        <div>
            <input type={'file'} accept={'image/*,video/*'} onChange={handleImgFileChange} />
            {imgPreview ? (
                <div>
                    <img src={imgPreview} alt={'Превью'} width='100' />
                </div>
            ) : null}
            <input type={'file'} accept={'image/*,video/*'} onChange={handleVideoFileChange} />
            {videoPreview ? (
                <div>
                    <video width={'320'} height={'240'} controls={false} autoPlay loop muted>
                        <source src={videoPreview} type={'video/mp4'} />
                        </video>
                </div>
            ) : null}
            <Button onClick={handleUpload}>Load</Button>
        </div>
    );
}

export default HomepageCardView;