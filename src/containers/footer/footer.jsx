import React, { Component } from 'react';
import './footer.css'
// import { facebook, linkdin, instagram } from './import'
class Footer extends Component {
    render() {
        return (
            <div className='project__footer'>
                <div className='project__footer--links'>
                    <div className='project__footer--links_container'>
                        <p><a href="#features">FAQ</a></p>
                        <p><a href="#contact">CONTACT</a></p>
                    </div>
                    <div className='project__footer--links_logo'>
                        <a href="https://www.facebook.com/monta.khaled.96/"><img src='images/linkdin.png' alt='img0' /></a>
                        <a href="https://www.facebook.com/monta.khaled.96/"><img src='images/facebook.png' alt='img0' /></a>
                        <a href="https://www.facebook.com/monta.khaled.96/"><img src='images/instagram.png' alt="aa" /></a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Footer;
