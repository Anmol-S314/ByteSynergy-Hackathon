import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import '../../StyleSheet.css'
import BackgroundImage from '../../assets/images/Beach2.jpg'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center" id="headerfont">Universal Blockchain Patient Portal</h1>
            <p className="main-para text-center">Connect with your crypto-wallet and thats all you need!</p>
            <div className="buttons text-center">
                <Link to="/UploadImages">
                    <button className="primary-button" id="Button1"><span>Document View/Upload</span></button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="Button2"><span>Insert patient data</span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}