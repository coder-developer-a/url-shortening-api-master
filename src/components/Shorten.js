import React, { useState, useEffect } from 'react'
import './Shorten.css'
import axios from 'axios'
import Shortened from './Shortened'

const Shorten = () => {
    const [input, setInput] = useState('')
    const [inputLink, setInputLink] = useState('firstRender')
    let savedLinks = []
    if(JSON.parse(localStorage.getItem('id')) !== null) {
        savedLinks = JSON.parse(localStorage.getItem('shortenedLinks'))
    }
    const [shortenedLinks, setShortenedLinks] = useState(savedLinks)
    const handleShorten = () => {
        setInputLink(input)
        setInput('')
    }
    useEffect(() => {
        const fetchShortenlink = async () => {
            await axios(`https://api.shrtco.de/v2/shorten?url=${inputLink}`)
                .then( (response) => {
                    localStorage.setItem('id', JSON.parse(localStorage.getItem('id')) + 1)
                    response.data.id = JSON.parse(localStorage.getItem('id'))
                    setShortenedLinks(shortenedLinks => [...shortenedLinks, response.data])
                    shortenedLinks.push(response.data)
                    localStorage.setItem('shortenedLinks', JSON.stringify(shortenedLinks))
                    console.log(response.data)
                    console.log(shortenedLinks)
                    document.getElementById('shortenInput').classList.remove('shorten-invalid-input-border')
                    document.getElementById('invalidInput').classList.remove('show-invalid')
                }, (error) => {
                    document.getElementById('shortenInput').classList.add('shorten-invalid-input-border')
                    document.getElementById('invalidInput').classList.add('show-invalid')
                })
        }
        if (inputLink !== 'firstRender') {
            fetchShortenlink()
        }   
    },[inputLink])
    return (
        <>
            <div className="shorten-container">
                <div className="shorten">
                    <input type="text" className="shorten-input font-poppins-500" id="shortenInput" placeholder="Shorten a link here..." value={input} onChange={(e) => setInput(e.target.value)}/>
                    <div className="shorten-invalid-input font-poppins-500" id="invalidInput">Please add a link</div>
                    <div className="shorten-button font-poppins-700" onClick={handleShorten}>Shorten it!</div>
                </div>
            </div>
            {shortenedLinks.map(item => <Shortened key={item.id} shortenedLinks={item} />)}
        </>
    )
}

export default Shorten
