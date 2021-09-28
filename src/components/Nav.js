import React from 'react'
import logo from './assets/logo.svg'
import './Nav.css'

const Nav = () => {
    const handleDropdown = () => {
        document.getElementById('dropdown').classList.toggle('show');
    }
    return (
        <div className="nav">
            <div className="nav-align-center">
                <img src={logo} alt="Shortly logo" className="logo"/>
                <span className="nav-item font-poppins-700 color-grayishviolet">Features</span>
                <span className="nav-item font-poppins-700 color-grayishviolet">Pricing</span>
                <span className="nav-item font-poppins-700 color-grayishviolet">Resources</span>
            </div>
            <div className="nav-align-center">
                <div className="icon-list" onClick={handleDropdown}><svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg></div>
                <span className="nav-item font-poppins-700 color-grayishviolet">Login</span>
                <span className="signup-md font-poppins-700 color-grayishviolet">Sign Up</span>
            </div>
            <div className="dropdown" id="dropdown">
                <div className="dropdown-item font-poppins-700">Features</div>
                <div className="dropdown-item font-poppins-700">Pricing</div>
                <div className="dropdown-item font-poppins-700">Resources</div>
                <div className="dropdown-devider"></div>
                <div className="dropdown-item font-poppins-700">Login</div>
                <div className="signup font-poppins-700">Sign Up</div>
            </div>
        </div>
    )
}

export default Nav
