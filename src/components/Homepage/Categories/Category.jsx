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
            if (!videoRef.current.paused) {
                videoRef.current.pause();
            } // if video wasn't paused, then pause and only after it play
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setVideoPlaying(true);
        } else {
            videoRef.current.addEventListener('loadeddata', function canPlayThrough() {
                setVideoLoaded(true);
                if (!videoRef.current.paused) {
                    videoRef.current.pause();
                }
                videoRef.current.currentTime = 0;
                videoRef.current.play();
                setVideoPlaying(true);
                videoRef.current.removeEventListener('loadeddata', canPlayThrough)
            })
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (videoRef.current) {
            if (show && videoPlaying && videoLoaded) {
                if (!videoRef.current.paused) {
                    videoRef.current.pause();
                }
                setVideoPlaying(false);
                setVideoLoaded(false);
            }
            setShow(false);
        }
    }, [show, videoPlaying, videoLoaded]);

    return (
        <span
            style={{background: `url(${bg})`}}
            className={'ctgGame'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
                <NavLink className={'ctgLink'} to={to}>
                    <video ref={videoRef} className={'ctgVideo'} loop muted>
                        <source src={video} type='video/mp4'/>
                    </video>
                </NavLink>
            </span>
    )
}

export default React.memo(Category)