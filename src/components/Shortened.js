import React, { useState } from 'react'
import './Shortened.css'
import CopyToClipboard from 'react-copy-to-clipboard'

const Shortened = ({ shortenedLinks }) => {
    const [copyButtonText, setCopyButtonText] = useState('Copy')
    const handleCopy = (e) => {
        setCopyButtonText('Copied!')
        e.target.classList.add('shortened-button-copied')
    }
    return (
        <div className="shortened-container">
            <div className="shortened">
                <div className="shortened-text font-poppins-500">{shortenedLinks.result.original_link}</div>
                <div className="shortened-devider"></div>
                <div className="shortened-text font-poppins-500 color-cyan">{shortenedLinks.result.full_short_link}</div>
                <CopyToClipboard text={shortenedLinks.result.full_short_link}><div className="shortened-button font-poppins-700" id="copyButton" onClick={(e) => handleCopy(e)}>{copyButtonText}</div></CopyToClipboard>
            </div>
        </div>
    )
}

export default Shortened
