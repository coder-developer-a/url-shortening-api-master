import React from 'react'
import './Info.css'
import imageInfo from './assets/illustration-working.svg';

const Info = () => {
    return (
        <div className="info">
            <img src={imageInfo} alt="..." className="info-image"/>
            <div className="info-text">
                <div className="info-title font-poppins-700 color-verydarkviolet">More than just shorter links</div>
                <div className="info-description font-poppins-500 color-grayishviolet">Build your brand's recognition and get detailed insights on how your links are performing.</div>
                <div className="info-button font-poppins-700">Get Started</div>
            </div>
        </div>
    )
}

export default Info
