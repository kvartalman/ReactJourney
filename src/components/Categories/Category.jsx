import React, {useRef, useState} from "react";
import {NavLink} from "react-router-dom";

const Category = ({bg, name, to, video}) => {

    const videoRef = useRef(null);
    const [show, setShow] = useState(false);

    const toggleVideo = () => {
        setShow(!show);
        if (!show) {
            videoRef.current.currentTime = 0;
            if (videoRef.current.readyState >= 2) {
            videoRef.current.play();
            } else {
                videoRef.current.addEventListener('canplaythrough', function canPlayThrough() {
                    videoRef.current.play();
                    videoRef.current.removeEventListener('canplaythrough', canPlayThrough)
                })
            }
        } else {
            videoRef.current.pause();
        }
    }

    return (
        <span
            style={{background: `url(${bg})`}}
            className={'ctgGame'}
            onMouseEnter={toggleVideo}
            onMouseLeave={toggleVideo}
        >
                <NavLink className={'ctgLink'} to={to}>
                    {name}
                    <video ref={videoRef} className={'ctgVideo'} loop autoPlay muted>
                        <source src={video} type='video/mp4' />
                    </video>
                </NavLink>
            </span>
    )
}

export default Category