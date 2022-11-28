import React from 'react';
import { Article,Cta,Brand,Feature,Navbar} from './Component/index';
import { Blag,Features,Footer,Possibility,WhatPYC,Header} from './containers/index' //?fi 3oth ma n93do n3mlo fi import lkol wa7da n7tohom lkol fard mara 
import './App.css';

function App () {
    return ( 
           <div className='app'>
             <div className='gradient__bg'>
                   <Navbar/>
                   <Header/>
             </div>
             <div className='aa'> <img  src="Images/9.png" alt='aa'/>
             </div>
             <Brand/>
             <WhatPYC/>
             <Features/>
             <Possibility/>
             <Cta/>
             <Blag/>
             <Article />
              <Feature />
             <div className="gradient__bg">
             <Footer/>
              </div>
           </div>
     );
}

export default App ;