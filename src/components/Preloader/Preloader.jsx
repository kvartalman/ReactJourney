import React from 'react';
import './Preloader.css'
const Preloader = () => {
    return (
        <div id={'preloader'}>
            <img src={'./preloader.gif'} alt={'Loading...'} />
        </div>
    )
}

export default Preloader