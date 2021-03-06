import React from "react"
// import { StaticQuery, graphql } from "gatsby"

import "./../styles/footer-style.css"
import instalogo from "../res/instagram-logo-black.png"
import facebooklogo from "../res/fb-logo-black.png"
import pintrestlogo from "../res/pintrest-logo-black.png"


class Footer extends React.Component{
	constructor() {
		super()
        // this.state = {count: 0}
	}
	render(){
		return <div className = "footer-container">
            
            <footer class="footer-distributed">

			<div class="footer-right">

				{/* <a href="#"><i class="fa fa-facebook"></i></a>
				<a href="#"><i class="fa fa-twitter"></i></a>
				<a href="#"><i class="fa fa-linkedin"></i></a>
				<a href="#"><i class="fa fa-github"></i></a> */}

                <a href="https://www.instagram.com/perfect.traveller/?hl=en" target="_blank"><img src = {instalogo} width = "30"></img></a>
                        <a href="https://www.facebook.com/Perfect-Traveller-Pty-Ltd-171235276220004/" target="_blank"><img src = {facebooklogo} width = "30"></img></a>
                      <a href="https://www.pinterest.com.au/perfectraveller/" target="_blank"><img src = {pintrestlogo} width = "30"></img></a>

			</div>

			<div class="footer-left">

				<p class="footer-links">
					<a class="link-1" href="/">Home</a>

					<a href="/experience-template">Experience</a>

					<a href="#">Tradition</a>

					<a href="#">Culture</a>

					<a href="#">Food</a>
					<a href="#">Music</a>
					<a href="/about">About</a>



				</p>

				<p>Italy DownUnder &copy; 2020</p>
			</div>

		</footer>
        </div>
}
 


}

export default Footer