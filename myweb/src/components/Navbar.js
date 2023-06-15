import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import dp from '../assets/logos/logo.svg';
import homeLogo from '../assets/logos/home.jpg';
import aboutLogo from '../assets/logos/about.png';
import contactLogo from '../assets/logos/contact.webp';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <header id = "header">
                <div class="d-flex flex-column">
                    <div class="profile">
                    <img src={dp} class="img-fluid rounded-circle"/>
                    <h1 class="text-light"><a href="index.html">Radheshyam T</a></h1>
                   
                    {/* <div class="social-links mt-3 text-center"> */}
                        {/* <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a> */}
                        {/* <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a> */}
                        {/* <a href="#"><img src={dp} class="button-logo"/></a> */}
                        {/* <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a> */}
                        {/* <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a> */}
                        {/* <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a> */}
                    {/* </div> */}
                    </div>

                    <nav id="navbar" class="nav-menu navbar">
                    <ul>
                        <li><a href="#hero" class="nav-link scrollto active"><img src = {homeLogo} class="button-logo"/> <span>Home</span></a></li>
                        <li><a href="#about" class="nav-link scrollto"><img src = {aboutLogo} class="button-logo"/> <span>About</span></a></li>
                        {/* <li><a href="#resume" class="nav-link scrollto"><img src = {homeLogo} class="button-logo"/> <span>Resume</span></a></li> */}
                        {/* <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li> */}
                        {/* <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li> */}
                        <li><a href="#contact" class="nav-link scrollto"><img src = {contactLogo} class="button-logo"/> <span>Contact</span></a></li>
                    </ul>
                    </nav>
                    </div>
            </header>
        );
    }
}
