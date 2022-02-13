import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import '../../StyleSheet.css'

// export default function Footer() {
// 	return(<div className="text-center" id="Footer_homepage">
// 		<a href="https://izemspot.netlify.com" target="_blank" rel="noopener noreferrer">
// 		Meet the designers
// 		</a>
// 		</div>
// 	);
// }

export default function Footer() {
    return (
        <p className="text-center" style={ FooterStyle }>
			Meet the developers and read terms of service by clicking
			{/* <a href="https://izemspot.netlify.com" target="_blank" rel="noopener noreferrer">
				Here
				</a> */}
				<Link to="/termsOfService"> Here</Link>
				</p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}