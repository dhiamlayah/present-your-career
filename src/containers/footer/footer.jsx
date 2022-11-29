import React, { Component } from 'react';
import './footer.css'
// import { facebook, linkdin, instagram } from './import'
class Footer extends Component {
    render() {
        return (
            <div className='project__footer'>
                 <div className='ressource'>
                    <h3>Ressources :</h3><br />
                     <a href="">Conseils</a><br />
                     <a href="">exemples</a>
                    
                  </div>
                 <div className='service-client'>
                    <h3>service client :</h3> <br />
                    <ul  type="1">
                        <a href="">FAQ</a><br />
                        <a href="">Contact</a><br />
                        <a href="">À propos</a>
                    </ul>
                 </div>
                 <div className='aboutus'>
                     <div className='titel'><h3>About us :</h3></div>
                    <div className='socialmedia'>
                    <details>
                        <summary><img src="images/socialmedia/face.png" alt="" /></summary>
                        <a href="">dhia</a><br />
                        <a href="">haithem</a> <br />
                        <a href="">med aziz</a> <br />
                        <a href="">rayen</a>
                    </details>
                    <details>
                        <summary><img src="images/socialmedia/email.png" alt="" /></summary>
                        <a href="">dhia</a><br />
                        <a href="">haithem</a> <br />
                        <a href="">med aziz</a> <br />
                        <a href="">rayen</a>
                    </details><details>
                        <summary><img src="images/socialmedia/linkedin.png" alt="" /></summary>
                        <a href="">dhia</a><br />
                        <a href="">haithem</a> <br />
                        <a href="">med aziz</a> <br />
                        <a href="">rayen</a>
                    </details><details>
                        <summary><img src="images/socialmedia/insta.png" alt="" /></summary>
                        <a href="">dhia</a><br />
                        <a href="">haithem</a> <br />
                        <a href="">med aziz</a> <br />
                        <a href="">rayen</a>
                    </details>
                    </div>
                 </div> <br />
            </div>
        );
    }
}

export default Footer;
