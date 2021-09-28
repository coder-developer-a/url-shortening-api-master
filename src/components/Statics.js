import React from 'react'
import './Statics.css'
import iconBrandrecognition from './assets/icon-brand-recognition.svg'
import iconDetailedrecords from './assets/icon-detailed-records.svg'
import iconFullycustomizable from './assets/icon-fully-customizable.svg' 

const Statics = () => {
    return (
        <div className="statics">
            <div className="statics-text">
                <div className="statics-title font-poppins-700 color-verydarkviolet">Advanced Statics</div>
                <div className="statics-description font-poppins-500 color-grayishviolet">Track how your links are performing across the web with our advanced statics dashboard.</div>
            </div>
            <div className="statics-items">
                <div className="statics-item align-start">
                    <div className="item-image-container"> 
                        <img src={iconBrandrecognition} alt="..." className="item-image"/>
                    </div>
                    <div className="item-text">
                        <div className="statics-item-title font-poppins-700 color-verydarkviolet">Brand Recognition</div>
                        <div className="item-description font-poppins-500 color-grayishviolet">Boost your brand recognition with each click. Generic links don't mean a thing. branded links help instil confidence in your content.</div>
                    </div>
                </div>
                <div className="connector"></div>
                <div className="statics-item align-center">
                    <div className="item-image-container"> 
                        <img src={iconDetailedrecords} alt="..." className="item-image"/>
                    </div>
                    <div className="item-text">
                        <div className="statics-item-title font-poppins-700 color-verydarkviolet">Detailed Records</div>
                        <div className="item-description font-poppins-500 color-grayishviolet">Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions.</div>
                    </div>
                </div>
                <div className="connector"></div>
                <div className="statics-item align-end">
                    <div className="item-image-container"> 
                        <img src={iconFullycustomizable} alt="..." className="item-image"/>
                    </div>
                    <div className="item-text">
                        <div className="statics-item-title font-poppins-700 color-verydarkviolet">Fully Customizable</div>
                        <div className="item-description font-poppins-500 color-grayishviolet">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statics
