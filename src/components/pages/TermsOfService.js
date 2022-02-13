import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import '../../StyleSheet.css'
import BackgroundImage from '../../assets/images/bg.png'
import Abhinav from '../../assets/images/Abhinav.jpeg'
import Aamod from '../../assets/images/Aamod.jpeg'
import Anmol from '../../assets/images/Anmol.jpeg'
import Dewanshi from '../../assets/images/Dewanshi.jpg'
import Beach from '../../assets/images/beach.jpg'
import GitHubLogo from '../../assets/images/GithubLogo.png'

export default function LandingPage() {
    return (
        // <header style={ HeaderStyle }>
        //     <h1 className="main-title text-center" id="headerfont">Universal Blockchain Patient Portal</h1>
        //     <p className="main-para text-center">Connect with your crypto-wallet and thats all you need!</p>
        //     <div className="buttons text-center">
        //         <Link to="/UploadImages">
        //             <button className="primary-button" id="Button1"><span>Document View/Upload</span></button>
        //         </Link>
        //         <Link to="/register">
        //             <button className="primary-button" id="Button2"><span>Insert patient data</span></button>
        //         </Link>
        //     </div>
        // </header>
		<header style={ HeaderStyle }>
			<p className="main-para text-center">Meet the developers!</p>
			<div className='imgWrapper'>
				<figure>
					<div className='Container'>
						<img src={Abhinav} alt="Picture" className='img' />
						<div className='middle'>
						<a href="https://github.com/Abhinav-Mahajan10" target='_blank'>
						<img src={GitHubLogo} alt="Picture"/>
						</a>
						</div>
					</div>
					<figcaption className='caption'>
						<a href="mailto:Abhinav.Mahajan@iiitb.ac.in" className='caption'>
							Email me!
						</a>
					</figcaption>
				</figure>
				<figure>
					<div className='Container'>
						<img src={Aamod} alt="Picture" className='img' />
						<div className='middle'>
						<a href="https://github.com/aamodbk" target='_blank'>
						<img src={GitHubLogo} alt="Picture"/>
						</a>
						</div>
					</div>
					<figcaption className='caption'>
						<a href="mailto:Aamod.BK@iiitb.ac.in" className='caption'>
							Email me!
						</a>
					</figcaption>
				</figure>
				<figure>
					<div className='Container'>
						<img src={Anmol} alt="Picture" className='img' />
						<div className='middle'>
						<a href="https://github.com/Anmol-S314" target='_blank'>
						<img src={GitHubLogo} alt="Picture"/>
						</a>
						</div>
					</div>
					<figcaption className='caption'>
						<a href="mailto:Anmol.Shetty@iiitb.ac.in" className='caption'>
							Email me!
						</a>
					</figcaption>
				</figure>
				<figure>
					<div className='Container'>
						<img src={Dewanshi} alt="Picture" className='img' />
						<div className='middle'>
						<a href="https://github.com/DewanshiDewan" target='_blank'>
						<img src={GitHubLogo} alt="Picture"/>
						</a>
						</div>
					</div>
					<figcaption className='caption'>
						<a href="mailto:Dewanshi.Dewan@iiitb.ac.in" className='caption'>
							Email me!
						</a>
					</figcaption>
				</figure>
			</div>
			{/* <img src={Dev1Img} alt="Picture" style={Img1} id="ImgDev1"/>
			<img src={Dev1Img} alt="Picture" style={Img2} id="ImgDev2"/>
			<img src={Dev1Img} alt="Picture" style={Img3} id="ImgDev3"/>
			<img src={Dev1Img} alt="Picture" style={Img4} id="ImgDev4"/> */}
			<p className="main-para text-center">
				<div className='Heading2'>
				Terms of Service!
				</div>
			</p>
			<div className='Content'>
				We value your privacy! You can check out the repo for the completely decentralised application. <br/>
				You can Store all data, however sensitive, with the Comfort of knowing only you and YOU can access the data.<br/>
				The data can range from medically important data such as MRI's, X-Rays, Aadhar Cards, Driver license, etc.<br/>
				All you need is a wallet as an extension on a browser:)
			</div>
			<footer className='MyFoot'>
		<p><Link to="/" className='MyLink'>Back to Homepage</Link>.</p>
	</footer>
		</header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${Beach})`,
    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const Img1 = {
	width: 200,
	height: 200,
	margin: '80px'
}
const Img2 = {
	width: 200,
	height: 200,
	margin: '80px'
}
const Img3 = {
	width: 200,
	height: 200,
	margin: '80px'
}
const Img4 = {
	width: 200,
	height: 200,
	margin: '80px'
}