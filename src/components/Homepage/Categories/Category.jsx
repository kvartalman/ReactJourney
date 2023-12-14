import React, {useEffect, useRef} from "react";
import {NavLink} from "react-router-dom";

const Category = ({bg, name, to, video}) => {

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error('Error during play()', error);
            });
        }

    }

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }

    useEffect(() => {

    }, []);

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