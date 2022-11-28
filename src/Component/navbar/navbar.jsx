import React, { Component } from 'react';
import './navbar.css';
// import logo from '../assets/logo.svg'
class Navbar extends Component {
  render() {
    return (
      <div className='project__navbar'>
        <div className='project__navbar--links'>
          <div className='project__navbar--links_logo'>
            {/* <img src={logo} alt='logo' /> */}

          </div>
          <div className='project__navbar--links_container'>
            <p><a href='#home'>Home</a></p>
            <p><a href='#wpro'>Models</a></p>
            <p><a href='#possibility'>Espace entreprise</a></p>
            <p><a href='#features'>FAQ</a></p>
          </div>
        </div>
        <div className='project__navbar--sign'>
          <p>sign in</p>
          <button type='button'><a href='#signup'>sign up</a></button>
        </div>
        <div className='project__navbar--menu'>
        </div>
      </div>
    );
  }
}

export default Navbar;