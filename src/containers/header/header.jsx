import React,{Component}  from 'react';
import './header.css';
class Header extends Component {
    state = {  } 
    render() {
        
        
      return <section className='at-container'>
      <h1 className='at-item'>Créez votre  <span>CV</span> professionnel</h1>
      <p>Remplissez le formulaire et Télécharger votre CV</p>
      <button className='button-9' role={'button'}><span>Créer votre CV</span></button>
      </section> 
    }
}
 
export default Header;



