import React from 'react';
import { Article,Cta,Brand,Feature,Navbar} from './Component/index';
import { Blag,Features,Footer,Possibility,WhatPYC,Header} from './containers/index' //?fi 3oth ma n93do n3mlo fi import lkol wa7da n7tohom lkol fard mara 
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {Home ,Sign} from './Pages/index'
 
function App () {
    return ( 
           <Router>
            <div className='app'>
                <div className='gradient__bg'>
                     <Navbar/>   
                </div>
                    <Routes>
                       <Route path='/Home' element={<Home/>} />
                       <Route path='/Sign/*' element={<Sign/>}/>
                    </Routes>


             
           </div>

           </Router>
     );
}

export default App ;