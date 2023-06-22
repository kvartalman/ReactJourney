import React, {useCallback, useRef, useState} from "react";
import {NavLink} from "react-router-dom";

const Category = ({bg, name, to, video}) => {

    const videoRef = useRef(null);
    const [show, setShow] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(false);


    // 2 functions that responsible for turning the videos on and off inside NavLinks
    // Better not to touch because was problems with async pause() and play() before, now all works fine
    const handleMouseEnter = useCallback(() => {
        setShow(true);
        if (videoRef.current.readyState >= 2) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setVideoPlaying(true);
        } else {
            videoRef.current.addEventListener('canplaythrough', function canPlayThrough() {
                setVideoLoaded(true);
                videoRef.current.currentTime = 0;
                videoRef.current.play();
                setVideoPlaying(true);
                videoRef.current.removeEventListener('canplaythrough', canPlayThrough)
            })
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (show && videoPlaying && videoLoaded) {
            videoRef.current.pause();
            setVideoPlaying(false);
            setVideoLoaded(false);
        }
        setShow(false);
    }, [show, videoPlaying, videoLoaded]);

    return (
        <span
            style={{background: `url(${bg})`}}
            className={'ctgGame'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
                <NavLink className={'ctgLink'} to={to}>
                    {name}
                    <video ref={videoRef} className={'ctgVideo'} loop autoPlay muted>
                        <source src={video} type='video/mp4'/>
                    </video>
                </NavLink>
            </span>
    )
}

export default Category